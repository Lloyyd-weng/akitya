import React from "react"
import { Link } from "gatsby"
import styles from "../components/layout.module.css"

const Header = () => (
  <div className={styles.header}>
    <Link to="/" className={styles.logo} />
  </div>
)

export default function Layout({ children }) {
    return (
        <>
            <Header></Header>
            <div className={styles.main}>{children}</div>
        </>
    )
}
