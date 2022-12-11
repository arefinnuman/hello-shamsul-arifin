import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../../Layout/Root/Root";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home";
import ProjectDetails from "../../Pages/Home/ProjectDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "home/projects/:id",
        element: <ProjectDetails />,
        loader: ({ params }) =>
          fetch(
            `https://portfolio-server-mu-ebon.vercel.app/projects/${params.id}}`
          ),
      },
      {
        path: "/projects/:id",
        element: <ProjectDetails />,
        loader: ({ params }) =>
          fetch(
            `https://portfolio-server-mu-ebon.vercel.app/projects/${params.id}`
          ),
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
    ],
  },
]);
