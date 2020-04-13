import '../components/HeroImages.css'
import React from "react"
import { Link } from "gatsby"
import hero1 from '../images/landing_images/hero1_flower.jpg'

const HeroImage =({})=>
    <div className="ImageAndButton">
            <img src={hero1} width='300px' />
        <div className="HeroImage">
        </div>    
        <div className="HeroButton">
            <Link to="/page-2/"><button>View Categories</button></Link>
        </div>
    </div>

export default HeroImage