const path = require("path")

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.ergodex.io",
    title: "lend",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    'gatsby-plugin-netlify-cms',
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: path.join(__dirname, `src`, `images`),
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "updates",
        path: path.join(__dirname, `content`, `updates`),
      },
      __key: "updates",
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-eslint",
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    }
  ],
};
