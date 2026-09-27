// Consent-gated Google Analytics loader.
// GA is loaded ONLY after the user explicitly accepts (opt-in), as required by
// TTDSG §25 + GDPR. Rejecting (or ignoring) the banner means GA never loads.
//
// NOTE (legal): this implements the technical opt-in mechanism. Wording and full
// compliance (privacy policy, etc.) must be confirmed with a qualified source.

const GA_TRACKING_ID = 'G-JV671HWVNL';
export const CONSENT_KEY = 'mystation-cookie-consent'; // 'accepted' | 'rejected'

// Read stored decision. Returns 'accepted', 'rejected', or null (undecided).
export function getConsent() {
    if (typeof window === 'undefined') return null;
    try {
        return window.localStorage.getItem(CONSENT_KEY);
    } catch (e) {
        return null;
    }
}

export function setConsent(value) {
    try {
        window.localStorage.setItem(CONSENT_KEY, value);
    } catch (e) {
        /* storage blocked — treat as undecided next load */
    }
}

let gaLoaded = false;

// Inject the GA script and initialize gtag. Idempotent.
export function loadGoogleAnalytics() {
    if (gaLoaded || typeof window === 'undefined') return;
    if (!GA_TRACKING_ID) return;
    gaLoaded = true;

    const s = document.createElement('script');
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(s);

    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    // anonymize_ip retained from the previous gtag preset config.
    gtag('config', GA_TRACKING_ID, { anonymize_ip: true });
}

// On load, if the user previously accepted, restore GA. If undecided or
// rejected, do nothing (no tracking).
export function initConsentedAnalytics() {
    if (getConsent() === 'accepted') {
        loadGoogleAnalytics();
    }
}
