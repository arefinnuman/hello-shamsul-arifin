import React from "react";
import { useLoaderData } from "react-router-dom";

const ProjectDetails = () => {
  const project = useLoaderData();
  const {
    name,
    liveLink,
    clientSideLink,
    serverSideLink,
    features1,
    features2,
    features3,
    image2,
    image3,
    image4,
    about,
    description,
  } = project;
  console.log();
  return (
    <div>
      <section className="p-4 lg:p-8">
        <div className="container mx-auto space-y-12">
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <img src={image2} alt="" className="h-80  aspect-video" />
            <div className="flex flex-col justify-center flex-1 p-6 ">
              <h3 className="text-3xl font-bold">{name}</h3>
              <h3 className="text-xl my-6 font-bold">{description}</h3>
              <div className="flex">
                <a
                  className="badge badge-outline mr-2"
                  href={liveLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Link
                </a>
                <a
                  className="badge badge-outline mr-2"
                  href={clientSideLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Client Side
                </a>
                <a
                  className="badge badge-outline"
                  href={serverSideLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Server Side Link
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
            <img src={image3} alt="" className="h-80  aspect-video" />
            <div className="flex flex-col justify-center flex-1 p-6 ">
              <span className="text-xs uppercase "></span>
              <h3 className="text-3xl font-bold">{description}</h3>
              <p className="my-6 ">{about}</p>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <img src={image4} alt="" className="h-80  aspect-video" />
            <div className="flex flex-col justify-center flex-1 p-6 ">
              <span className="text-xs uppercase "></span>
              <h3 className="text-3xl font-bold">Features</h3>
              <ul className="list-disc m-6">
                <li>{features1}</li>
                <li>{features2}</li>
                <li>{features3}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;
