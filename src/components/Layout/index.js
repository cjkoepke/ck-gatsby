import React from "react"
import Meta from "../Meta"
import Footer from "../Footer"
import Header from "../Header"
import "./styles.css"

export default ({ location, children }) => {
  return (
    <div className={`layout`}>
      <Meta />
      <div className={`layout__meta`}>
        <Header home={"/" === location.pathname} />
        <Footer />
      </div>
      <main className={`layout__content`}>{children}</main>
    </div>
  )
}
