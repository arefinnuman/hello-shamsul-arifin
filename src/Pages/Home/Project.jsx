import React from "react";
import { Link } from "react-router-dom";

const Project = (project) => {
  const id = project.project.id;
  console.log(project.project);
  return (
    <div className="card shadow-2xl">
      <figure>
        <img src={project.project.img} alt="Project" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {project.project.name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <div className="card-actions  my-4">
          <a
            className="badge badge-outline"
            href={project.project.liveLink}
            target="_blank"
            rel="noreferrer"
          >
            Live Link
          </a>
          <a
            className="badge badge-outline"
            href={project.project.clientSideLink}
            target="_blank"
            rel="noreferrer"
          >
            Client Side
          </a>
          <a
            className="badge badge-outline"
            href={project.project.serverSideLink}
            target="_blank"
            rel="noreferrer"
          >
            Server Side Link
          </a>
          <br />
          <Link to={`/projects/${id}`} className="link-primary link-hover mt-2">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
