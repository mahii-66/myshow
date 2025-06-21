// import { Link } from "react-router-dom";
import "./Footer.css";

import React from "react";

import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";

function Footer() {
  return (
    <section className="footer">
      <div className="footer-top">
        <img src="https://myshowz.infinityfreeapp.com/assets/images/banner1.jpg" alt="mahi" />
        <img src="https://myshowz.infinityfreeapp.com/assets/images/banner2.jpg" alt="mahi" />
        <img src="https://myshowz.infinityfreeapp.com/assets/images/banner3.jpg" alt="mahi" />
        <img src="https://myshowz.infinityfreeapp.com/assets/images/banner4.jpg" alt="mahi" />
      </div>

      <div className="footer-links">
        <div>
          <h1>Movies</h1>
          <a href="https://myshowz.infinityfreeapp.com/movies.html">Movies</a>
          <a href="https://myshowz.infinityfreeapp.com/movies.html#">Videos</a>
          <a href="https://myshowz.infinityfreeapp.com/movies.html#">English Movies</a>
          <a href="https://myshowz.infinityfreeapp.com/movies.html#">Tailor</a>
          <a href="https://myshowz.infinityfreeapp.com/movies.html#">Upcoming Movies</a>
          <a href="https://myshowz.infinityfreeapp.com/Contact_Us.html">Contact Us</a>
        </div>

        <div>
          <h1>Information</h1>
          <a href="https://myshowz.infinityfreeapp.com/index.html">Home</a>
          <a href="https://myshowz.infinityfreeapp.com/about.html">About</a>
          <a href="https://myshowz.infinityfreeapp.com/movies.html#">TV Series</a>
          <a href="https://myshowz.infinityfreeapp.com/movies.html#">Blog</a>
          <a href="https://myshowz.infinityfreeapp.com/sign_in.html">Login</a>
          <a href="https://myshowz.infinityfreeapp.com/Contact_Us.html">Contact</a>
        </div>

        <div>
          <h1>Locations</h1>
          <a href="https://myshowz.infinityfreeapp.com/movies.html">Asia</a>
          <a href="https://myshowz.infinityfreeapp.com/movies.html">France</a>
          <a href="https://myshowz.infinityfreeapp.com/movies.html">Taiwan</a>
          <a href="https://myshowz.infinityfreeapp.com/movies.html">United States</a>
          <a href="https://myshowz.infinityfreeapp.com/movies.html">Korea</a>
          <a href="https://myshowz.infinityfreeapp.com/movies.html">United kingdom</a>
        </div>

        <div>
          <h1>Newsletter</h1>
          <input type="text" placeholder="Your Email Address" />
          <p>
            Enter your email and receive the latest news, updates, and special offers from us.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2021 MyShowz. All rights reserved</p>
       
      </div>
       <div className="textiz1">
        <FaFacebookF className="textiz" />
        <FaLinkedinIn  className="textiz"/>
        <FaTwitter  className="textiz" />
        <IoLogoGoogleplus  className="textiz"/>
        </div>


        
    </section>
    
  );
}

export default Footer;
