import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";

import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Skills from "./components/skills/Skills";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/skills", element: <Skills /> },
      { path: "/projects", element: <Projects /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
