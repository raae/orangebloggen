import React from "react";
import Link from "gatsby-link";
import get from "lodash/get";
import Helmet from "react-helmet";
import Checkout from "../components/checkout";
import { rhythm, scale } from "../utils/typography";

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const siteDesc = get(this, "props.data.site.siteMetadata.description");
    const posts = get(this, "props.data.allMarkdownRemark.edges") || [];
//#1dcaff hex Twitter Verified Blue RGB: 29, 202, 255
//DCaff deux Caff two coffees
// The blue hats blue coats, blue boots, blue suede shoes
    return (
      <div>
        <Helmet title={siteTitle} />
        <header>
          <h1 style={{ marginBottom: rhythm(0.5), color: "lightblue" }}>
            {siteTitle}
          </h1>
          <p>{siteDesc}</p>
        </header>
        <main>
          {posts.map(({ node }) => {
            const title = get(node, "frontmatter.title") || node.fields.slug;
            return (
              <article key={node.fields.slug}>
                <h2
                  style={{
                    marginBottom: rhythm(0.75)
                  }}
                >
                  <Link style={{ color: "darkblue" }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h2>
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </article>
            );
          })}
        </main>
        <Checkout />
      </div>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { postType: { eq: "posts" } } }
      limit: 1000
    ) {
      edges {
        node {
          excerpt
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
`;
