// import { Link } from "react-router-dom";
import "./Footer.css";

import React from "react";
// import { MdOutlineMailOutline } from "react-icons/md";
function Footer() {
  return (
    <>
      <section className="bg-black">
        <div className="container">
          <div className="row">
            <div className="col mt-5">
              <img
                src="https://myshowz.infinityfreeapp.com/assets/images/banner1.jpg" alt='mahi'
                style={{ width: 260, borderRadius: 10 }}
              />
            </div>
            <div className="col mt-5">
              <img
                src="https://myshowz.infinityfreeapp.com/assets/images/banner2.jpg" alt='mahi'
                style={{ width: 260, borderRadius: 10 }}
              />
            </div>
            <div className="col mt-5">
              <img
                src="https://myshowz.infinityfreeapp.com/assets/images/banner3.jpg" alt='mahi'
                style={{ width: 260, borderRadius: 10 }}
              />
            </div>
            <div className="col mt-5">
              <img
                src="https://myshowz.infinityfreeapp.com/assets/images/banner4.jpg" alt='mahi'
                style={{ width: 260, borderRadius: 10 }}
              />
            </div>


            <div className="row">
              <div className="col">
                  <h1 className="color1">Movies</h1>
                  <p>
                    <a className="foot" href="https://myshowz.infinityfreeapp.com/?i=1#"
                    >
                      Movies
                    </a>
                  </p>
                  <p>
                    <a  className="foot" 
                      href="https://myshowz.infinityfreeapp.com/?i=1#"
                    >
                      Videos
                    </a>
                  </p>
                  <p>
                    <a  className="foot" 
                      href="https://myshowz.infinityfreeapp.com/?i=1#"
                    >
                      English Movies
                    </a>
                  </p>
                  <p>
                    <a  className="foot" 
                      href="https://myshowz.infinityfreeapp.com/?i=1#"
                    >
                      Tailer
                    </a>
                    <br />
                  </p>
                  <p>
                    <a  className="foot" 
                      href="https://myshowz.infinityfreeapp.com/?i=1#"
                    >
                      Upcoming Movies
                    </a>
                  </p>
                  <p>
                    <a  className="foot" 
                      href="https://myshowz.infinityfreeapp.com/?i=1#"
                    >
                      Contact Us
                    </a>
                  </p>
                </div>

                <div className="col">
                   <h1 className="color1">Information</h1>
                   
                  <p>
                    <a  className="foot" 
                      href="https://myshowz.infinityfreeapp.com/?i=1#"
                    >
                      Home
                    </a>
                  </p>
                  <p>
                    <a  className="foot" 
                      href="https://myshowz.infinityfreeapp.com/?i=1#"
                    >
                     About
                    </a>
                  </p>
                  <p>
                    <a  className="foot" 
                      href="https://myshowz.infinityfreeapp.com/?i=1#"
                    >
                      Tv Series
                    </a>
                  </p>
                  <p>
                    <a  className="foot" 
                      href="https://myshowz.infinityfreeapp.com/?i=1#"
                    >
                      Blog
                    </a>
                    <br />
                  </p>
                  <p>
                    <a  className="foot" 
                      href="https://myshowz.infinityfreeapp.com/?i=1#"
                    >
                      Login
                    </a>
                  </p>
                  <p>
                    <a className="foot" 
                      href="https://myshowz.infinityfreeapp.com/?i=1#"
                    >
                      Contact
                    </a>
                  </p>  
                </div>

                <div className="col">
                   <h1 className="color1">Locations</h1>
                   <div className="col">
                  <p>
                    <a className="foot" href="https://myshowz.infinityfreeapp.com/?i=1#"
                    >
                      Movies
                    </a>
                  </p>
                  <p>
                    <a  className="foot" 
                      href="https://myshowz.infinityfreeapp.com/?i=1#"
                    >
                      Videos
                    </a>
                  </p>
                  <p>
                    <a  className="foot" 
                      href="https://myshowz.infinityfreeapp.com/?i=1#"
                    >
                      English Movies
                    </a>
                  </p>
                  <p>
                    <a  className="foot" 
                      href="https://myshowz.infinityfreeapp.com/?i=1#"
                    >
                      Tailer
                    </a>
                    <br />
                  </p>
                  <p>
                    <a  className="foot" 
                      href="https://myshowz.infinityfreeapp.com/?i=1#"
                    >
                      Upcoming Movies
                    </a>
                  </p>
                  <p>
                    <a  className="foot" 
                      href="https://myshowz.infinityfreeapp.com/?i=1#"
                    >
                      Contact Us
                     
                    </a>
                  </p>

                  
                </div>

                </div>


                 <div className="col">
                   <h1 className="color1">Newsletter</h1>
                   <div className="col">
                 <input className="input11" type="text" placeholder=" Your Email Addrress"/> 
                 {/* <MdOutlineMailOutline style={{color:"white", fontSize:20,marginLeft:-30}}/> */}
                 <br/><br/>
                 <p className="color11">Enter your email and<br/> receive the latest <br/>news, updates and<br/> special offers from us.</p>
                  
                </div>

                </div>     
              </div>
            </div>
          </div>
          
                <div className="last">
                    <p className="last1">© 2021 MyShowz. All rights reserved</p>
                  
                </div>
      </section>
    </>
  );
}

export default Footer;
