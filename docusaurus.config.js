const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Controlpanel.gg",
  tagline:
    "ControlPanel's Dashboard is a free and open-source management panel for Pterodactyl with credit based billing and lots of customization",
  url: "https://controlpanel.gg",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/controlpanel.ico",
  organizationName: "ControlPanel-gg", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  trailingSlash: false,
  themeConfig: {
    navbar: {
      title: "Controlpanel (CPGG)",
      logo: {
        alt: "Controlpanel logo",
        src: "img/controlpanel.png",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Documentation",
        },

        {
          href: "https://market.controlpanel.gg",
          label: "Extention Hub",
          position: "left",
        },
        {
          type: "docsVersionDropdown",
          position: "right",
          dropdownActiveClassDisabled: true,
        },
        {
          label: "Utilities",
          position: "right",
          items: [
            {
              href: "https://documenter.getpostman.com/view/9044962/TzY69ub2#02b8da43-ab01-487d-b2f5-5f8699b509cd",
              label: "API",
              position: "right",
            },
            {
              href: "https://demo.controlpanel.gg",
              label: "Demo",
              position: "right",
            },
            {
              href: "https://trello.controlpanel.gg/b/KGMuFqkqe5QabLt76/controlpanel",
              label: "Development-Roadmap",
              position: "right",
            },
          ],
        },
        {
          label: "Social",
          position: "right",
          items: [
            {
              href: "https://discord.gg/4Y6HjD2uyU",
              label: "Discord",
              position: "right",
            },
            {
              href: "https://github.com/ControlPanel-gg/dashboard",
              label: "GitHub",
              position: "right",
            },
          ],
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Documentation",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/4Y6HjD2uyU",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/ControlPanel-gg/dashboard",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Controlpanel.gg group. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          lastVersion: "0.9",
          // Please change this to your repo.
          editUrl: "https://github.com/ControlPanel-gg/docs/tree/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
