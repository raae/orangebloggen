import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import get from "lodash/get";

import { rhythm, scale } from "../utils/typography";

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = get(this.props, "data.site.siteMetadata.title");
    const { previous, next } = this.props.pathContext;

    return (
      <div>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <header
          style={{
            position: "absolute",
            marginTop: rhythm(-2),
            color: "darkorange"
          }}
        >
          <Link to="/">{siteTitle}</Link>
        </header>

        <article>
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>

        {(previous || next) && (
          <hr
            style={{
              backgroundColor: "orangered",
              width: rhythm(3),
              height: "4px",
              margin: `${rhythm(1)} auto`
            }}
          />
        )}

        <footer>
          <ul
            style={{
              display: "flex",
              margin: 0,
              flexWrap: "wrap",
              justifyContent: "space-between",
              listStyle: "none",
              padding: 0
            }}
          >
            {previous && (
              <li>
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              </li>
            )}

            {next && (
              <li>
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              </li>
            )}
          </ul>
        </footer>
      </div>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`;
