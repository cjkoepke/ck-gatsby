import React from "react"
import Meta from "../Meta"
import Footer from "../Footer"
import Header from "../Header"
import "./styles.css"

export default ({ location, children }) => {
  return (
    <div className={`layout`}>
      <Meta location={location} />
      <Header path={location.pathname} />
      <main className={`layout__content`}>{children}</main>
      <Footer />
    </div>
  )
}
