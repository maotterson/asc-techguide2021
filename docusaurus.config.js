const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "LCCC ACS - Fall 2021 Technology Guide",
  tagline: "Dinosaurs are cool",
  url: "https://www.example.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "maotterson", // Usually your GitHub org/user name.
  projectName: "asc-technologyguide2021", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "LCCC ASC",
      logo: {
        alt: "LCCC Academic Support Center",
        src: "img/logo.svg"
      },
      items: [
        {
          type: "doc",
          docId: "technology-guide",
          position: "left",
          label: "Technology Guide"
        },
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Tutorial"
        }
      ]
    },
    footer: {
      style: "dark",

      copyright: `Copyright © ${new Date().getFullYear()} LCCC Academic Support Center. Built with Docusaurus.`
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/facebook/docusaurus/edit/master/website/"
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};
