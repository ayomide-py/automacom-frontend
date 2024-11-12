import React, { useState, useEffect } from "react";
import "../css/ChapterWS.css";
import chapterwsvideo from "../images/videos/chapterws.mp4";
import Btn from "./Btn";
import { Link } from "react-router-dom";

const ChapterWelcomeScreen = () => {
  const [flyin, setFlyin] = useState(false);
  const [flyout, setFlyout] = useState(false);

  useEffect(() => {
    setFlyin(true);

    const flyInInterval = setInterval(() => {
      setFlyin(true);
      setFlyout(false);

      // Clear the flyin animation after 5 seconds
      setTimeout(() => {
        setFlyin(false);
        setFlyout(true);
      }, 7000);
    }, 10000); // Total time for flyin and flyout
  }, []);
  return (
    <div className="chapterws">
      <video autoPlay loop muted>
        <source src={chapterwsvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <div
          className={`welcome-text ${
            flyin ? "flyInTop welcome-text-in-animation" : ""
          }
          ${flyout ? "flyOutTop welcome-text-out-animation" : ""}
          `}
        >
          <h1>Welcome to Automation Community</h1>
        </div>
        <div
          className={`welcome-description ${
            flyin ? "flyInBottom welcome-description-in-animation" : ""
          }
          ${flyout ? "flyOutBottom welcome-description-out-animation" : ""}
          `}
        >
          <p>
            A student-led community focused on practical, hands-on learning to
            solve real-world challenges. Empowering the Next Generation of
            Innovators in Robotics, AI, IoT & Embedded Systems
          </p>
          <Link to={"/auth/register"} className="join-us-btn">
            <Btn content={"Join the Community"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChapterWelcomeScreen;
