import React, { useState, useEffect } from "react";
import "../css/CoverImage.css";
import ss_1 from "../images/slide-show-img/ss-1.jpg";
import ss_2 from "../images/slide-show-img/ss-2.jpg";
import ss_3 from "../images/slide-show-img/ss-3.jpg";
import ss_4 from "../images/slide-show-img/ss-4.jpg";
import ss_5 from "../images/slide-show-img/ss-5.jpg";
import Btn from "./Btn";
import { Link } from "react-router-dom";

const CoverImage = () => {
  const images = [ss_1, ss_2, ss_3, ss_4, ss_5];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageOpacity, setImageOpacity] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageOpacity(0);

      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setImageOpacity(1);
      }, 500);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const goToPreviousSlide = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  const goToNextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="slideshow-container">
      <img
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
        style={{ opacity: imageOpacity, transition: "opacity 0.5s" }}
      />
      <div className="slide-text flyInTopp">
        <div className="slide-text-title">
          <h1>Welcome to Automation Community, University of Lagos Chapter</h1>
          <p>
            Welcome to AUTOMACOM – the Automation Community at the University of
            Lagos. We are a passionate group of students and future engineers
            dedicated to turning theories into impactful projects in Robotics,
            AI, IoT, and Embedded Systems.
          </p>
          <div className="line"></div>
        </div>
        <div className="join-us-btn">
          <p>The application form is now opened</p>
          <Link to={"/auth/register"}>
            <Btn content={"Join the Community"} url={"/auth/"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CoverImage;
