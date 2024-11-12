import React, { useState, useEffect } from "react";
import "../css/project.css";
import { Link } from "react-router-dom";
import BaseUrl from "../components/BaseUrl";
import { Loading } from "../components";

const ProjectPage = () => {
  const [projects, setProjects] = useState([]);
  const api_key = process.env.REACT_APP_API_KEY;

  const getProjects = async () => {
    const url = `${BaseUrl()}/project_api/`;
    const request = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        ApiAuthorization: process.env.REACT_APP_API_KEY,
      },
    });
    if (request.ok) {
      const response = await request.json();
      setProjects(response);
    } else {
      const response = await request.json();
    }
  };

  useEffect(() => {
    getProjects();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="project-page">
      <div className="heading">
        <h2>PROJECT GALLERY</h2>
        <div className="line"></div>
      </div>
      {projects.length > 0 ? (
        <div className="project-grid">
          {projects.map((project) => (
            <Link
              to={`/project-gallery/${project.title.replaceAll(" ", "-")}/`}
              className="project"
            >
              <div className="project-image">
                <img src={project.intro_image} alt="" />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">
                  {project.project_description.substring(0, 105)} . . .
                </p>
                <div className="project-tags">
                  <h6>Tags: </h6>
                  <p>{JSON.parse(project.tags.replace(/'/g, '"'))[0]}</p>
                  <p>{JSON.parse(project.tags.replace(/'/g, '"'))[1]}</p>
                  <p>{JSON.parse(project.tags.replace(/'/g, '"'))[2]}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="loading-com">
          <Loading />
        </div>
      )}
    </div>
  );
};

export default ProjectPage;
