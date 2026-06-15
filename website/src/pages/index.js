import React, {useState} from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Translate, {translate} from '@docusaurus/Translate';
import styles from './index.module.css';

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "MyStation-Go",
    "description": "Echtzeit-Abfahrtstafel und Wetterstation für Zuhause. E-Paper Display mit RMV S-Bahn, U-Bahn, Bus Abfahrten und Wetter. Batteriebetrieben für Monate.",
    "image": "https://www.mystation-go.de/img/IMG_0872.jpeg",
    "brand": {"@type": "Brand", "name": "MyStation-Go"},
    "offers": {
        "@type": "Offer",
        "price": "95",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock",
        "url": "https://www.ebay.de/itm/178073276495"
    }
};

const features = {
    de: [
        { icon: '🚌', title: 'Echtzeit-Abfahrten', desc: 'Aktuelle Abfahrtszeiten von Bus, Bahn, S-Bahn und Tram direkt an der Wand.' },
        { icon: '🌤️', title: 'Wettervorhersage', desc: 'Temperatur, Regenwahrscheinlichkeit und 7-Tage-Prognose auf einen Blick.' },
        { icon: '🔋', title: 'Monatelange Akkulaufzeit', desc: 'Deep Sleep Technologie sorgt fuer bis zu 6 Monate Laufzeit mit einer Ladung.' },
        { icon: '📱', title: 'Einfache Einrichtung', desc: 'Per Handy-Browser konfigurieren - keine App noetig. In 5 Minuten einsatzbereit.' },
        { icon: '🔄', title: 'Automatische Updates', desc: 'Firmware aktualisiert sich automatisch ueber WLAN - immer auf dem neuesten Stand.' },
        { icon: '🔒', title: 'Privat und Lokal', desc: 'Keine Cloud, kein Tracking. Alle Daten bleiben auf deinem Geraet.' },
    ],
    en: [
        { icon: '🚌', title: 'Real-Time Departures', desc: 'Live departure times for bus, train, S-Bahn, and tram right on your wall.' },
        { icon: '🌤️', title: 'Weather Forecast', desc: 'Temperature, rain probability, and 7-day forecast at a glance.' },
        { icon: '🔋', title: 'Months of Battery Life', desc: 'Deep sleep technology provides up to 6 months on a single charge.' },
        { icon: '📱', title: 'Easy Setup', desc: 'Configure via phone browser — no app needed. Ready in 5 minutes.' },
        { icon: '🔄', title: 'Automatic Updates', desc: 'Firmware updates automatically over WiFi — always up to date.' },
        { icon: '🔒', title: 'Private & Local', desc: 'No cloud, no tracking. All data stays on your device.' },
    ],
};

const specs = {
    de: [
        ['Display', '7,5 Zoll E-Paper (800x480 Pixel)'],
        ['Konnektivitaet', 'WLAN 2,4 GHz'],
        ['Akku', 'Integrierter Li-Ion, USB-C Laden'],
        ['Akkulaufzeit', 'Bis zu 6 Monate (abhaengig von Einstellungen)'],
        ['Abmessungen', '170 x 111 x 12 mm'],
        ['Gewicht', '~120 g'],
        ['ÖPNV-Daten', 'RMV (Rhein-Main-Gebiet)'],
        ['Wetterdaten', 'DWD ICON, ECMWF, Meteo-France, MeteoSwiss, ItaliaMeteo'],
    ],
    en: [
        ['Display', '7.5 inch E-Paper (800x480 pixels)'],
        ['Connectivity', 'WiFi 2.4 GHz'],
        ['Battery', 'Built-in Li-Ion, USB-C charging'],
        ['Battery Life', 'Up to 6 months (depending on settings)'],
        ['Dimensions', '170 x 111 x 12 mm'],
        ['Weight', '~540 g'],
        ['Transit Data', 'RMV (Rhine-Main area, Germany)'],
        ['Weather Data', 'DWD ICON, ECMWF, Meteo-France, MeteoSwiss, ItaliaMeteo'],
    ],
};

const galleryImages = [
    { src: '/img/IMG_0872.jpeg', alt: 'MyStation Front' },
    { src: '/img/IMG_0869.jpeg', alt: 'MyStation Angle' },
    { src: '/img/IMG_0878.jpeg', alt: 'MyStation Side' },
    { src: '/img/IMG_0874.jpeg', alt: 'Mounted on Wall' },
    { src: '/img/IMG_0881.jpeg', alt: 'MyStation Close-up' },
    { src: '/img/IMG_0883.jpeg', alt: 'MyStation Back' },
    { src: '/img/IMG_0867.jpeg', alt: 'Weather Mode' },
    { src: '/img/IMG_0876.jpeg', alt: 'Packaging' },
];

export default function Home() {
    const [lightboxSrc, setLightboxSrc] = useState(null);

    const heroDesc = translate({id: 'homepage.hero.description', message: 'Deine persoenliche Abfahrtstafel und Wetterstation. Echtzeit-Abfahrten und Wetter auf einem eleganten E-Paper Display - batteriebetrieben fuer Monate.'});
    const layoutDesc = translate({id: 'homepage.layout.description', message: 'Echtzeit-Abfahrtstafel und Wetterstation für Zuhause. RMV S-Bahn, U-Bahn, Bus Verspätungen und Wetter auf E-Paper Display.'});
    const locale = translate({id: 'homepage.locale', message: 'de'});

    const localFeatures = features[locale] || features.de;
    const localSpecs = specs[locale] || specs.de;

    return (
        <Layout title="MyStation-Go" description={layoutDesc}>
            <Head>
                <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
            </Head>
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
                    <p>{heroDesc}</p>
                    <a href="https://www.ebay.de/itm/178073276495" target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btnPrimary}`}>
                        <Translate id="homepage.buy">Jetzt kaufen</Translate>
                    </a>
                    <a href="/docs/user-guide/" className={`${styles.btn} ${styles.btnSecondary}`}>
                        <Translate id="homepage.docs">Dokumentation</Translate>
                    </a>
                </div>
            </section>

            <section className={styles.gallerySection}>
                <h2><Translate id="homepage.gallery">Produkt-Galerie</Translate></h2>
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
                    {galleryImages.slice(3).map((img, i) => (
                        <div key={i} className={`${styles.galleryItem} ${styles.galleryBottomItem}`} onClick={() => setLightboxSrc(img.src)}>
                            <img src={img.src} alt={img.alt} />
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.features}>
                <h2><Translate id="homepage.whyTitle">Warum MyStation-Go?</Translate></h2>
                <div className={styles.featuresGrid}>
                    {localFeatures.map((f, i) => (
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
                    <h2><Translate id="homepage.specs">Technische Daten</Translate></h2>
                    <table>
                        <tbody>
                            {localSpecs.map(([label, value], i) => (
                                <tr key={i}><td>{label}</td><td>{value}</td></tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            <section className={styles.cta} id="buy">
                <h2><Translate id="homepage.ctaTitle">Bereit fuer deine eigene Abfahrtstafel?</Translate></h2>
                <div className={styles.price}>95 EUR</div>
                <p className={styles.priceNote}>
                    <Translate id="homepage.ctaNote">Inkl. Geraet, Akku und Gehaeuse. Kostenloser Versand innerhalb Deutschlands.</Translate>
                </p>
                <a href="https://www.ebay.de/itm/178073276495" target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btnPrimary}`}>
                    <Translate id="homepage.order">Jetzt bestellen</Translate>
                </a>
            </section>
        </Layout>
    );
}
