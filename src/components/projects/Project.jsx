import React from "react";
import Card from "./Card";
import projects from "./data";

function Project() {
  return (
    <section className="latest__projects">
      <h1 class="title">Latest Projects</h1>
      <div class="project__container">
        <div class="project__box">
          <a href="#">
            <img src="assets/img/projects/core-working.jpg" alt="a" />
            <div class="overlay">
              <h2 class="project__title">Core-working Space</h2>
            </div>
          </a>
        </div>
        {projects.map(item => {
          return <Card img={item.imgPath} name={item.name} />;
        })}
      </div>
      <a href="#" class="custom__btn">
        View More
      </a>
    </section>
  );
}

export default Project;
