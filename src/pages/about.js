import React from 'react'
import Layout from "../components/layout"
import '../normalize.css'
import './about.css'
import Banner from '../components/Banner'
import { Link } from "gatsby"

const About = (data, location) =>{
  const siteTitle = "Kshitij Mudgal"
    return(
      <Layout location={location} title={siteTitle}>
        <Banner/>


          <h4 className="card-about-heading">Hi, I'm Kshitij </h4>
          <p className="card-about-description">I'm a passionate and technically skilled Software Developer with experience creating internal and external communication collateral and providing design direction that fits with — and enhances — organizational brands. I pride myself in being an exceptional communicator, able to work with cross-functional teams and build loyal relationships with clients while collaborating on projects. </p>

      </Layout>
    )
}

export default About;