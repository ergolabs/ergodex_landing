import React from 'react'
import { Link } from 'gatsby'

const Footer = () => {
  return (
    <footer className="site-footer mt-48">
      <div className="footer-bg">
        <svg width="385" height="305" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="34.994%" x2="50%" y2="97.738%" id="footer-bg">
              <stop stopColor="#151616" offset="0%"/>
              <stop stopColor="#222424" offset="100%"/>
            </linearGradient>
          </defs>
          <path d="M384.557 116.012V305H0L210.643 0l173.914 116.012z" fill="url(#footer-bg)"
                fillRule="evenodd"/>
        </svg>
      </div>
      <div className="footer-dots is-moving-object is-translating" data-translating-factor="160">
        <svg width="69" height="91" xmlns="http://www.w3.org/2000/svg">
          <g fill="#FF8C00" fillRule="evenodd">
            <path
              d="M37.105 41.007l-2.9 1.334-.786 2.823.926 2.689 2.76 1.154 2.6-1.31 1.714-2.533-1.296-2.94z"/>
            <path fillOpacity=".64"
                  d="M63.109 27.24l-1.45.666-.394 1.412.464 1.344 1.38.577 1.3-.655.856-1.266-.647-1.47z"/>
            <path fillOpacity=".24"
                  d="M66.226 86.638l-1.45.667-.393 1.412.463 1.344 1.38.577 1.3-.655.857-1.266-.648-1.47z"/>
            <path fillOpacity=".64"
                  d="M13.497 43.713l-2.175 1-.59 2.118.695 2.016 2.07.866 1.95-.983 1.285-1.9-.972-2.204z"/>
            <path fillOpacity=".8"
                  d="M59.076 56.658l-2.175 1-.59 2.117.695 2.017 2.07.866 1.949-.983 1.286-1.9-.972-2.204z"/>
            <path fillOpacity=".48"
                  d="M22.262 18.49l-1.45.667-.393 1.412.463 1.344 1.38.577 1.3-.655.857-1.266-.648-1.47z"/>
            <path fillOpacity=".64"
                  d="M23.422.5l-1.45.667-.393 1.412.463 1.344 1.38.577 1.3-.655.857-1.266-.648-1.47z"/>
            <path fillOpacity=".48"
                  d="M2.637 12.5l-1.45.667-.393 1.412.463 1.344 1.38.577 1.3-.655.857-1.266-.648-1.47zM36.563 10.856l-.725.334-.197.706.232.672.69.288.65-.327.428-.633-.324-.735z"/>
          </g>
        </svg>
      </div>
      <div className="container">
        <div className="site-footer-inner has-top-divider">
          <div className="footer-copyright">&copy; 2021 ErgoDEX, all rights reserved</div>
          <ul className="footer-social-links list-reset">
            <li>
              <a href="mailto:hello@ergodex.io">
                hello@ergodex.io
              </a>
            </li>
            <li>
              <Link to="/careers">
                Careers
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer