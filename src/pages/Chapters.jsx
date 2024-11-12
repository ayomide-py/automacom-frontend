import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../css/chapter.css";
import { Btn, CoverImage, Loading } from "../components";
import BaseUrl from "../components/BaseUrl";
import { Link } from "react-router-dom";
import exec from "../images/slide-show-img/ss-1.jpg";

const Chapter = () => {
  const { chapterName } = useParams();
  const [executives, setExecutives] = useState([]);
  const [photoGallery, setPhotoGallery] = useState([]);
  const [projectGallery, setProjectGallery] = useState([]);
  const [animate, setAnimate] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = `${BaseUrl()}/member_api/?chapter=automacom%20${chapterName}&is_executive=True`;

    const getExecutives = async () => {
      try {
        const request = await fetch(url, {
          headers: {
            "Content-Type": "application/json",
            ApiAuthorization: process.env.REACT_APP_API_KEY,
          },
        });

        if (request.ok) {
          const response = await request.json();
          setExecutives(response);
        } else {
          const response = await request.json();
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getExecutives();
  }, []);

  useEffect(() => {
    console.log(photoGallery.length > 0);
    const url = `${BaseUrl()}/photo_gallery_api/?chapter=automacom%20${chapterName}`;
    const getPhotoGallery = async () => {
      const request = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          ApiAuthorization: process.env.REACT_APP_API_KEY,
        },
      });
      if (request.ok) {
        const response = await request.json();
        const picture_array = response.slice(-5);
        setPhotoGallery(picture_array);
      } else {
        const response = await request.json();
      }
    };
    getPhotoGallery();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const url = `${BaseUrl()}/project_api/?chapter=automacom%20${chapterName}`;
    const getProjectGallery = async () => {
      const request = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          ApiAuthorization: process.env.REACT_APP_API_KEY,
        },
      });
      if (request.ok) {
        const response = await request.json();
        const project_array = response.slice(-5);
        setProjectGallery(project_array);
        setLoading(false);
      } else {
        const response = await request.json();
      }
    };
    getProjectGallery();
  });

  const news_object = [
    {
      date: "February 3, 2023",
      title: "Upcoming Meeting",
      content:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam et suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur Et mollis, est non",
    },
    {
      date: "February 3, 2023",
      title: "Upcoming Meeting",
      content:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam et suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur Et mollis, est non",
    },
    {
      date: "February 3, 2023",
      title: "Upcoming Meeting",
      content:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam et suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur Et mollis, est non",
    },
    {
      date: "February 3, 2023",
      title: "Upcoming Meeting",
      content:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam et suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur Et mollis, est non",
    },
  ];

  useEffect(() => {
    function handleScroll() {
      const triggerSection = document.querySelector(".exec-section");
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

  if (loading) {
    return (
      <div
        className="loading-com"
        style={{ marginTop: "150px", marginBottom: "100px" }}
      >
        <Loading />
      </div>
    );
  }

  return (
    <div className="chapter-page">
      <CoverImage />
      <div className="heading">
        <h2>Meet the Executives</h2>
        <div className="line"></div>
      </div>
      <div>
        {executives.length > 0 ? (
          <div className={`exec-section ${animate ? "flyInBottom" : ""}`}>
            {executives.map((executive) => (
              <div className="exec-card">
                <img src={executive.profile_img} alt="" srcset="" />
                <div className="exec-title">
                  <h3>{executive.first_name + " " + executive.last_name} </h3>{" "}
                  <p className="team-subtitle">
                    {executive.executive_position}
                  </p>
                </div>
                <div className="exec-profile">
                  <p className="profile">
                    Lorem ipsum dolor sit amet, con sectetur adipiscing elit.
                    Mauris temp us vestib ulum mauris.Lorem ipsum dolor sit
                    amet, consectetur adipiscing
                  </p>
                  <div className="social-icons">
                    <Link>
                      <i class="fa-brands fa-x-twitter"></i>
                    </Link>
                    <Link>
                      <i class="fa-brands fa-linkedin"></i>
                    </Link>
                    <Link>
                      <i class="fa-brands fa-instagram"></i>
                    </Link>
                    <Link>
                      <i class="fa-brands fa-facebook"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="loading-com">
            <Loading />
          </div>
        )}
      </div>
      {/* <div className="exec-section">
        <div className="exec-card">
          <img src={executive.profile_img} alt="" srcset="" />
          <div className="exec-title">
            <h5>{executive.first_name + " " + executive.last_name} </h5>{" "}
            <span className="team-subtitle">
              {executive.executive_position}
            </span>
          </div>
        </div>
        <div className="exec-card">
          <img src={exec} alt="" srcset="" />
          <div className="exec-title">
            <h4>John Miken</h4>
            <p>Project Lead</p>
          </div>
        </div>
        <div className="exec-card">
          <img src={exec} alt="" srcset="" />
          <div className="exec-title">
            <h4>John Miken</h4>
            <p>Project Lead</p>
          </div>
        </div>
        <div className="exec-card">
          <img src={exec} alt="" srcset="" />
          <div className="exec-title">
            <h4>John Miken</h4>
            <p>Project Lead</p>
          </div>
        </div>
      </div> */}
      <div className="chapter-gallery">
        {photoGallery.length > 0 ? (
          <div className="gallery">
            <div
              className="photo-group-1"
              style={{ backgroundColor: "var(--light-blue)" }}
            >
              <div className="project-write-up">
                <h1>
                  View Our Photo
                  <br />
                  Gallery
                </h1>
                <p>View More</p>
                <Link to="/photo-gallery/">
                  <div className="round-arrow">
                    <span>&rarr;</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="photo-group-2">
              <div className="photo-set-1">
                <div className="set-1-photo">
                  <div className="photo-write-up">
                    <p>View More</p>
                    <Link to="/photo-gallery/">
                      <div className="round-arrow">
                        <span>&rarr;</span>
                      </div>
                    </Link>
                  </div>
                  {photoGallery[0].photo ? (
                    <img src={photoGallery[0].photo} alt="" srcset="" />
                  ) : (
                    <div className="loading-com">
                      <Loading />
                    </div>
                  )}
                </div>
                <div className="set-1-photo">
                  <div className="photo-write-up">
                    <p>View More</p>
                    <Link to="/photo-gallery/">
                      <div className="round-arrow">
                        <span>&rarr;</span>
                      </div>
                    </Link>
                  </div>
                  {photoGallery[1].photo ? (
                    <img src={photoGallery[1].photo} alt="" srcset="" />
                  ) : (
                    <div className="loading-com">
                      <Loading />
                    </div>
                  )}
                </div>
                <div className="set-1-photo">
                  <div className="photo-write-up">
                    <p>View More</p>
                    <Link to="/photo-gallery/">
                      <div className="round-arrow">
                        <span>&rarr;</span>
                      </div>
                    </Link>
                  </div>
                  {photoGallery[2].photo ? (
                    <img src={photoGallery[2].photo} alt="" srcset="" />
                  ) : (
                    <div className="loading-com">
                      <Loading />
                    </div>
                  )}
                </div>
              </div>
              <div className="photo-set-2">
                <div className="set-2-photo">
                  <div className="photo-write-up">
                    <p>View More</p>
                    <Link to="/photo-gallery/">
                      <div className="round-arrow">
                        <span>&rarr;</span>
                      </div>
                    </Link>
                  </div>
                  {console.log(photoGallery[3].photo)}
                  {photoGallery[3].photo ? (
                    <img src={photoGallery[3].photo} alt="" srcset="" />
                  ) : (
                    <div className="loading-com">
                      <Loading />
                    </div>
                  )}
                </div>
                <div className="set-2-photo">
                  <div className="photo-write-up">
                    <p>View More</p>
                    <Link to="/photo-gallery/">
                      <div className="round-arrow">
                        <span>&rarr;</span>
                      </div>
                    </Link>
                  </div>
                  {photoGallery[4].photo ? (
                    <img src={photoGallery[4].photo} alt="" srcset="" />
                  ) : (
                    <div className="loading-com">
                      <Loading />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="loading-com">
            <Loading />
          </div>
        )}
      </div>
      <div className="chapter-join-banner">
        <div className="banner-title">
          <h1>Ready to Become A Member?</h1>
        </div>
        <div className="join-btn">
          <Btn content={"Join the Community"} />
        </div>
      </div>
      {projectGallery.length > 0 ? (
        <div className="project-gallery">
          <div className="projects-section">
            <div
              className="photo-group-1"
              style={{ backgroundColor: "var(--light-blue)" }}
            >
              <div className="project-write-up">
                <h1>
                  Explore Our <br />
                  Projects
                </h1>
                <p>View More</p>
                <Link to="/project-gallery/">
                  <div className="round-arrow">
                    <span>&rarr;</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="photo-group-2">
              <div className="photo-set-1">
                <div className="set-1-photo">
                  <div className="photo-write-up">
                    <h4 style={{ textAlign: "center", fontWeight: "700" }}>
                      {projectGallery[0]["title"]}
                    </h4>
                    <p>Read More</p>
                    <Link
                      to={`/project-gallery/${projectGallery[0][
                        "title"
                      ].replaceAll(" ", "-")}/`}
                    >
                      <div className="round-arrow">
                        <span>&rarr;</span>
                      </div>
                    </Link>
                  </div>
                  <img
                    src={projectGallery[0]["intro_image"]}
                    alt=""
                    srcset=""
                  />
                </div>
                <div className="set-1-photo">
                  <div className="photo-write-up">
                    <h4 style={{ textAlign: "center", fontWeight: "700" }}>
                      {projectGallery[1]["title"]}
                    </h4>
                    <p>Read More</p>
                    <Link
                      to={`/project-gallery/${projectGallery[1][
                        "title"
                      ].replaceAll(" ", "-")}/`}
                    >
                      <div className="round-arrow">
                        <span>&rarr;</span>
                      </div>
                    </Link>
                  </div>
                  <img
                    src={projectGallery[1]["intro_image"]}
                    alt=""
                    srcset=""
                  />
                </div>
                <div className="set-1-photo">
                  <div className="photo-write-up">
                    <h4 style={{ textAlign: "center", fontWeight: "700" }}>
                      {projectGallery[2]["title"]}
                    </h4>
                    <p>Read More</p>
                    <Link
                      to={`/project-gallery/${projectGallery[2][
                        "title"
                      ].replaceAll(" ", "-")}/`}
                    >
                      <div className="round-arrow">
                        <span>&rarr;</span>
                      </div>
                    </Link>
                  </div>
                  <img
                    src={projectGallery[2]["intro_image"]}
                    alt=""
                    srcset=""
                  />
                </div>
              </div>
              <div className="photo-set-2">
                <div className="set-2-photo">
                  <div className="photo-write-up">
                    <h4 style={{ textAlign: "center", fontWeight: "700" }}>
                      {projectGallery[2]["title"]}
                    </h4>
                    <p>Read More</p>
                    <Link
                      to={`/project-gallery/${projectGallery[3][
                        "title"
                      ].replaceAll(" ", "-")}/`}
                    >
                      <div className="round-arrow">
                        <span>&rarr;</span>
                      </div>
                    </Link>
                  </div>
                  <img
                    src={projectGallery[3]["intro_image"]}
                    alt=""
                    srcset=""
                  />
                </div>
                <div className="set-2-photo">
                  <div className="photo-write-up">
                    <h4 style={{ textAlign: "center", fontWeight: "700" }}>
                      {projectGallery[4]["title"]}
                    </h4>
                    <p>Read More</p>
                    <Link
                      to={`/project-gallery/${projectGallery[4][
                        "title"
                      ].replaceAll(" ", "-")}/`}
                    >
                      <div className="round-arrow">
                        <span>&rarr;</span>
                      </div>
                    </Link>
                  </div>
                  <img
                    src={projectGallery[4]["intro_image"]}
                    alt=""
                    srcset=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="loading-com">
          <Loading />
        </div>
      )}
      <div className="news">
        <div className="heading">
          <h2>Latest News</h2>
          <div className="line"></div>
        </div>
        <div className="news-grid">
          {news_object.map((news) => (
            <div className="news-card">
              <div className="news-date">
                <p>{news.date}</p>
              </div>
              <div className="new-title">
                <h4>{news.title}</h4>
              </div>
              <div className="news-content">
                <p>{news.content}</p>
              </div>
              <div className="news-readmore">
                <a title="READ MORE" href="/">
                  READ MORE <i class="vc_btn3-icon fa fa-angle-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chapter;
