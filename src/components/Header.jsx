import React, { useState, useEffect } from "react";
import "../css/Header.css";
import logo_img from "../images/automacom_logo.png";
import Btn from "./Btn";
import unilag_logo from "../images/chapters-logo/unilag.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [hamburger, setHamburger] = useState(false);
  const [isChapterDropdownVisible, setChapterDropdownVisible] = useState(false);
  const [mobileChapter, setMobileChapter] = useState(false);
  const navigate = useNavigate();

  const closeDropdown = () => {
    setHamburger(false);
  };

  const hamburgerBtn = () => {
    hamburger ? setHamburger(false) : setHamburger(true);
  };

  const handleChapterBtnHover = () => {
    setChapterDropdownVisible(true);
  };

  const handleChapterBtnLeave = () => {
    setChapterDropdownVisible(false);
  };

  const toggleChapter = () => {
    mobileChapter ? setMobileChapter(false) : setMobileChapter(true);
  };

  useEffect(() => {
    closeDropdown();
  }, [navigate]);

  return (
    <div className="header">
      <div className="logo">
        <Link to={"/"}>
          <img src={logo_img} alt="logo" srcset="" />
        </Link>
      </div>
      <div className="nav">
        <ul className="nav-list">
          <li className="link">
            <Link to={"/"}>
              <span>Home</span>
            </Link>
          </li>
          <li
            className="link chapter-btn"
            onMouseEnter={handleChapterBtnHover}
            onMouseLeave={handleChapterBtnLeave}
          >
            Chapters
            <div
              className={`chapters-dropdown ${
                isChapterDropdownVisible ? "visible" : ""
              }`}
            >
              <Link to="/chapter/unilag">
                <div className="chapters">
                  <div className="chapter-image">
                    <img src={unilag_logo} alt="" srcSet="" />
                  </div>
                  <div className="chapter-name">
                    <p>UNILAG Chapter, Automation Community</p>
                  </div>
                </div>
              </Link>
              <Link to="/chapter/futa">
                <div className="chapters">
                  <div className="chapter-image">
                    <img src={unilag_logo} alt="" srcSet="" />
                  </div>
                  <div className="chapter-name">
                    <p>FUTA Chapter, Automation Community</p>
                  </div>
                </div>
              </Link>
              <Link to="/chapter/bowen">
                <div className="chapters">
                  <div className="chapter-image">
                    <img src={unilag_logo} alt="" srcSet="" />
                  </div>
                  <div className="chapter-name">
                    <p>BOWEN Chapter, Automation Community</p>
                  </div>
                </div>
              </Link>
            </div>
          </li>
          <li className="link">
            <Link to="/project-gallery">Projects</Link>
          </li>
          <li className="link">
            <Link to="/photo-gallery">Photo Album</Link>
          </li>
          <li className="link">
            <Link to="/about-us">About Us</Link>
          </li>
          <li className="link">
            <Link to="/blogs">Blog</Link>
          </li>
        </ul>
        <div className="contact-us">
          <Link to="/auth/register">
            <Btn content={"Join the Community"} />
          </Link>
        </div>
      </div>
      <div className="mobile">
        <div className="bars" onClick={hamburgerBtn}>
          <div className={`bar ${hamburger ? "close-bar" : ""}`}></div>
          <div className={`bar ${hamburger ? "close-bar" : ""}`}></div>
          <div className={`bar ${hamburger ? "close-bar" : ""}`}></div>
          <div className={`close ${hamburger ? "close-x" : ""}`}>
            <i class="fa fa-xmark"></i>
          </div>
        </div>
        <ul className={`mobile-nav-list ${hamburger ? "nav-open" : ""}`}>
          <Link to="/">
            <li className="mobile-link">
              <span>Home</span>
            </li>
          </Link>
          <li className="mobile-link">
            <div className="chapter-flex" onClick={toggleChapter}>
              <p>Chapter</p>
              <i
                className={`${
                  mobileChapter ? "fa fa-angle-up" : "fa fa-angle-down"
                }`}
              ></i>
            </div>
            <div
              className={`mobile-chapter-dropdown ${
                mobileChapter ? "chapter-show" : ""
              }`}
            >
              <Link to="/chapter/unilag">
                <div className="chapters">
                  <div className="chapter-image">
                    <img src={unilag_logo} alt="" srcSet="" />
                  </div>
                  <div className="chapter-name">
                    <p>AUTOMACOM UNILAG CHAPTER</p>
                  </div>
                </div>
              </Link>
              <Link to="/chapter/futa">
                <div className="chapters">
                  <div className="chapter-image">
                    <img src={unilag_logo} alt="" srcSet="" />
                  </div>
                  <div className="chapter-name">
                    <p>AUTOMACOM FUTA CHAPTER</p>
                  </div>
                </div>
              </Link>
              <Link to="/chapter/bowen">
                <div className="chapters">
                  <div className="chapter-image">
                    <img src={unilag_logo} alt="" srcSet="" />
                  </div>
                  <div className="chapter-name">
                    <p>AUTOMACOM BOWEN CHAPTER</p>
                  </div>
                </div>
              </Link>
            </div>
          </li>
          <Link to="/project-gallery">
            <li className="mobile-link">Projects</li>
          </Link>
          <Link to="/photo-gallery">
            <li className="mobile-link">Photo Album</li>
          </Link>
          <Link to="/about-us">
            <li className="mobile-link">About Us</li>
          </Link>
          <Link to="/blogs">
            <li className="mobile-link">Blog</li>
          </Link>
          <Link to="/auth/register">
            <li style={{ borderBottom: "none", textAlign: "center" }}>
              <Btn content={"Join the Community"} />
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
