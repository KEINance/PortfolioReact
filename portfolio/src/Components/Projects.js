// import React from "react";
import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


export default function Greeting() {
  return (
    <div id="projectsContainer">
      <div id="Projects">
        <h3 className='title'>Please Enjoy My Creations ...</h3>
      </div>
<Box sx={{ flexGrow: 1 }}>
  <Grid container spacing={{ xs:2, md:3 }} columns={{ xs: 4, sm: 8, mg: 12}}>
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

      </Grid>
      </Box>
    </div>
  );
}
