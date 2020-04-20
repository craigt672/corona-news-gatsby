require("dotenv").config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `Official Site`,
    description: `CoronaCentral: Latest News, Research and Expert Advice on CoronaVirus (COVID-19)`,
    author: `Craig Thomas`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Lato`,
            variants: [`100`, `200`, `400`, `500`, `600`, `700`]
          },
          {
            family: `Open Sans`,
            variants: [`100`, `200`, `400`, `500`, `600`, `700`]
          },
          {
            family: `Roboto`,
            variants: [`100`, `200`, `400`, `500`, `600`, `700`]
          },
          {
            family: `Khula`,
            variants: [`600`, `700`]
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Coda`,
          `Lato`,
          `Khula`,
          `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: 'gatsby-source-firestore',
      options: {
        credential: require("./.firebase-key.json"),
        types: [
          {
            type: 'Article',
            collection: 'Articles',
            map: doc => ({
              author: doc.author,
              description: doc.description,
              content: doc.bodyContent,
              title: doc.title,
              url: doc.url,
              source: doc.source,
              urlToImage: doc.urlToImage,
              publishedAt: doc.publishedAt
            }),
          }
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
