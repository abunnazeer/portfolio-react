import React from "react";

function Client() {
  return (
    <section className="clients__container">
      <div className="client__text">
        <h1 className="title">Clients</h1>
        <p>
          I design with our clients as much as I design for them. I am proud to
          have contributed to the success in there business
        </p>
      </div>
      <div className="clients__box">
        <div className="client__box">
          <img src="assets/img/clients/walwanne-logo.png" alt="a" />
        </div>
        <div className="client__box">
          <img src="assets/img/clients/kanem.jpg" alt="a" />
        </div>
        <div className="client__box">
          <img src="assets/img/clients/Inception-logo.png" alt="a" />
        </div>
        <div className="client__box">
          <img src="assets/img/clients/vscloud.png" alt="a" />
        </div>
        <div className="client__box">
          <img src="assets/img/clients/multiaid.png" alt="a" />
        </div>
        <div className="client__box">
          <img src="assets/img/clients/ruwasalogo.png" alt="a" />
        </div>
      </div>
      <div>
        <a href="#" class="custom__btn">
          See what they've said
        </a>
      </div>
    </section>
  );
}

export default Client;
