import React from "react"
import Meta from "../Meta"
import Footer from "../Footer"
import Header from "../Header"
import { StaticKitProvider } from '@statickit/react';
import "./styles.css"

export default ({ location, children }) => {
  return (
    <StaticKitProvider site="9c1644f87287">
      <div className={`layout`}>
        <Meta />
        <Header path={location.pathname} />
        <main className={`layout__content`}>{children}</main>
        <Footer />
      </div>
    </StaticKitProvider>
  )
}
