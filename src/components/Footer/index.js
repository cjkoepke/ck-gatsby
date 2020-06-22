import React from "react"
import './styles.css'

export default () => {
  const date = new Date()
  return (
    <footer className={`footer`}>
      <div className={`footer__wrap`}>
        <p>&copy; {date.getFullYear()} - All Rights Reserved - <a href="https://twitter.com/cjkoepke" target="_blank" rel="noopener noreferrer">@cjkoepke</a> <a href="https://stats.calvinkoepke.com" target="_blank" rel="noopener noreferrer">Live Stats</a></p>
      </div>
    </footer>
  )
}
