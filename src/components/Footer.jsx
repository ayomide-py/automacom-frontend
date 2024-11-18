import React from "react";
import "../css/Footer.css";
import "@fortawesome/fontawesome-free/css/all.css";
import logo_img from "../images/automacom_logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer-widgets">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="foot-about">
                <a
                  className="foot-logo"
                  href="https://preview.colorlib.com/theme/thecharity/#"
                >
                  <img src={logo_img} />
                </a>
                <p>
                  Welcome to AUTOMACOM – the Automation Community at the
                  University of Lagos. We are a passionate group of students and
                  future engineers dedicated to turning theories into impactful
                  projects in Robotics, AI, IoT, and Embedded Systems.
                </p>
                {/* <ul className="d-flex flex-wrap align-items-center">
                  <li>
                    <a href="https://preview.colorlib.com/theme/thecharity/#">
                      <i className="fa fa-pinterest-p" />
                    </a>
                  </li>
                  <li>
                    <a href="https://preview.colorlib.com/theme/thecharity/#">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="https://preview.colorlib.com/theme/thecharity/#">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="https://preview.colorlib.com/theme/thecharity/#">
                      <i className="fa fa-dribbble" />
                    </a>
                  </li>
                  <li>
                    <a href="https://preview.colorlib.com/theme/thecharity/#">
                      <i className="fa fa-behance" />
                    </a>
                  </li>
                  <li>
                    <a href="https://preview.colorlib.com/theme/thecharity/#">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                </ul> */}
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mt-5 mt-md-0">
              <h2>Useful Links</h2>
              <ul>
                <li>
                  <Link to={"/project-gallery"}>Projects</Link>
                </li>
                <li>
                  <Link to={"/auth/register"}>Become a Member</Link>
                </li>
                <li>
                  <Link to={"/photo-gallery"}>Photo Gallery</Link>
                </li>
                <li>
                  <Link to={"/blogs"}>Blogs</Link>
                </li>
                <li>
                  <Link to={"/about-us"}>About Us</Link>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mt-5 mt-md-0">
              <div className="foot-latest-news">
                <h2>Latest News</h2>
                <ul>
                  <li>
                    <h3>
                      <a href="https://preview.colorlib.com/theme/thecharity/#">
                        A new cause to help
                      </a>
                    </h3>
                    <div className="posted-date">MArch 12, 2018</div>
                  </li>
                  <li>
                    <h3>
                      <a href="https://preview.colorlib.com/theme/thecharity/#">
                        We love to help people
                      </a>
                    </h3>
                    <div className="posted-date">MArch 12, 2018</div>
                  </li>
                  <li>
                    <h3>
                      <a href="https://preview.colorlib.com/theme/thecharity/#">
                        The new ideas for helping
                      </a>
                    </h3>
                    <div className="posted-date">MArch 12, 2018</div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mt-5 mt-md-0">
              <div className="foot-contact">
                <h2>Contact</h2>
                <ul>
                  <li>
                    <i className="fa fa-phone" />
                    <span>+234 123 4567 890</span>
                  </li>
                  <li>
                    <i className="fa fa-envelope" />
                    <span>info@automacom.org</span>
                  </li>
                  <li>
                    <i className="fa fa-map-marker" />
                    <span>
                      Faculty of Engineering Building University of Lagos,
                      Akoka, Yaba, Lagos, Nigeria (Room 301, Third Floor)
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
