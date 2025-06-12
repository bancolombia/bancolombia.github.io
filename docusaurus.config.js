// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Open Source Grupo Bancolombia',
  staticDirectories: ['static'],
  tagline: 'Dinosaurs are cool',
  favicon: 'img/bancolombia.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  customFields: {
    env: process.env.APP_ENV || 'dev',
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          
            // Agrega el wrapper para proteger la documentación
            docItemComponent: process.env.APP_ENV === 'pdn' ? require.resolve('./src/docsWrapper.js') : undefined,
          },
          blog: {
            showReadingTime: true,
            editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          },
          theme: {
            customCss: './src/css/custom.css',
          },
          }),
        ],
        ],

    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    themeConfig:
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Open Source Grupo Bancolombia',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
        items: [

          {
            type: 'search',
            position: 'right',
          },
          {
            href: 'https://github.com/bancolombia/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        disableSwitch: true
      },
    }),
};

export default config;