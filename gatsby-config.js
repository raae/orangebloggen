module.exports = {
  siteMetadata: {
    title: "Orangebloggen",
    author: "Benedicte Raae",
    description:
      "En blogg om livet (mitt) og teknologi (jeg bruker), pluss en rant i ny og ne.",
    siteUrl: "https://orangebloggen.no",
    feedbackFormLabels: {
      title: "Hei, se her!",
      message:
        "På denne siden er det ingen storebror (ingen cookies, ingen analyseverktøy, nadanix) som ser deg. Derfor er det fint om du melder fra i skjema under om du syntes artikkelen var nyttig (eller ei).",
      name: "Navn",
      email: "E-post",
      textarea: "Beskjed",
      newsletter: "Jeg ønsker å få nyhetsbrev når det kommer nytt innhold",
      submit: "Send"
    },
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
