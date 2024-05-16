// imdivort React from "react";
import * as React from 'react';
// imdivort { Carouseldivrovider, Slider, Slide, ButtonBack, ButtonNext } from 'divure-react-carousel';
// imdivort 'divure-react-carousel/dist/react-carousel.es.css';



export default function Greeting() {
  return (
    <div id="projectsContainer">
      <div id="projects">
        <h3 className='title'>Please Enjoy My Creations ...</h3>
      </div>

      <div id="projectSection" className='container row col-8'>
        <a
          href="https://keinance.github.io/horiseon-website-update/"
          className="btn btn-primary"
          id='btn1'
        >
          <div className="card1">
            <div className="card-body">
              <div className="card-text">
              <br>
              </br>
              <br>
              </br>
              <h5>Horiseon HTML</h5>
                Reworking HTML elements along with CSS to correct display for
                users.
              </div>
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
              <div className="card-text">
              <br>
              </br>
              <br>
              </br>
              <h5 className="card-title">Portfolio Work in CSS</h5>
                Original portfolio with HTML and CSS.</div>
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
              <div className="card-text">
              <br>
              </br>
              <br>
              </br>
              <h5 className="card-title">JAKD Movie App</h5>
                Movie generator that returns searched titles.
              </div>
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
              <div className="card-text">
              <br>
              </br>
              <br>
              </br>
              <h5 className="card-title">Car Bidz</h5>
                Application allows users to view vehicles for sale. Users are
                able to make an account to create their own listing and place
                bids on other items for sale.
              </div>
            </div>
          </div>
        </a>

        <a
          href="https://keinance.github.io/Code-Quiz/"
          className="btn btn-primary"
          id='btn5'
        >
          <div className="card5">
            <div className="card-body">
              <div className="card-text">
              <br>
              </br>
              <br>
              </br>
              <h5 className="card-title">Code Quiz</h5>
                Application that iterates through questions with answers
                allows user to creat score holdings and save scoring.
              </div>
            </div>
          </div>
        </a>

        
        <a
          href="https://keinance.github.io/password-generator/"
          className="btn btn-primary"
          id='btn6'
        >
          <div className="card6">
            <div className="card-body">
              <div className="card-text">
              <br>
              </br>
              <br>
              </br>
              <h5 className="card-title">Password Generator</h5>
                Application lets users generate passwords at will
                multiple times.
              </div>
            </div>
          </div>
        </a>

        
        <a
          href="https://keinance.github.io/WorkDayScheduler/"
          className="btn btn-primary"
          id='btn7'
        >
          <div className="card7">
            <div className="card-body">
              <div className="card-text">
              <br>
              </br>
              <br>
              </br>
              <h5 className="card-title">Work-Day Scheduler</h5>
                Application shows a schedule for users that is active 
                through the day showing the hourly time of day, also 
                colour coded time blocks for user ease.
              </div>
            </div>
          </div>
        </a>

        <a
          href="https://fitness-flavors-6c56562cb291.herokuapp.com/"
          className="btn btn-primary"
          id='btn8'
        >
          <div className="card8">
            <div className="card-body">
              <div className="card-text">
              <br>
              </br>
              <br>
              </br>
              <h5 className="card-title">Fitness Flavors</h5>
                Application allows users to seacrh and save exercises 
                for their fitness journey!
              </div>
            </div>
          </div>
        </a>

        <a
          href="https://texteditor2-730a4f7e3868.herokuapp.com/"
          className="btn btn-primary"
          id='btn9'
        >
          <div className="card9">
            <div className="card-body">
              <div className="card-text">
              <br>
              </br>
              <br>
              </br>
              <h5 className="card-title">Text Editor</h5>
                Application allows UI for adjusting text at will!
              </div>
            </div>
          </div>
        </a>

        <a
          href="https://drive.google.com/file/d/1lBIX5aagi6Y9wszbwRz72RdcRN7-vGWD/view"
          className="btn btn-primary"
          id='btn10'
        >
          <div className="card10">
            <div className="card-body">
              <div className="card-text">
              <br>
              </br>
              <br>
              </br>
              <h5 className="card-title">Employee Tracker</h5>
                Server side application for companies to track their employees database and more!
              </div>
            </div>
          </div>
        </a>

        {/* <a
          href=""
          className="btn btn-primary"
          id='btn11'
        >
          <div className="card11">
            <div className="card-body">
              <div className="card-text">
              <br>
              </br>
              <br>
              </br>
              <h5 className="card-title">Employee Tracker</h5>
                Server side application for companies to track their employees database and more!
              </div>
            </div>
          </div>
        </a> */}

      </div>
    </div>
  );
}
