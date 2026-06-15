import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'MyStation-Go',
    tagline: 'Echtzeit-Abfahrtstafel und Wetterstation für Zuhause — E-Paper Display, batteriebetrieben',
    favicon: 'img/favicon.ico',

    url: 'https://www.mystation-go.de',
    baseUrl: '/',

    organizationName: 'gogo-boot',
    projectName: 'mystation-landing',
    deploymentBranch: 'gh-pages',
    trailingSlash: false,

    onBrokenLinks: 'warn',
    onBrokenAnchors: 'warn',

    headTags: [
        {
            tagName: 'meta',
            attributes: {
                name: 'keywords',
                content: 'Abfahrtstafel, E-Paper Display, ÖPNV, Echtzeit-Abfahrten, Wetterstation, RMV, S-Bahn, U-Bahn, Bus, Verspätung, Wetter, Smart Home, Abfahrtsmonitor, batteriebetrieben, Haltestelle, Abfahrtsanzeige',
            },
        },
        {
            tagName: 'meta',
            attributes: {
                property: 'og:image',
                content: 'https://www.mystation-go.de/img/IMG_0872.jpeg',
            },
        },
        {
            tagName: 'meta',
            attributes: {
                property: 'og:type',
                content: 'website',
            },
        },
        {
            tagName: 'meta',
            attributes: {
                name: 'twitter:card',
                content: 'summary_large_image',
            },
        },
    ],

    i18n: {
        defaultLocale: 'de',
        locales: ['de', 'en'],
        localeConfigs: {
            en: {label: 'English'},
            de: {label: 'Deutsch'},
        },
    },

    themes: ['@docusaurus/theme-mermaid'],
    markdown: {
        mermaid: true,
        hooks: {
            onBrokenMarkdownImages: 'warn',
            onBrokenMarkdownLinks: 'warn',
        },
    },

    presets: [
        [
            'classic',
            ({
                docs: {
                    path: '../docs',
                    routeBasePath: 'docs',
                    sidebarPath: './sidebars.js',
                },
                blog: false,
                gtag: {
                    trackingID: 'G-JV671HWVNL',
                    anonymizeIP: true,
                },
                sitemap: {
                    changefreq: 'weekly',
                    priority: 0.5,
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
    ],

    themeConfig: ({
        metadata: [
            {name: 'description', content: 'MyStation-Go — Echtzeit-Abfahrtstafel und Wetterstation für Zuhause. RMV S-Bahn, U-Bahn, Bus Verspätungen und Wetter auf E-Paper Display. Batteriebetrieben für Monate.'},
            {name: 'og:title', content: 'MyStation-Go — Abfahrtstafel für Zuhause'},
            {name: 'og:description', content: 'Echtzeit ÖPNV-Abfahrten und Wetter auf einem eleganten E-Paper Display. RMV, S-Bahn, U-Bahn, Bus — batteriebetrieben für Monate.'},
        ],
        navbar: {
            title: 'MyStation-Go',
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'userSidebar',
                    position: 'left',
                    label: 'Benutzerhandbuch',
                },
                {
                    type: 'localeDropdown',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Dokumentation',
                    items: [
                        {label: 'Schnellstart', to: '/docs/user-guide/quick-start'},
                        {label: 'Fehlerbehebung', to: '/docs/user-guide/troubleshooting'},
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} MyStation-Go.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    }),
};

export default config;
