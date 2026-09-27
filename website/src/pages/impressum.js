import React from 'react';
import Layout from '@theme/Layout';

// Impressum (legal notice) — required for German sites per § 5 TMG / § 18 MStV.
// TODO: Replace every [PLATZHALTER ...] below with the real legally required
// details before publishing. Do not leave placeholders live.
export default function Impressum() {
    return (
        <Layout title="Impressum" description="Impressum / Anbieterkennzeichnung MyStation-Go">
            <main className="container margin-vert--lg" style={{maxWidth: 760}}>
                <h1>Impressum</h1>

                <h2>Angaben gemäß § 5 TMG</h2>
                <p>
                    [PLATZHALTER: Name / Firmenname]<br/>
                    [PLATZHALTER: Straße und Hausnummer]<br/>
                    [PLATZHALTER: PLZ und Ort]<br/>
                    [PLATZHALTER: Land]
                </p>

                <h2>Kontakt</h2>
                <p>
                    E-Mail: [PLATZHALTER: kontakt@example.de]<br/>
                    Telefon: [PLATZHALTER: optional]
                </p>

                <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
                <p>
                    [PLATZHALTER: Name]<br/>
                    [PLATZHALTER: Anschrift wie oben]
                </p>

                {/* Only include the following blocks if applicable to you: */}
                <h2>Umsatzsteuer-ID</h2>
                <p>
                    Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br/>
                    [PLATZHALTER: USt-IdNr. oder diesen Abschnitt entfernen, falls nicht vorhanden]
                </p>

                <h2>Streitschlichtung</h2>
                <p>
                    Die Europäische Kommission stellt eine Plattform zur
                    Online-Streitbeilegung (OS) bereit:{' '}
                    <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
                        https://ec.europa.eu/consumers/odr/
                    </a>.<br/>
                    Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor
                    einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>

                <p style={{marginTop: '2rem', fontSize: '0.9rem', color: '#888'}}>
                    {/* TODO: remove this note once the placeholders above are filled in. */}
                    Hinweis: Dieses Impressum enthält noch Platzhalter und muss vor
                    Veröffentlichung mit den echten Angaben ausgefüllt werden.
                </p>
            </main>
        </Layout>
    );
}
