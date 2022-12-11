import React from "react";

const Project = (project) => {
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
        <p className="font-bold">{project.description}</p>

        <div className="card-actions justify-center">
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
        </div>
      </div>
    </div>
  );
};

export default Project;
