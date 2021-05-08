import * as React from "react"
import { Link } from "gatsby"
import twitter from "../images/twitter.svg"
import linkedin from "../images/linkedin.svg"
import github from "../images/github.svg"
import './layout.css'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <hr/>
      <footer>

        <div className="media-content">
          <ul className="list-inline">
            <li className="list-inline-item">
              <a href="https://twitter.com/MudgalKshitij" target="_blank">
                <img className="media-icon" src={twitter} alt="twitter-url"/>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.linkedin.com/in/iamkshitij/" target="_blank">
                <img className="media-icon" src={linkedin} alt="linked-url"/>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://github.com/iamkshitij" target="_blank">
                <img className="media-icon" src={github} alt="github-url"/>
              </a>
            </li>
          </ul>
        </div>

        <div>
          © {new Date().getFullYear()}, kshitij mudgal
        </div>
      </footer>
    </div>
  )
}

export default Layout
