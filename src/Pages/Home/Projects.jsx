import React from "react";
import { Link } from "react-router-dom";
import CarGurus from "../../Assets/Projects/CarGurus.png";
import CreativeLive from "../../Assets/Projects/Creativelive.png";
import LensExpert from "../../Assets/Projects/Lensexpert.png";

const Projects = () => {
  const projects = [
    {
      name: "Car Gurus",
      description: "A car selling website",
      img: CarGurus,
      liveLink: "https://car-gurus-d0368.web.app/",
      clientSideLink: "https://github.com/arefinnuman/car-gurus-client-side",
      serverSideLink: "https://github.com/arefinnuman/car-gurus-server-side",
      features1: "Features like Admin, Buyer & Seller Dashboard.",
      features2:
        "Users can create accounts and log in to this website using their Google credentials.",
      features3:
        "Buyer can buy a car and seller can sell a car.Admin can add a new car, delete a car and make a new admin.",
    },
    {
      name: "Lens Expert",
      description: "A Photography Service website",
      img: LensExpert,
      liveLink: "https://client-side-446e4.web.app/",
      clientSideLink: "https://github.com/arefinnuman/lens-expert-client-side",
      serverSideLink: "https://github.com/arefinnuman/lens-expert-server-side",
      features1:
        "It is a website specializing in photographic services, and it offers a variety of photography services.",
      features2:
        "Users can create accounts and log in to this website using their Google credentials.",
      features3:
        "Users are able to place orders, check the order list they have created, and provide feedback on services.",
    },
    {
      name: "Creative Live",
      description: "An Educational Services Website",
      img: CreativeLive,
      liveLink: "https://creative-live-55922.web.app/",
      clientSideLink:
        "https://github.com/arefinnuman/creative-live-client-side",
      serverSideLink:
        "https://github.com/arefinnuman/creative-live-server-side",
      features1:
        "It is a website specializing in educational services, and it offers a variety of educational services.",
      features2:
        "Users can create accounts and log in to this website using their Google credentials.",
      features3:
        "Users are able to place orders, check the order list they have created, and provide feedback on services.",
    },
  ];
  return (
    <div className="mb-10">
      <div className="text-center mt-20">
        <h1 className="text-4xl font-bold">Some Recent Projects</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {projects.map((project) => (
          <div className="card w-96 shadow-2xl">
            <figure>
              <img src={project.img} alt="Project" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {project.name}
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p className="font-bold">{project.description}</p>
              <ul className="list-disc text-sm my-2">
                <li>{project.features1}</li>
                <li>{project.features2}</li>
                <li>{project.features3}</li>
              </ul>

              <div className="card-actions justify-end">
                <Link className="badge badge-outline" to={project.liveLink}>
                  Live Link
                </Link>
                <Link
                  className="badge badge-outline"
                  to={project.clientSideLink}
                >
                  Client Side
                </Link>
                <Link
                  className="badge badge-outline"
                  to={project.serverSideLink}
                >
                  Server Side Link
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
