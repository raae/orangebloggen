module.exports = {
  siteMetadata: {
    title: "Orangebloggen",
    author: "Benedicte Raae",
    description:
      "En blogg om livet (mitt) og teknologi (jeg bruker), pluss en rant i ny og ne.",
    siteUrl: "https://orangebloggen.no",
    some: [
      {
        label: "Twitter",
        url: "https://twitter.com/raae"
      },
      {
        label: "Instagram",
        url: "https://instagram.com/benedicteraae"
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/benedicteraae/"
      }
    ]
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/posts`,
        name: "pages"
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: false,
              showCaptions: true,
              maxWidth: 675
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants"
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      }
    },
    `gatsby-plugin-feed`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography"
      }
    }
  ]
};
