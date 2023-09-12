// import React from "react";
import * as React from 'react';
// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
// import 'pure-react-carousel/dist/react-carousel.es.css';



export default function Greeting() {
  return (
    <div id="projectsContainer">
      <div id="Projects">
        <h3 className='title'>Please Enjoy My Creations ...</h3>
      </div>

      <div id="projectSection">
        <a
          href="https://keinance.github.io/horiseon-website-update/"
          className="btn btn-primary"
          id='btn1'
        >
          <div className="card1">
            <div className="card-body">
              <p className="card-text">
              <br>
              </br>
              <br>
              </br>
              <h5>Horiseon HTML</h5>
                Reworking HTML elements along with CSS to correct display for
                users.
              </p>
            </div>
          </div>
        </a>
        
        <a
          href="https://keinance.github.io/portfolio-creation/"
          className="btn btn-primary"
          id='btn2'
        >
          <div className="card2" >
            <div className="card-body">
              <p className="card-text">
              <br>
              </br>
              <br>
              </br>
              <h5 className="card-title">Portfolio Work in CSS</h5>
                Original Portfolio with HTML and CSS.</p>
            </div>
          </div>
        </a>

        <a
          href="https://Akemp24.github.io/Movie-app"
          className="btn btn-primary"
          id='btn3'
        >
          <div className="card3" >
            <div className="card-body">
              <p className="card-text">
              <br>
              </br>
              <br>
              </br>
              <h5 className="card-title">JAKD Movie App</h5>
                Movie generator that returns searched titles.
              </p>
            </div>
          </div>
        </a>

        <a
          href="https://car-bidz-d6af66a79b60.herokuapp.com/"
          className="btn btn-primary"
          id='btn4'
        >
          <div className="card4">
            <div className="card-body">
              <p className="card-text">
              <br>
              </br>
              <br>
              </br>
              <h5 className="card-title">Car Bidz</h5>
                Application allows users to view vehicles for sale. Users are
                able to make an account to create their own listing and place
                bids on other items for sale.
              </p>
            </div>
          </div>
        </a>



      </div>
    </div>
  );
}
