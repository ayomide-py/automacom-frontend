import React, { useState, useEffect } from "react";
import about_us_img from "../images/photo-gallery/automacom-students2.jpg";
import "../css/about-us.css";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [animate, setAnimate] = useState(true);
  const [m_count, setMCount] = useState(0);
  const [p_count, setPCount] = useState(0);
  const [c_count, setCCount] = useState(0);
  const [e_count, setECount] = useState(0);

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const cStartCounting = () => {
    let c_counter = 0;
    const interval = setInterval(() => {
      setCCount(c_counter);
      c_counter++;

      if (c_counter > 10) {
        clearInterval(interval);
      }
    }, 50);
  };

  const mStartCounting = () => {
    let m_counter = 0;
    const interval = setInterval(() => {
      setMCount(m_counter);
      m_counter++;

      if (m_counter > 100) {
        clearInterval(interval);
      }
    }, 50);
  };

  const pStartCounting = () => {
    let p_counter = 0;
    const interval = setInterval(() => {
      setPCount(p_counter);
      p_counter++;

      if (p_counter > 50) {
        clearInterval(interval);
      }
    }, 50);
  };

  const eStartCounting = () => {
    let e_counter = 0;
    const interval = setInterval(() => {
      setECount(e_counter);
      e_counter++;

      if (e_counter > 5) {
        clearInterval(interval);
      }
    }, 50);
  };

  useEffect(() => {
    if (inView) {
      cStartCounting();
      mStartCounting();
      pStartCounting();
      eStartCounting();
    }
  }, [inView]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="about-us">
      <div className="slideshow-container">
        <img src={about_us_img} />
        <div className="slide-text flyInTopp">
          <div className="about-title">
            <h1>About Us</h1>
            <p>
              The home of technological innovation, The home of technological
              innovation, we breath life into systems
            </p>
            <div className="line"></div>
          </div>
        </div>
      </div>
      <div className="about-section">
        <div className="content">
          <div className="heading">
            <h2>Who we are</h2>
            <div className="line"></div>
          </div>
          <p>
            AUTOMACOM (Automation Community) was born out of the desire to
            bridge the gap between theory and practical application in
            technology. Founded by a group of forward-thinking students at the
            University of Lagos, we recognized that while classroom learning is
            important, real-world, hands-on experience is what truly prepares us
            to make a difference in the field of Robotics, AI, IoT, and Embedded
            Systems. Our community, which is both student-based and student-led,
            has grown rapidly, creating a space where students collaborate,
            innovate, and work on projects that solve real problems,
            particularly those unique to Nigeria and Africa at large.
          </p>
          <p>
            We are a non-profit organization with the aim of raising
            well-rounded engineers who can create scalable, impactful solutions.
            Since our founding, we have focused on giving our members not only
            the tools and mentorship needed to succeed but also the opportunity
            to develop their skills through real projects from the very
            beginning.
          </p>
        </div>
        <div className="about-stats">
          <div className="stats">
            <h1>{m_count}+</h1>
            <p>Members</p>
          </div>
          <div className="stats">
            <h1>{p_count}+</h1>
            <p>Built Projects</p>
          </div>
          <div className="stats" ref={ref}>
            <h1>{c_count}+</h1>
            <p>Chapters</p>
          </div>
          <div className="stats">
            <h1>{e_count}+</h1>
            <p>Years in existence</p>
          </div>
        </div>
      </div>
      <div className={`mission-vission-values ${animate ? "animated" : ""}`}>
        <div className={`wpb_wrapper ${animate ? "animated" : ""}`}>
          <div className="key-icon-box icon-circle icon-top">
            <div className="img-title">
              <div className="tt-iconbox-customimg img_small_size">
                <i
                  class="fas fa-rocket attachment-full"
                  height={50}
                  width={50}
                ></i>
              </div>
              <h4 className="service-heading">Mission</h4>
            </div>
            <p>
              To foster a community of innovative students dedicated to
              mastering cutting-edge technology through practical, project-based
              learning. We aim to empower members to develop real-world
              solutions that can address challenges in Nigeria, Africa, and
              beyond.
            </p>
          </div>
        </div>
        <div className={`wpb_wrapper ${animate ? "animated" : ""}`}>
          <div className="key-icon-box icon-circle icon-top kd-animated fadeInUp kd-animate">
            <div className="img-title">
              <div className="tt-iconbox-customimg img_small_size">
                <i
                  class="fas fa-eye attachment-full"
                  height={50}
                  width={50}
                ></i>
              </div>
              <h4 className="service-heading">Vision</h4>
            </div>
            <p>
              To position African students at the forefront of technological
              advancement by nurturing their skills, providing them with tools
              and mentorship, and building a network of innovators who are ready
              to tackle the world’s toughest problems.
            </p>
          </div>
        </div>
        <div className={`wpb_wrapper ${animate ? "animated" : ""}`}>
          <div className="key-icon-box">
            <div className="img-title">
              <div className="tt-iconbox-customimg img_small_size">
                <i
                  class="fas fa-shield-alt attachment-full"
                  height={50}
                  width={50}
                ></i>
              </div>
              <h4 className="service-heading">Values</h4>
            </div>
            <div className="" style={{ textAlign: "left", padding: "40px" }}>
              <p style={{ textAlign: "left", paddingLeft: "40px" }}>
                At AUTOMACOM, we are guided by the following core values:
              </p>
              <ul>
                <li>
                  Innovation: We encourage our members to push boundaries and
                  develop new, creative solutions to real-world problems.
                </li>
                <li>
                  Collaboration: Our community thrives on teamwork. Members
                  learn from each other, share resources, and work together to
                  complete projects.
                </li>
                <li>
                  Practical Learning: We believe in learning by doing. All of
                  our members are encouraged to engage in hands-on projects from
                  day one.
                </li>
                <li>
                  Inclusion: We welcome students from all backgrounds and
                  disciplines, knowing that diversity strengthens our community.
                </li>
                <li>
                  Growth: Both personal and professional development is at the
                  heart of what we do. We strive to equip our members with the
                  skills and experiences they need to succeed in the tech world.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
