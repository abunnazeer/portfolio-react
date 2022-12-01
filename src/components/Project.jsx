import React from "react";

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

        <div class="project__box">
          <a href="#">
            <img src="assets/img/projects/hosting-page.png" alt="a" />
            <div class="overlay">
              <h2 class="project__title">Core-working Space</h2>
            </div>
          </a>
        </div>
        <div class="project__box">
          <a href="#">
            <img src="assets/img/projects/ecommerece.png" alt="a" />
            <div class="overlay">
              <h2 class="project__title">Core-working Space</h2>
            </div>
          </a>
        </div>
        <div class="project__box">
          <a href="#">
            <img src="assets/img/projects/core-working.jpg" alt="a" />
            <div class="overlay">
              <h2 class="project__title">Core-working Space</h2>
            </div>
          </a>
        </div>
      </div>
      <a href="#" class="custom__btn">
        View More
      </a>
    </section>
  );
}

export default Project;
