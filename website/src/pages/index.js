import React, {useState} from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const features = [
    { icon: '🚌', title: 'Echtzeit-Abfahrten', desc: 'Aktuelle Abfahrtszeiten von Bus, Bahn, S-Bahn und Tram direkt an der Wand.' },
    { icon: '🌤️', title: 'Wettervorhersage', desc: 'Temperatur, Regenwahrscheinlichkeit und 7-Tage-Prognose auf einen Blick.' },
    { icon: '🔋', title: 'Monatelange Akkulaufzeit', desc: 'Deep Sleep Technologie sorgt fuer bis zu 6 Monate Laufzeit mit einer Ladung.' },
    { icon: '📱', title: 'Einfache Einrichtung', desc: 'Per Handy-Browser konfigurieren - keine App noetig. In 5 Minuten einsatzbereit.' },
    { icon: '🔄', title: 'Automatische Updates', desc: 'Firmware aktualisiert sich automatisch ueber WLAN - immer auf dem neuesten Stand.' },
    { icon: '🔒', title: 'Privat und Lokal', desc: 'Keine Cloud, kein Tracking. Alle Daten bleiben auf deinem Geraet.' },
];

const specs = [
    ['Display', '7,5 Zoll E-Paper (800x480 Pixel)'],
    ['Prozessor', 'ESP32-S3 Dual-Core'],
    ['Konnektivitaet', 'WLAN 2,4 GHz'],
    ['Akku', 'Integrierter Li-Ion, USB-C Laden'],
    ['Akkulaufzeit', 'Bis zu 6 Monate (abhaengig von Einstellungen)'],
    ['Abmessungen', '170 x 111 x 12 mm'],
    ['Gewicht', '~120 g'],
    ['\u00D6PNV-Daten', 'RMV (Rhein-Main-Gebiet)'],
    ['Wetterdaten', 'DWD ICON, ECMWF, Meteo-France, MeteoSwiss, ItaliaMeteo'],
];

const galleryImages = [
    { src: '/img/IMG_0872.jpeg', alt: 'MyStation Front' },
    { src: '/img/IMG_0869.jpeg', alt: 'MyStation Angle' },
    { src: '/img/IMG_0871.jpeg', alt: 'MyStation Display' },
    { src: '/img/IMG_0874.jpeg', alt: 'Mounted on Wall' },
    { src: '/img/IMG_0867.jpeg', alt: 'Weather Mode' },
    { src: '/img/IMG_0876.jpeg', alt: 'Packaging' },
];

export default function Home() {
    const [lightboxSrc, setLightboxSrc] = useState(null);

    return (
        <Layout title="MyStation-Go" description="Deine Abfahrtstafel und Wetterstation fuer Zuhause">
            {lightboxSrc && (
                <div className={styles.lightbox} onClick={() => setLightboxSrc(null)}>
                    <img src={lightboxSrc} alt="" className={styles.lightboxImg} />
                </div>
            )}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <img src="/img/IMG_0872.jpeg" alt="MyStation-Go" className={styles.heroImage}
                         onClick={() => setLightboxSrc('/img/IMG_0872.jpeg')}
                         onError={(e) => e.target.style.display = 'none'} />
                    <h1>MyStation-Go</h1>
                    <p>Deine persoenliche Abfahrtstafel und Wetterstation. Echtzeit-Abfahrten und Wetter auf einem eleganten E-Paper Display - batteriebetrieben fuer Monate.</p>
                    <a href="https://www.ebay.de/itm/178073276495" className={`${styles.btn} ${styles.btnPrimary}`}>Jetzt kaufen</a>
                    <a href="/docs/user-guide/" className={`${styles.btn} ${styles.btnSecondary}`}>Dokumentation</a>
                </div>
            </section>

            <section className={styles.gallerySection}>
                <h2>Produkt-Galerie</h2>
                <div className={styles.gallery}>
                    <div className={`${styles.galleryItem} ${styles.galleryItemMain}`} onClick={() => setLightboxSrc(galleryImages[0].src)}>
                        <img src={galleryImages[0].src} alt={galleryImages[0].alt} />
                    </div>
                    <div className={`${styles.galleryItem} ${styles.galleryItemSide}`} onClick={() => setLightboxSrc(galleryImages[1].src)}>
                        <img src={galleryImages[1].src} alt={galleryImages[1].alt} />
                    </div>
                    <div className={`${styles.galleryItem} ${styles.galleryItemSide}`} onClick={() => setLightboxSrc(galleryImages[2].src)}>
                        <img src={galleryImages[2].src} alt={galleryImages[2].alt} />
                    </div>
                </div>
                <div className={styles.galleryBottom}>
                    <div className={`${styles.galleryItem} ${styles.galleryBottomItem}`} onClick={() => setLightboxSrc(galleryImages[3].src)}>
                        <img src={galleryImages[3].src} alt={galleryImages[3].alt} />
                    </div>
                    <div className={`${styles.galleryItem} ${styles.galleryBottomItem}`} onClick={() => setLightboxSrc(galleryImages[4].src)}>
                        <img src={galleryImages[4].src} alt={galleryImages[4].alt} />
                    </div>
                    <div className={`${styles.galleryItem} ${styles.galleryBottomItem}`} onClick={() => setLightboxSrc(galleryImages[5].src)}>
                        <img src={galleryImages[5].src} alt={galleryImages[5].alt} />
                    </div>
                </div>
            </section>

            <section className={styles.features}>
                <h2>Warum MyStation-Go?</h2>
                <div className={styles.featuresGrid}>
                    {features.map((f, i) => (
                        <div key={i} className={styles.featureCard}>
                            <div className={styles.icon}>{f.icon}</div>
                            <h3>{f.title}</h3>
                            <p>{f.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.specs}>
                <div className={styles.specsInner}>
                    <h2>Technische Daten</h2>
                    <table>
                        <tbody>
                            {specs.map(([label, value], i) => (
                                <tr key={i}><td>{label}</td><td>{value}</td></tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            <section className={styles.cta} id="buy">
                <h2>Bereit fuer deine eigene Abfahrtstafel?</h2>
                <div className={styles.price}>95 EUR</div>
                <p className={styles.priceNote}>Inkl. Geraet, Akku und Gehaeuse. Kostenloser Versand innerhalb Deutschlands.</p>
                <a href="https://www.ebay.de/itm/178073276495" className={`${styles.btn} ${styles.btnPrimary}`}>Jetzt bestellen</a>
            </section>
        </Layout>
    );
}
