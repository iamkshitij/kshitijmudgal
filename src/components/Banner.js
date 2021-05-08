import React from 'react'
import './Banner.css';
import twitter from '../images/twitter.svg'
import linkedin from '../images/linkedin.svg'
import github from '../images/github.svg'
import { Link } from 'gatsby'

const Banner = () =>{
  return(
    <div className="card">
      <div className="container">
        <h5 className="bannerTitle">Howdy, World!</h5>
        <p className="bannerParagraph">Welcome to my digital garden.</p>
        <p className="bannerParagraph">
          <Link className="pageLink" to="/">Home</Link>|
          <Link className="pageLink" to="/projects"> Projects</Link>|
          <Link className="pageLink" to="/about"> About</Link>
          </p>

      </div>

    </div>
  )
}

export default Banner;

