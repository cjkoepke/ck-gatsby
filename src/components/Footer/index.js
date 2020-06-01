import React from "react"
import './styles.css'

export default () => {
  const date = new Date()
  return (
    <footer className={`footer`}>
      <div className={`footer__wrap`}>
        <p>&copy; {date.getFullYear()} - All Rights Reserved - <a href="https://twitter.com/cjkoepke" target="_blank">@cjkoepke</a></p>
      </div>
    </footer>
  )
}
