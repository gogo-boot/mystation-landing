import React, {useEffect, useState} from 'react';
import Translate from '@docusaurus/Translate';
import {getConsent, setConsent, loadGoogleAnalytics, initConsentedAnalytics} from '@site/src/js/cookieConsent';
import styles from './CookieConsent.module.css';

// Cookie consent banner with genuine Accept / Reject (opt-in) choices.
// GA only loads after Accept. Choice is remembered in localStorage.
export default function CookieConsent() {
    // undecided => show banner
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Restore GA if previously accepted; show banner only if undecided.
        initConsentedAnalytics();
        if (getConsent() === null) {
            setVisible(true);
        }
    }, []);

    if (!visible) return null;

    const accept = () => {
        setConsent('accepted');
        loadGoogleAnalytics();
        setVisible(false);
    };

    const reject = () => {
        setConsent('rejected');
        setVisible(false);
    };

    return (
        <div className={styles.banner} role="dialog" aria-live="polite" aria-label="Cookie consent">
            <div className={styles.text}>
                <Translate id="cookie.message">
                    Diese Website verwendet Cookies für anonyme Statistik (Google Analytics),
                    nur mit deiner Einwilligung. Ohne Zustimmung werden keine Statistik-Cookies gesetzt.
                </Translate>
                {' '}
                <a href="/impressum">
                    <Translate id="cookie.more">Mehr erfahren</Translate>
                </a>
            </div>
            <div className={styles.buttons}>
                <button className={`${styles.btn} ${styles.reject}`} onClick={reject}>
                    <Translate id="cookie.reject">Ablehnen</Translate>
                </button>
                <button className={`${styles.btn} ${styles.accept}`} onClick={accept}>
                    <Translate id="cookie.accept">Akzeptieren</Translate>
                </button>
            </div>
        </div>
    );
}
