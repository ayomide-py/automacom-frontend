import React, { useState, useRef, useEffect } from "react";
import "../css/slider.css";
import TweetShot from "./TweetShot";
import passport from "../images/photo-gallery/tweet-dp.jpg";
import passport1 from "../images/photo-gallery/tweet-dp-1.jpg";
import passport2 from "../images/photo-gallery/tweet-dp-2.jpg";

const Slider = () => {
  const sliderRef = useRef(null);
  const scrollAmount = 400; // The amount to scroll when clicking the navigation buttons
  const [images, setImages] = useState([
    {
      id: 1,
      image_url: passport,
      name: "Chidi, AI and IoT Developer",
      username: "@chidiai",
      content:
        "The community gave me access to tools and resources that I never would have had otherwise. I’m now leading a project team and learning more than I ever imagined.",
    },
    {
      id: 2,
      image_url: passport1,
      name: "David, Product Design Stu...",
      username: "@david",
      content:
        "The best part about AUTOMACOM is the collaboration. It’s not just about what you learn, but who you learn it with.",
    },
    {
      id: 3,
      image_url: passport2,
      name: "Amina, Robotics Enthusiast",
      username: "@amina",
      content:
        "Being a part of AUTOMACOM has transformed my approach to learning. The hands-on experience and mentorship have been incredible.",
    },
    {
      id: 1,
      image_url: passport,
      name: "Chidi, AI and IoT Developer",
      username: "@chidiai",
      content:
        "The community gave me access to tools and resources that I never would have had otherwise. I’m now leading a project team and learning more than I ever imagined.",
    },
    {
      id: 2,
      image_url: passport1,
      name: "David, Product Design Stu...",
      username: "@david",
      content:
        "The best part about AUTOMACOM is the collaboration. It’s not just about what you learn, but who you learn it with.",
    },
    {
      id: 3,
      image_url: passport2,
      name: "Amina, Robotics Enthusiast",
      username: "@amina",
      content:
        "Being a part of AUTOMACOM has transformed my approach to learning. The hands-on experience and mentorship have been incredible.",
    },
    {
      id: 1,
      image_url: passport,
      name: "Chidi, AI and IoT Developer",
      username: "@chidiai",
      content:
        "The community gave me access to tools and resources that I never would have had otherwise. I’m now leading a project team and learning more than I ever imagined.",
    },
    {
      id: 2,
      image_url: passport1,
      name: "David, Product Design Stu...",
      username: "@david",
      content:
        "The best part about AUTOMACOM is the collaboration. It’s not just about what you learn, but who you learn it with.",
    },
    {
      id: 3,
      image_url: passport2,
      name: "Amina, Robotics Enthusiast",
      username: "@amina",
      content:
        "Being a part of AUTOMACOM has transformed my approach to learning. The hands-on experience and mentorship have been incredible.",
    },
  ]);

  const moveLeft = () => {
    const container = sliderRef.current;
    container.scrollLeft += scrollAmount;

    if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
      container.scrollLeft = 0;
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      moveLeft();
    }, 5000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className="slider">
      {/* Image container */}
      <div className="tweets-container" ref={sliderRef}>
        {images.map((image) => {
          return (
            <div className="tweets">
              <TweetShot
                key={image?.key}
                image_url={image?.image_url}
                content={image?.content}
                name={image?.name}
                username={image?.username}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
