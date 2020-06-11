import React from "react"
import { Link } from "gatsby"
import Menu from "../Menu"
import { useGeneralSettings } from "../../data/hooks"
import "./styles.css"

const Title = ({ text, path }) =>
  '/' === path ? (
    <h1 className={`header__title`}>{text}.</h1>
  ) : (
    <h2 className={`header__title`}>
      <Link to="/">{text}.</Link>
    </h2>
  )

export default ({ path }) => {
  const { title, description } = useGeneralSettings()
  return (
    <header className={`header`}>
      <div>
        <Title text={title} home={'/' === path} />
        <p className={`header__desc`}>{description}</p>
      </div>
      <Menu path={path} />
    </header>
  )
}
