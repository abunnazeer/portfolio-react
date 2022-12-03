import React from "react";
function Card(props) {
  return (
    <div class="project__box">
      <a href="#">
        <img src={props.img} alt="a" />
        <div class="overlay">
          <h2 class="project__title">{props.name}</h2>
        </div>
      </a>
    </div>
  );
}

export default Card;
