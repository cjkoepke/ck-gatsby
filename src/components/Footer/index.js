import React from "react"
import './styles.css'

export default () => {
  const date = new Date()
  return (
    <footer className={`footer`}>
      <div className={`footer__wrap`}>
        <p>&copy; {date.getFullYear()} - ALl Rights Reserved</p>
      </div>
    </footer>
  )
}
