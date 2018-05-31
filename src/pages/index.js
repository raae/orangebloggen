import React from "react";
import Link from "gatsby-link";
import get from "lodash/get";
import Helmet from "react-helmet";

import { rhythm, scale } from "../utils/typography";

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const siteDesc = get(this, "props.data.site.siteMetadata.description");
    const posts = get(this, "props.data.allMarkdownRemark.edges") || [];

    return (
      <div>
        <Helmet title={siteTitle} />
        <header>
          <h1 style={{ marginBottom: rhythm(0.5), color: "orangered" }}>
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
                  <Link style={{ color: "darkorange" }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h2>
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </article>
            );
          })}
        </main>
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
    allMarkdownRemark {
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
