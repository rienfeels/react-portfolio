import React from "react";

const Projects = () => {
  return (
    <section className="content-card" id="projects">
      <h2>Projects</h2>
      <div className="project">
        <h3>Garden Simulator</h3>
        <p>
          The garden simulator is designed to emulate a dynamic garden ecosystem
          through various classes. The key classes include Tree, which reduces
          water loss by 2; Gnome, introducing a 5% chance of rain; and
          Woodchuck, which creates a 5% chance of a Tree disappearing. These
          classes are managed within the Garden class, maintaining separate
          lists for each instance. The main while loop orchestrates the
          simulation, incorporating rain, Woodchuck activities, and the
          possibility of earning a new Tree or Gnome every 10th turn. The
          simulation continues until reaching 10 Tree instances. Additional
          classes include FruitTree, a subclass of Tree, increasing its fruit
          attribute when the water level reaches 100, and Squirrel, which
          introduces a 5% chance of decreasing fruit levels by 1. The simulation
          concludes if FruitTree instances produce 10 fruits. Random events are
          determined using the random module, calculating the chances of various
          occurrences during each turn, thereby creating a dynamic and evolving
          garden environment.
        </p>
      </div>
    </section>
  );
};

export default Projects;
