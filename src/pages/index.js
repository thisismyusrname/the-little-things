import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import '../components/index.css'
import Header from '../components/Header.js'
import '../components/HeroImages.css'
import HeroImage from '../components/heroImage'
import hero1 from '../images/landing_images/hero1_flower.jpg'

const IndexPage = () => (
  <div>
    <Header />
    <div className="LandingView">
      <div className="LandingContent">
          <p>I’m glad you’re here! Thank you for coming to take a look at The Little Things.<br/>I know you have looked forward to your upcoming wedding, shower, or event for many years. I also know that you probably already have a good idea of what you want your special day to look like. I would love to help turn your ideas into a reality.</p>
      </div>
      <div className="HeroImageContainer">
        <HeroImage />
        <HeroImage />
        <HeroImage />
      </div>  
    </div>
    <SEO title="Home" />

  </div>
)

export default IndexPage
