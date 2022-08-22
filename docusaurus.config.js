// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'KuberLogic',
  tagline: 'Turn any containerized application into cloud-native SaaS',
  url: 'https://kuberlogic.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'CloudLinux', // Usually your GitHub org/user name.
  projectName: 'KuberLogic', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        googleAnalytics: {
          trackingID: 'UA-206374108-1',
          anonymizeIP: true,
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/kuberlogic/docs.kuberlogic.com',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/kuberlogic/docs.kuberlogic.com',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'KuberLogic Logo',
          src: 'img/logo-color.png',
          srcDark: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          { href: 'https://kuberlogic.clearflask.com/', label: 'Roadmap', position: 'left' },

          {
            href: 'https://github.com/kuberlogic/kuberlogic',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'About KuberLogic',
                to: '/docs/intro',
              },
              {
                label: 'Getting started',
                to: '/docs/getting-started/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'DEV.to',
                href: 'https://dev.to/kuberlogic',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/channel/UC_sgK11aSd4O_y6KzObbkFg/featured',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Roadmap',
                href: 'https://kuberlogic.clearflask.com/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/kuberlogic/kuberlogic',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} All rights reserved. CloudLinux Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
