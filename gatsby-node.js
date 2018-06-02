const _ = require("lodash");
const Promise = require("bluebird");
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            posts: allMarkdownRemark(
              sort: { fields: [frontmatter___date], order: DESC }
              filter: { fields: { postType: { eq: "posts" } } }
              limit: 1000
            ) {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                  }
                }
              }
            }
            pages: allMarkdownRemark(
              filter: { fields: { postType: { eq: "pages" } } }
              limit: 1000
            ) {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        // Create posts pages.
        const posts = result.data.posts.edges;
        const postTemplate = path.resolve("./src/templates/post.js");
        const pages = result.data.pages.edges;
        const pageTemplate = path.resolve("./src/templates/page.js");

        _.each(posts, (post, index) => {
          const previous =
            index === posts.length - 1 ? null : posts[index + 1].node;
          const next = index === 0 ? null : posts[index - 1].node;

          createPage({
            path: post.node.fields.slug,
            component: postTemplate,
            context: {
              slug: post.node.fields.slug,
              previous,
              next
            }
          });
        });

        _.each(pages, (post, index) => {
          createPage({
            path: post.node.fields.slug,
            component: pageTemplate,
            context: {
              slug: post.node.fields.slug
            }
          });
        });
      })
    );
  });
};

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators;

  if (node.internal.type === `MarkdownRemark`) {
    const parent = getNode(node.parent);

    createNodeField({
      name: `postType`,
      node,
      value: parent.sourceInstanceName
    });

    createNodeField({
      name: `slug`,
      node,
      value: createFilePath({ node, getNode })
    });
  }
};
