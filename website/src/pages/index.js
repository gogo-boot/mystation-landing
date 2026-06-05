import React from 'react';
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

const galleryItems = ['Product Front View', 'Angle View', 'Display Close-up', 'Mounted on Wall', 'Weather Mode', 'Packaging'];

export default function Home() {
    return (
        <Layout title="MyStation" description="Deine Abfahrtstafel und Wetterstation fuer Zuhause">
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <img src="/img/mystation-hero.jpg" alt="MyStation" className={styles.heroImage}
                         onError={(e) => e.target.style.display = 'none'} />
                    <h1>MyStation</h1>
                    <p>Deine persoenliche Abfahrtstafel und Wetterstation. Echtzeit-Abfahrten und Wetter auf einem eleganten E-Paper Display - batteriebetrieben fuer Monate.</p>
                    <a href="#buy" className={`${styles.btn} ${styles.btnPrimary}`}>Jetzt kaufen</a>
                    <a href="/docs/user-guide/" className={`${styles.btn} ${styles.btnSecondary}`}>Dokumentation</a>
                </div>
            </section>

            <section className={styles.gallerySection}>
                <h2>Produkt-Galerie</h2>
                <div className={styles.gallery}>
                    <div className={`${styles.galleryItem} ${styles.galleryItemMain}`}>📷 {galleryItems[0]}</div>
                    <div className={`${styles.galleryItem} ${styles.galleryItemSide}`}>📷 {galleryItems[1]}</div>
                    <div className={`${styles.galleryItem} ${styles.galleryItemSide}`}>📷 {galleryItems[2]}</div>
                </div>
                <div className={styles.galleryBottom}>
                    <div className={`${styles.galleryItem} ${styles.galleryBottomItem}`}>📷 {galleryItems[3]}</div>
                    <div className={`${styles.galleryItem} ${styles.galleryBottomItem}`}>📷 {galleryItems[4]}</div>
                    <div className={`${styles.galleryItem} ${styles.galleryBottomItem}`}>📷 {galleryItems[5]}</div>
                </div>
            </section>

            <section className={styles.features}>
                <h2>Warum MyStation?</h2>
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
                <div className={styles.price}>79 EUR</div>
                <p className={styles.priceNote}>Inkl. Geraet, Akku und Gehaeuse. Kostenloser Versand innerhalb Deutschlands.</p>
                <a href="#" className={`${styles.btn} ${styles.btnPrimary}`}>Jetzt bestellen</a>
            </section>
        </Layout>
    );
}
