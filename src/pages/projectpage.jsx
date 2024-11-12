import React, { useState, useEffect } from "react";
import "../css/projectpage.css";
import p_img_5 from "../images/photo-gallery/practical-3.jpg";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Btn from "../components/Btn";
import { BaseUrl } from "../components";
import { useParams } from "react-router-dom";
import Login from "./Login";

const ProjectPage = () => {
  const [projectContent, setProjectContent] = useState([]);
  const [comments, setComments] = useState([]);
  const { project_title } = useParams();
  const [typedComment, setTypedComment] = useState();
  const [showLogin, setShowLogin] = useState(false);
  const [auth, setAuth] = useState(false);
  const [member, setMember] = useState([]);
  const user_email = window.localStorage.getItem("user_email");

  const removeBlur = () => {
    const auth_value = window.localStorage.getItem("authenticated");
    document.getElementsByClassName("header")[0].classList.toggle("blur");
    document
      .getElementsByClassName("footer-widgets")[0]
      .classList.toggle("blur");
    setShowLogin(false);
    if (auth_value == "true") {
      getUserDetails();
      setAuth(true);
    }
  };

  const getUserDetails = async () => {
    const url = `${BaseUrl()}/member_api/?email=${user_email}`;
    const request = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        ApiAuthorization: process.env.REACT_APP_API_KEY,
      },
    });
    if (request.ok) {
      const response = await request.json();
      setMember(response);
      member.push(response[0]);
    } else {
      const response = await request.json();
    }
  };

  useEffect(() => {
    const auth_value = window.localStorage.getItem("authenticated");
    if (auth_value == "true") {
      getUserDetails();
      setAuth(true);
    }
  }, []);

  const addBlur = () => {
    document.getElementsByClassName("header")[0].classList.toggle("blur");
    document
      .getElementsByClassName("footer-widgets")[0]
      .classList.toggle("blur");
    setShowLogin(true);
  };

  const getComments = async () => {
    const url = `${BaseUrl()}/comment_api/?project-title=${project_title.replaceAll(
      "-",
      " "
    )}`;
    const request = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        ApiAuthorization: process.env.REACT_APP_API_KEY,
      },
    });
    if (request.ok) {
      const response = await request.json();
      setComments(response);
    }
  };

  useEffect(() => {
    getComments();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const getProjectContent = async () => {
      const url = `${BaseUrl()}/project_api/?project-title=${project_title.replaceAll(
        "-",
        " "
      )}`;
      const request = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          ApiAuthorization: process.env.REACT_APP_API_KEY,
        },
      });
      if (request.ok) {
        const response = await request.json();
        setProjectContent(response.slice(0, 1));
      } else {
        const response = await request.json();
      }
    };
    getProjectContent();
  }, []);

  function formatDate(originalDate) {
    const dateObj = new Date(originalDate);

    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();

    const ampm = hours >= 12 ? "pm" : "am";
    const formattedHours = hours % 12 || 12;

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = months[dateObj.getMonth()];
    const day = dateObj.getDate();
    const year = dateObj.getFullYear();

    const formattedDate = `${month} ${day}, ${year} at ${formattedHours}:${minutes
      .toString()
      .padStart(2, "0")} ${ampm}`;

    return formattedDate;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const body = {
      member: user_email,
      project: project_title.replaceAll("-", " "),
      comment: typedComment,
    };
    const url = `${BaseUrl()}/comment_api/`;
    const request = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ApiAuthorization: process.env.REACT_APP_API_KEY,
      },
      body: JSON.stringify(body),
    });
    if (request.ok) {
      const response = await request.json();
      getComments();
      setTypedComment("");
      console.log(response);
    }
  };

  return (
    <div className="project-section">
      <div className={`auth-page ${showLogin ? "show-auth" : ""}`}>
        <i class="fa fa-xmark close-icon" onClick={removeBlur}></i>
        <Login />
      </div>
      {projectContent ? (
        projectContent.map((project) => (
          <div className={`section-content ${showLogin ? "blur" : ""}`}>
            <div className="content-card">
              <div className="heading">
                <h2 className="content-title">{project.title}</h2>
                <div className="line"></div>
              </div>
              <div className="publisher">
                <h6>
                  <span>Published by: </span>
                  {project.member.first_name + " " + project.member.last_name}
                </h6>
              </div>
              <div className="date">
                <h6>
                  <span>Published: </span>
                  {formatDate(project.created_at)}
                </h6>
              </div>
              <div className="content-tags">
                <h6>Tags: </h6>
                <p>{JSON.parse(project.tags.replace(/'/g, '"'))[0]}</p>
                <p>{JSON.parse(project.tags.replace(/'/g, '"'))[1]}</p>
                <p>{JSON.parse(project.tags.replace(/'/g, '"'))[2]}</p>
              </div>
              <p className="content-brief">{project.intro_description}</p>
              <div className="content-image">
                <img src={project.intro_image} alt="" />
              </div>
            </div>
            <div className="content-card">
              <div className="heading">
                <h2 className="content-title">Component and Supplies</h2>
                <div className="line"></div>
              </div>
              <ul className="component-list">
                {JSON.parse(project.components.replace(/'/g, '"')).map(
                  (component) => (
                    <li className="component">{component}</li>
                  )
                )}
              </ul>
            </div>
            <div className="content-card">
              <div className="heading">
                <h2 className="content-title">Project Description</h2>
                <div className="line"></div>
              </div>
              <p className="content-brief">{project.project_description}</p>
              <div className="project-images">
                <img src={project.image_1} alt="" />
                <img src={project.image_2} alt="" />
                <img src={project.image_3} alt="" />
                <img src={project.image_4} alt="" />
              </div>
            </div>
            <div className="content-card">
              <div className="heading">
                <h2 className="content-title">Project Media</h2>
                <div className="line"></div>
              </div>
              <div className="project-video">
                <iframe
                  src={project.video_url}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div className="content-card">
              <div className="heading">
                <h2 className="content-title">Code</h2>
                <div className="line"></div>
              </div>
              <p className="content-brief">{project.code_description}</p>
              <div className="code-div">
                <SyntaxHighlighter language="cpp" style={docco}>
                  {project.code_snippet}
                </SyntaxHighlighter>
              </div>
            </div>
            <div className="content-card">
              <div className="heading">
                <h2 className="content-title">Comment</h2>
                <div className="line"></div>
              </div>
              <div className="comments">
                {comments ? (
                  comments.map((comment) => (
                    <div>
                      <div className="comment">
                        <div className="commenter">
                          <img
                            src={comment.member.profile_img}
                            alt=""
                            srcset=""
                          />
                          <div className="p-comment-date">
                            <h5>
                              {comment.member.first_name +
                                " " +
                                comment.member.last_name}
                            </h5>
                            <p>{formatDate(comment.created_at)}</p>
                          </div>
                        </div>
                        <div className="commenter-text">
                          <p>{comment.comment}</p>
                        </div>
                      </div>
                      <div className="project-divide-line"></div>
                    </div>
                  ))
                ) : (
                  <div></div>
                )}
              </div>
              {auth && member ? (
                <div className="comment-input">
                  <img
                    src={member.length > 0 ? member[0].profile_img : ""}
                    alt=""
                    srcset=""
                  />
                  <div className="comment-textarea">
                    <textarea
                      name="Write your comment..."
                      placeholder="Write your comment..."
                      id=""
                      value={typedComment}
                      onChange={(e) => setTypedComment(e.target.value)}
                    ></textarea>
                    <div className="send-btn" onClick={handleSubmit}>
                      <button>
                        <i class="fa fa-paper-plane"></i>{" "}
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="commemt-auth">
                  <i>
                    <p>Please login to comment</p>
                  </i>
                  <i class="fa fa-comments comment-icon"></i> <br />
                  <button onClick={addBlur}>Click here to login</button>
                </div>
              )}
            </div>
          </div>
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default ProjectPage;
