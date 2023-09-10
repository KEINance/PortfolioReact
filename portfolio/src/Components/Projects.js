import React from "react";

export default function Greeting() {
  return (
    <div id="projectsContainer">
      <div id="Projects">
        <h3>Projects</h3>
      </div>

      <div id="projectSection">

      <div className="card" style={{ width: "18rem" }}>
        <img src="../Assets/HTMLproject.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Horiseon HTML</h5>
          <p className="card-text">
            Reworking HTML elements along with CSS to correct display for users.
          </p>
          <a href="https://keinance.github.io/horiseon-website-update/" className="btn btn-primary">
            Select to view Project
          </a>
        </div>
      </div>

      <div className="card" style={{ width: "18rem" }}>
        <img src="../Assets/CSSproject.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Portfolio Work in CSS</h5>
          <p className="card-text">
            Original Portfolio with HTML and CSS.
          </p>
          <a href="https://keinance.github.io/portfolio-creation/" className="btn btn-primary">
            Select to view Project
          </a>
        </div>
      </div>

      <div className="card" style={{ width: "18rem" }}>
        <img src="../Assets/READMEscreenshot.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">JAKD Movie App</h5>
          <p className="card-text">
            Movie generator that returns searched titles.
          </p>
          <a href="https://Akemp24.github.io/Movie-app" className="btn btn-primary">
            Select to view Project
          </a>
        </div>
      </div>
      
      <div className="card" style={{ width: "18rem" }}>
        <img src=".../Assets/car-bidz.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Car Bidz</h5>
          <p className="card-text">
            Application allows users to view vehicles for sale. Users are able to make an account to create their
            own listing and place bids on other items for sale.
          </p>
          <a href="https://car-bidz-d6af66a79b60.herokuapp.com/" className="btn btn-primary">
            Select to view Project
          </a>
        </div>
      </div>

  </div>
</div>
  );
}
