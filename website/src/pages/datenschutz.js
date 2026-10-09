import React from 'react';
import Layout from '@theme/Layout';

// Datenschutzerklärung (privacy policy) — required under GDPR / § 13 TMG,
// especially because the site uses (consent-gated) Google Analytics.
// This is a scaffold reflecting the actual processing on the site. Have it
// reviewed by a professional before relying on it for a commercial offering.
export default function Datenschutz() {
    return (
        <Layout title="Datenschutzerklärung" description="Datenschutzerklärung MyStation-Go">
            <main className="container margin-vert--lg" style={{maxWidth: 760}}>
                <h1>Datenschutzerklärung</h1>

                <h2>1. Verantwortlicher</h2>
                <p>
                    Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne der
                    Datenschutz-Grundverordnung (DSGVO) ist:
                </p>
                <p>
                    Jinwoo Wang<br/>
                    Zentmarkweg 16<br/>
                    60489 Frankfurt am Main<br/>
                    Deutschland<br/>
                    E-Mail: <a href="mailto:info@mystation-go.de">info@mystation-go.de</a>
                </p>

                <h2>2. Hosting (GitHub Pages)</h2>
                <p>
                    Diese Website wird bei GitHub Pages gehostet, einem Dienst der GitHub, Inc.,
                    88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA. Beim Aufruf der
                    Website verarbeitet GitHub technisch notwendige Zugriffsdaten (z.&nbsp;B.
                    IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite, User-Agent),
                    um die Auslieferung der Seite zu ermöglichen und die Sicherheit zu
                    gewährleisten. Rechtsgrundlage ist das berechtigte Interesse an einem
                    sicheren und zuverlässigen Betrieb der Website (Art.&nbsp;6 Abs.&nbsp;1
                    lit.&nbsp;f DSGVO). Da GitHub Daten auch in den USA verarbeiten kann, erfolgt
                    die Übermittlung auf Grundlage der Standardvertragsklauseln der
                    EU-Kommission. Weitere Informationen:{' '}
                    <a href="https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener noreferrer">
                        GitHub Privacy Statement
                    </a>.
                </p>

                <h2>3. Server-Logfiles</h2>
                <p>
                    Es werden keine eigenen Server-Logfiles durch den Verantwortlichen erhoben.
                    Die technisch bedingte Protokollierung erfolgt ausschließlich durch den
                    Hoster (siehe Abschnitt 2).
                </p>

                <h2>4. Cookies und Einwilligung</h2>
                <p>
                    Diese Website setzt standardmäßig keine Tracking-Cookies. Beim ersten Besuch
                    wird ein Einwilligungsbanner angezeigt. Deine Entscheidung („Akzeptieren" oder
                    „Ablehnen") wird lokal in deinem Browser gespeichert (localStorage), damit das
                    Banner nicht erneut erscheint. Diese Speicherung ist für die Funktion
                    erforderlich und enthält keine personenbezogenen Daten.
                </p>

                <h2>5. Google Analytics (nur mit Einwilligung)</h2>
                <p>
                    Diese Website nutzt Google Analytics 4, einen Webanalysedienst der Google
                    Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Google
                    Analytics wird <strong>ausschließlich nach deiner ausdrücklichen Einwilligung</strong>
                    {' '}über das Cookie-Banner geladen (Mess-ID: G-JV671HWVNL). Ohne Einwilligung
                    werden keine Analyse-Cookies gesetzt und kein Analyse-Skript geladen.
                </p>
                <p>
                    Bei erteilter Einwilligung verarbeitet Google Informationen über deine Nutzung
                    der Website (z.&nbsp;B. gekürzte IP-Adresse, aufgerufene Seiten, Zeitpunkt,
                    ungefährer Standort, Geräte- und Browserinformationen) zu statistischen
                    Zwecken. Rechtsgrundlage ist deine Einwilligung (Art.&nbsp;6 Abs.&nbsp;1
                    lit.&nbsp;a DSGVO sowie § 25 Abs.&nbsp;1 TDDDG). Du kannst deine Einwilligung
                    jederzeit mit Wirkung für die Zukunft widerrufen, indem du die
                    Cookie-Einstellungen deines Browsers löschst. Dabei können Daten an Server von
                    Google in den USA übertragen werden; die Übermittlung erfolgt auf Grundlage der
                    Standardvertragsklauseln. Weitere Informationen:{' '}
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                        Datenschutzerklärung von Google
                    </a>.
                </p>

                <h2>6. Kontaktaufnahme</h2>
                <p>
                    Wenn du uns per E-Mail kontaktierst, verarbeiten wir die von dir übermittelten
                    Daten (E-Mail-Adresse, Inhalt der Nachricht) ausschließlich zur Bearbeitung
                    deiner Anfrage. Rechtsgrundlage ist das berechtigte Interesse an der
                    Beantwortung der Anfrage bzw. die Anbahnung oder Erfüllung eines Vertrags
                    (Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f bzw. lit.&nbsp;b DSGVO).
                </p>

                <h2>7. Deine Rechte</h2>
                <p>
                    Du hast nach der DSGVO das Recht auf Auskunft (Art.&nbsp;15), Berichtigung
                    (Art.&nbsp;16), Löschung (Art.&nbsp;17), Einschränkung der Verarbeitung
                    (Art.&nbsp;18), Datenübertragbarkeit (Art.&nbsp;20) sowie Widerspruch
                    (Art.&nbsp;21). Erteilte Einwilligungen kannst du jederzeit widerrufen. Zur
                    Ausübung deiner Rechte genügt eine E-Mail an{' '}
                    <a href="mailto:info@mystation-go.de">info@mystation-go.de</a>.
                </p>

                <h2>8. Beschwerderecht bei der Aufsichtsbehörde</h2>
                <p>
                    Du hast das Recht, dich bei einer Datenschutz-Aufsichtsbehörde über die
                    Verarbeitung deiner personenbezogenen Daten zu beschweren. Zuständig ist in
                    der Regel die Behörde deines Wohnsitzes oder unseres Sitzes (Hessischer
                    Beauftragter für Datenschutz und Informationsfreiheit).
                </p>

                <p style={{marginTop: '2rem', fontSize: '0.85rem', color: '#888'}}>
                    Stand: Oktober 2026
                </p>
            </main>
        </Layout>
    );
}
