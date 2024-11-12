import React, { useEffect, useState } from "react";
import "../css/Home.css";
import { Btn, ChapterWelcomeScreen, Slider } from "../components";
import imageb from "../images/slide-show-img/ss-4.jpg";
import embedded from "../images/icons/embedded.png";
import se from "../images/icons/se.png";
import ai from "../images/icons/ai.png";
import iot from "../images/icons/iot.png";
import re from "../images/icons/re.png";
import pd from "../images/icons/pd.png";
import full from "../images/photo-gallery/full.jpg";
import { Loading } from "../components";
import { Link } from "react-router-dom";

const Home = () => {
  const [animate, setAnimate] = useState(false);
  const [animate2, setAnimate2] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [imageb, imageb, imageb];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [currentIndex, images.length]);

  const trainings = [
    {
      title: "Embedded Systems",
      icon: embedded,
      content:
        "Learn how to develop low-level hardware systems that bring technology to life.",
    },
    {
      title: "Artificial Intelligence",
      icon: ai,
      content:
        "Dive into machine learning and data science to develop intelligent systems that learn and adapt.",
    },
    {
      title: "Internet of Things (IoT)",
      icon: iot,
      content:
        "Connect devices to create smarter, more integrated systems and leverage real-time data.",
    },
    {
      title: "Software Engineering",
      icon: se,
      content:
        "Write the code that powers our projects, creating robust and efficient software solutions.",
    },
    {
      title: "Robotics Engineering",
      icon: re,
      content:
        "Design and build systems that interact with the physical world through mechanical movements and automation.",
    },
    {
      title: "Product Design (3D Modeling)",
      icon: pd,
      content:
        "Bring your ideas to life through 3D modeling and prototyping, creating functional designs for real-world applications.",
    },
  ];

  useEffect(() => {
    function handleScroll() {
      const triggerSection = document.querySelector(".mission-vission-values");
      const triggerSectionTop = triggerSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (triggerSectionTop < windowHeight) {
        setAnimate(true);
        window.removeEventListener("scroll", handleScroll);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    function handleScroll() {
      const triggerSection = document.querySelector(".training-grid");
      const triggerSectionTop = triggerSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (triggerSectionTop < windowHeight) {
        setAnimate2(true);
        window.removeEventListener("scroll", handleScroll);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="home">
      <div className="cover-image">
        <ChapterWelcomeScreen />
      </div>
      <div className="mission-vission">
        <div className="heading">
          <h2>Who are we</h2>
          <div className="line"></div>
        </div>
        <div className={`who-are-we`}>
          <div className="who-are-we-text">
            <p style={{ textAlign: "left", lineHeight: "30px" }}>
              Welcome to AUTOMACOM – the Automation Community at the University
              of Lagos. We are a passionate group of students and future
              engineers dedicated to turning theories into impactful projects in
              Robotics, AI, IoT, and Embedded Systems. Our community is built on
              collaboration, innovation, and a drive to bring practical
              solutions to Nigeria's challenges and beyond.
            </p>
            <p style={{ textAlign: "left", lineHeight: "30px" }}>
              Whether you're just starting or you're looking to dive deeper into
              specific tech stacks, AUTOMACOM is here to guide and grow with
              you. From 3D product design to cutting-edge AI development, our
              diverse focus areas give you the freedom to explore and specialize
              as you advance.
            </p>
          </div>
          <div className="who-are-we-image">
            <img src={full} alt="" srcset="" />
          </div>
        </div>
      </div>
      <div className="mission-vission">
        <div className="heading">
          <h2>Mission, Vission and Values</h2>
          <div className="line"></div>
        </div>
        <div className={`mission-vission-values ${animate ? "animated" : ""}`}>
          <div className={`wpb_wrapper ${animate ? "animated" : ""}`}>
            <div className="key-icon-box icon-circle icon-top">
              <div className="tt-iconbox-customimg img_small_size">
                <i
                  class="fas fa-rocket attachment-full"
                  height={50}
                  width={50}
                ></i>
              </div>
              <h4 className="service-heading">Mission</h4>
              <p>
                To foster a community of innovative students dedicated to
                mastering cutting-edge technology through practical,
                project-based learning. We aim to empower members to develop
                real-world solutions that can address challenges in Nigeria,
                Africa, and beyond.
              </p>
            </div>
          </div>
          <div className={`wpb_wrapper ${animate ? "animated" : ""}`}>
            <div className="key-icon-box icon-circle icon-top">
              <div className="tt-iconbox-customimg img_small_size">
                <i
                  class="fas fa-eye attachment-full"
                  height={50}
                  width={50}
                ></i>
              </div>
              <h4 className="service-heading">Vision</h4>
              <p>
                To position African students at the forefront of technological
                advancement by nurturing their skills, providing them with tools
                and mentorship, and building a network of innovators who are
                ready to tackle the world’s toughest problems.
              </p>
            </div>
          </div>
          <div className={`wpb_wrapper ${animate ? "animated" : ""}`}>
            <div className="key-icon-box icon-circle icon-top">
              <div className="tt-iconbox-customimg img_small_size">
                <i
                  class="fas fa-shield-alt attachment-full"
                  height={50}
                  width={50}
                ></i>
              </div>
              <h4 className="service-heading">Values</h4>
              <p>
                We foster a collaborative, inclusive community that drives
                innovation, practical learning, and personal and professional
                growth through hands-on, team-based projects..
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="core-trainings">
        <div className="heading">
          <h2>What you would learn</h2>
          <div className="line"></div>
        </div>
        <div className={`training-grid ${animate2 ? "animated" : ""}`}>
          {trainings.map((training) => (
            <div
              className={`single-cat text-center mb-50 ${
                animate2 ? "animated" : ""
              }`}
              key={training.title}
            >
              <div className="cat-icon">
                <img src={training.icon} />
              </div>
              <div className="cat-cap" style={{ boxSizing: "border-box" }}>
                <h3>{training.title}</h3>
                <p>{training.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="tweet-section">
        <div className="heading">
          <h2>What People Say About Us</h2>
          <div className="line"></div>
        </div>
        <div>
          <Slider />
        </div>
      </div>
      <div className="pioneer-profile">
        <div className="heading">
          <h2>Meet the Pioneer</h2>
          <div className="line"></div>
        </div>
        <div className="wpb_column vc_column_container vc_col-sm-4">
          <div className="vc_column-inner">
            <div
              className="wpb_wrapper-profile"
              style={{ boxSizing: "border-box" }}
            >
              <div className="team-member kd-animated zoomIn kd-animate">
                <div className="team-content">
                  <div className="team-image">
                    <img
                      className="attachment-full"
                      height={300}
                      width={300}
                      sizes="(max-width: 190px) 100vw, 190px"
                      src="https://www.keydesign-themes.com/incubator/event/wp-content/uploads/sites/3/2016/01/raymond-turner-event.png"
                      srcSet="https://www.keydesign-themes.com/incubator/event/wp-content/uploads/sites/3/2016/01/raymond-turner-event.png 190w, https://www.keydesign-themes.com/incubator/event/wp-content/uploads/sites/3/2016/01/raymond-turner-event-150x150.png 150w"
                      title="raymond-turner-event"
                    />
                    <div className="team-content-hover">
                      <div className="gradient-overlay" />
                      <h5 style={{ color: "white" }}>Raymond Turner</h5>{" "}
                      <span
                        className="team-subtitle"
                        style={{ color: "white" }}
                      >
                        CEO - KeySoft
                      </span>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco, consectetur adipisicing
                        elit, sed. orem ipsum dolor sit amet, consectetur
                        adipisicing.
                      </p>
                    </div>
                  </div>
                  <h5>Raymond Turner</h5>{" "}
                  <span className="team-subtitle">CEO - KeySoft</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="join-banner">
        <div className="banner-title">
          <h1>Ready to Become A Member?</h1>
        </div>
        <Link to={"/auth/register"} className="join-btn">
          <Btn content={"Join the Community"} />
        </Link>
      </div>
    </div>
  );
};

export default Home;
