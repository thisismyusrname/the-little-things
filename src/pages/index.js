import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import '../components/index.css';

const IndexPage = () => (
  <div>
    <div className="LandingView">
      <div className="LandingContent">
       <h1>The Little Things</h1>
       <p>I’m glad you’re here! Thank you for coming to take a look at The Little Things. I know you have looked forward to your upcoming wedding, shower, or event for many years. I also know that you probably already have a good idea of what you want your special day to look like. I would love to help turn your ideas into a reality.</p>
    <Link to="/page-2/">View Categories</Link>
      </div>
    </div>
    <SEO title="Home" />

  </div>
)

export default IndexPage
