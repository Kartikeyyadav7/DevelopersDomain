import React from "react"
import { FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa"
import { GoMarkGithub } from "react-icons/go"

const Footer = () => (
  <footer className="site-footer">
    <p>&copy; {new Date().getFullYear()} Aviate Coders &bull; </p>
    <div className="site-footer-icons">
      <div className="social-icons">
        <a
          href="https://twitter.com/aviatecoders"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
      </div>
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/kartikeyyadav/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <FaLinkedinIn />
        </a>
      </div>
      <div className="social-icons">
        <a
          href="https://www.github.com/Kartikeyyadav7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GoMarkGithub />
        </a>
      </div>
      <div className="social-icons">
        <a
          href="https://www.instagram.com/aviatecoders"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>{" "}
    </div>
  </footer>
)

export default Footer
