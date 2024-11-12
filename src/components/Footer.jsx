import React from "react";
import "../css/Footer.css";
import "@fortawesome/fontawesome-free/css/all.css";
import logo_img from "../images/automacom_logo.png";

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
                  Lorem ipsum dolor sit amet, con sectetur adipiscing elit.
                  Mauris temp us vestib ulum mauris.Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Mauris tempus vestib ulum
                  mauris.Lorem ipsum dolo.
                </p>
                <ul className="d-flex flex-wrap align-items-center">
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
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mt-5 mt-md-0">
              <h2>Useful Links</h2>
              <ul>
                <li>
                  <a href="https://preview.colorlib.com/theme/thecharity/#">
                    Privacy Polticy
                  </a>
                </li>
                <li>
                  <a href="https://preview.colorlib.com/theme/thecharity/#">
                    Become a Volunteer
                  </a>
                </li>
                <li>
                  <a href="https://preview.colorlib.com/theme/thecharity/#">
                    Donate
                  </a>
                </li>
                <li>
                  <a href="https://preview.colorlib.com/theme/thecharity/#">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="https://preview.colorlib.com/theme/thecharity/#">
                    Causes
                  </a>
                </li>
                <li>
                  <a href="https://preview.colorlib.com/theme/thecharity/#">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="https://preview.colorlib.com/theme/thecharity/#">
                    News
                  </a>
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
                    <span>+45 677 8993000 223</span>
                  </li>
                  <li>
                    <i className="fa fa-envelope" />
                    <span>office@template.com</span>
                  </li>
                  <li>
                    <i className="fa fa-map-marker" />
                    <span>Main Str. no 45-46, b3, 56832, Los Angeles, CA</span>
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
