import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'MyStation-Go',
    tagline: 'Deine Abfahrtstafel und Wetterstation fuer Zuhause',
    favicon: 'img/favicon.ico',

    url: 'https://gogo-boot.github.io',
    baseUrl: '/',

    organizationName: 'gogo-boot',
    projectName: 'mystation-landing',
    deploymentBranch: 'gh-pages',
    trailingSlash: false,

    onBrokenLinks: 'warn',
    onBrokenAnchors: 'warn',

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
                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
    ],

    themeConfig: ({
        navbar: {
            title: 'MyStation-Go',
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'userSidebar',
                    position: 'left',
                    label: 'User Guide',
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
                    title: 'Documentation',
                    items: [
                        {label: 'Quick Start', to: '/docs/user-guide/quick-start'},
                        {label: 'Troubleshooting', to: '/docs/user-guide/troubleshooting'},
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
