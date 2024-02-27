import React from "react";
import { useLoaderData, Link } from "react-router-dom";

// export async function loader() {
//   const url = "http://localhost:5176/about";
//   const data = await fetch(url).then((response) => response.json());

//   return { data };
// }

const About = () => {
  return (
    <section className="content-card" id="About">
      <h2>About Me</h2>
      <p>
        My name is Ryan Fields, I am a FullStack Web Developer from Greenville,
        South Carolina. Recently, I graduated from Carolina Code School in their
        Winter '24 cohort where we have learned HTML, CSS, Python, JavaScript,
        SQL, and React.
      </p>
    </section>
  );
};
export default About;
