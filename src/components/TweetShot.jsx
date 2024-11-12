import React from "react";
import "../css/tweetshot.css";

const TweetShot = ({ key, name, username, image_url, content }) => {
  return (
    <div className="tweetshot">
      <div className="tweet-profile">
        <div className="tweet-head">
          <img src={image_url} alt="" srcset="" />
          <div className="tweet-profile-name">
            <p>
              <span>{name}</span>
            </p>
            <p>{username}</p>
          </div>
        </div>
        <div className="twitter-icon">
          <i class="fa-brands fa-twitter"></i>
        </div>
      </div>
      <div className="tweet-content">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default TweetShot;
