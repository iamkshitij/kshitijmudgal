import React from 'react'
import Layout from "../components/layout"
import Banner from '../components/Banner'
import './projects.css'
const Projects = ({data, location})=>{
  const siteTitle = `Kshitij Mudgal`

  return(
    <Layout location={location} title={siteTitle}>
      <Banner/>
      <div>
        <h4>Work in Progress!</h4>
        <h5>Meanwhile, Visit my <a href="#" className="project-section-github">github profile</a> to know more.</h5>
      </div>
    </Layout>

  )
}



export default Projects;