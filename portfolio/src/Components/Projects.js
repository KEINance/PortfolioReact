import React from "react";

export default function Greeting() {
  return (
    <div class="container-0">
      <div id="Projects">
        <h3>Projects</h3>
      </div>
      <div class="project-flex">
        <a href="https://keinance.github.io/horiseon-website-update/">
          Horiseon Work in HTML
          <img
            class="project-img"
            src="./assets/HTMLproject.png"
            alt="HTML project"
            width="200"
            height="200"
          />
        </a>
        <a href="https://keinance.github.io/portfolio-creation/">
          Portfolio Work in CSS
          <img
            class="project-img"
            src="./assets/CSSproject.png"
            alt="CSS project"
            width="200"
            height="200"
          />
        </a>
        <a href="https://Akemp24.github.io/Movie-app">
          JAKD Movie App
          <img
            class="project-img"
            src="./assets/READMEscreenshot.png"
            alt="CSS project"
            width="200"
            height="200"
          />
        </a>
        <a href="https://car-bidz-d6af66a79b60.herokuapp.com/">
          Car Bidz
          <img
            class="project-img"
            src="./assets/car-bidz.png"
            alt="CSS project"
            width="200"
            height="200"
          />
        </a>
      </div>

      <div className="card" style={{ width: "18rem" }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}
