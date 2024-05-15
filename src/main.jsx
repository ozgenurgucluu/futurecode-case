import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import BlogList from "./pages/BlogList";
import Contact from "./pages/Contact";
import BlogDetail from "./pages/BlogDetail";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <BlogList />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blog/:blogDetail",
        element: <BlogDetail />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
