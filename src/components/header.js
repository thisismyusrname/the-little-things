import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo/logo_mech.png"
import iglogo from "../images/instagram_logo/ig_vector.svg"
import './Header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
{/* These link to the different places in the app*/}
      <Link to="/package">Package</Link>
      <Link to="/categories">Categories</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="/home"><img src={logo} width="360" /></Link>
      <Link to="/about">About</Link>
      <Link to="/about"><img src={iglogo} width="32" /></Link>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
