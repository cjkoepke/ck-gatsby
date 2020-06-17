import React from "react"
import MaybeLink from "../MaybeLink"
import "./styles.css"

export default ({ label, url }) => (
  <MaybeLink url={url} label={label} className={`button`} />
)
