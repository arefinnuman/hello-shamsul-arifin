import React, { useEffect, useState } from "react";
import Project from "./Project";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("https://portfolio-server-mu-ebon.vercel.app/projects")
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="mb-10" id="projects">
      <div className="text-center mt-20">
        <h1 className="text-4xl font-bold">Some Recent Projects</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5">
        {projects.map((project) => (
          <Project project={project} key={project.id}></Project>
        ))}
      </div>
    </div>
  );
};

export default Projects;
