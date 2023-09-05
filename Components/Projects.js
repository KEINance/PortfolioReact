// First we import `useState` with React so that we can take advantage of the hook
import React, { useState } from 'react';

export default function Greeting() {
  // To set a state variable using `useState`, we give our variable a name of `greeting` and a function to update it.
  // We also provide an initial value
  const [greeting, setGreeting] = useState('Welcome! React state is awesome!');

  return (
    <div class="container-0">
        <div id="Projects"><h3>Projects</h3></div>
        <div class="project-flex">
            <a href="https://keinance.github.io/horiseon-website-update/">Horiseon Work in HTML<img class="project-img" src="./assets/HTMLproject.png" alt="HTML project" width="200" height="200">
            </a>
            <a href="https://keinance.github.io/portfolio-creation/">Portfolio Work in CSS<img class="project-img" src="./assets/CSSproject.png" alt="CSS project" width="200" height="200">
            </a>
            <a href="https://Akemp24.github.io/Movie-app">JAKD Movie App<img class="project-img" src="./assets/READMEscreenshot.png" alt="CSS project" width="200" height="200">
            </a>
            <a href="https://car-bidz-d6af66a79b60.herokuapp.com/">Car Bidz<img class="project-img" src="./assets/car-bidz.png" alt="CSS project" width="200" height="200">
            </a>
            </div>
        </div>
  )}