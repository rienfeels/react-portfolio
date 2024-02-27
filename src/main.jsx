import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "../src/components/Footer.jsx";
import App from "./App.jsx";
import Header from "../src/components/Header.jsx";

const main = {};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Header /> */}
    <App />
    <Footer />
  </React.StrictMode>
);
export default main;
