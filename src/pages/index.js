import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import styles from "../pages/index.module.css"

export default function Home({ data }) {
  return (
    <Layout>
      <div className={styles.title}>
        <h1>
          博文列表
        </h1>
        <span className={styles.blogCount}>{data.allMarkdownRemark.totalCount} Posts</span>
      </div>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id} className={styles.blogBlock}>
          <Link to={node.fields.slug} className={styles.link}>
            <h2 className={styles.blogTitle}>
              {node.frontmatter.title}{" "}
              <span className={styles.blogDate}>{node.frontmatter.date}</span>
            </h2>
            <p>{node.excerpt}</p>
            <div className={styles.blogData}>
              <span>閱讀時間: {node.timeToRead} {node.timeToRead === 1 ? "min" : "mins"}　　</span>
              <span>標籤: {node.frontmatter.tags.map((e) => (e + " "))} </span>
            </div>
          </Link>
        </div>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            tags
          }
          fields {
            slug
          }
          excerpt(pruneLength: 116, truncate: true)
          timeToRead
        }
      }
      totalCount
    }
  }
`