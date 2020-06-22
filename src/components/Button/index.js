import React from "react"
import { MaybeLink } from "../MaybeLink"
import "./styles.css"

export default ({ label, url, ...rest }) => url
  ? <MaybeLink url={url} label={label} className={`button`} {...rest} />
  : <button className={`button`} {...rest}>{label}</button>
