import React from "react"
import Form from '../Form'
import './styles.css'

export default () => {
  const date = new Date()
  return (
    <footer className={`footer`}>
      <Form />
      <div className={`footer__wrap`}>
        <p>&copy; {date.getFullYear()} - All Rights Reserved - <a href="https://twitter.com/cjkoepke" target="_blank" rel="noopener noreferrer">@cjkoepke</a></p>
      </div>
    </footer>
  )
}
