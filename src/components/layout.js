import * as React from "react"
import { Link } from "gatsby"
import MediaContent from "./MediaContent"

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
        <MediaContent/>
        <div>
         <p style={{ textAlign:'center',fontWeight:'bold',marginTop: '-25px' }}>© {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  )
  
}

export default Layout
