import React from "react";
function Experience() {
  return (
    <section className="skills__experience">
      <div className="about__i">
        <h1 className="title">About Me</h1>
        <p id="ex-desc">
          A professional front-end developer with experience in developing
          enterprise web and mobile applications and passionate about building
          cutting edge technology solution
        </p>
      </div>

      <div className="working-experience-box">
        <h1 className="title">Working Experience</h1>
        <div className="working__experience">
          <div className="year__activities">2019 - Present</div>
          <div className="job__position">
            <h3>Front End Developer</h3>
            <p>Cerebro System limited</p>
          </div>
        </div>
        <div className="working__experience">
          <div className="year__activities">2019 - Present</div>
          <div className="job__position">
            <h3>Web Developer</h3>
            <p>Inception Technology Limited</p>
          </div>
        </div>
        <div className="working__experience">
          <div className="year__activities">2019 - Present</div>
          <div className="job__position">
            <h3>Junior Mobile App Developer</h3>
            <p>Vs Cloud Technology limited</p>
          </div>
        </div>
        <div className="working__experience">
          <div className="year__activities">2019 - Present</div>
          <div className="job__position">
            <h3>Front End Developer</h3>
            <p>Self Employed</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Experience;
