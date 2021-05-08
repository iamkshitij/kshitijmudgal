import twitter from "../images/twitter.svg"
import linkedin from "../images/linkedin.svg"
import github from "../images/github.svg"

import * as React from "react"
import './MediaContent.css'

const MediaContent = () =>{
      return (
        <div className="social-media-content">
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

      )
}

export default MediaContent;