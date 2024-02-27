import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router, // Change BrowserRouter to Router
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Header from "./components/Header";
import About from "./routes/About";
import Projects from "./routes/Project";
import Contact from "./routes/Contact";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./components/Layout";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/about", element: <About /> },
      { path: "/projects", element: <Projects /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
