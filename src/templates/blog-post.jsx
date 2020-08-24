import React from "react"
import { graphql } from "gatsby" // highlight-line
import Layout from "../components/layout"
import styles from "./blog-post.module.css"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <div className={styles.main}>
        <h1 className={styles.blogTitle}>{post.frontmatter.title}</h1>
        <div className={styles.publishDate}>{post.frontmatter.date}</div>
        <div dangerouslySetInnerHTML={{ __html: post.html }} className={styles.blogBody}></div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`