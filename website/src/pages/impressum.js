import React from 'react';
import Layout from '@theme/Layout';

// Impressum (legal notice) — required for German sites per § 5 TMG / § 18 MStV.
export default function Impressum() {
    return (
        <Layout title="Impressum" description="Impressum / Anbieterkennzeichnung MyStation-Go">
            <main className="container margin-vert--lg" style={{maxWidth: 760}}>
                <h1>Impressum</h1>

                <h2>Angaben gemäß § 5 TMG</h2>
                <p>
                    Jinwoo Wang<br/>
                    Zentmarkweg 16<br/>
                    60489 Frankfurt am Main<br/>
                    Deutschland
                </p>

                <h2>Kontakt</h2>
                <p>
                    E-Mail: <a href="mailto:info@mystation-go.de">info@mystation-go.de</a>
                </p>

                <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
                <p>
                    Jinwoo Wang<br/>
                    Zentmarkweg 16<br/>
                    60489 Frankfurt am Main<br/>
                    Deutschland
                </p>

                <h2>Umsatzsteuer-ID</h2>
                <p>
                    Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br/>
                    DE456081014
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
            </main>
        </Layout>
    );
}
