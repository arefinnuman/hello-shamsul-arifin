import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../../Layout/Root/Root";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home";

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
        path: "blogs",
        element: <Blogs />,
      },
    ],
  },
]);
