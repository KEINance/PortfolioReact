import React from "react";

export default function Resume() {
  // To set a state variable using `useState`, we give our variable a name of `greeting` and a function to update it.
  // We also provide an initial value
  return (
    <div>
      <h2 id="title">(336) 459 - 9385 Keinance2@gmail.com Raleigh, NC 27613</h2>

      <div id="skillEdu">
        <div id="education" className="container">
          <h3>Education</h3>
          <span>❖2012 GED: Rockingham Community College</span>
          <span>
            ❖2015 Associate of Fine Arts: Rockingham Community College
          </span>
          <span>❖2016-2017 East Carolina University</span>
          <span>❖2017-2018 Guilford Technical Community College</span>
          <span>❖2023 UNC Charlotte Full-Stack Bootcamp</span>
        </div>
        {/* </div>

<div> */}
        <div id="history" className="container">
          <h3>Work History</h3>

          <span>❖Raleigh Dental Arts –Raleigh, NC 2021 – Present</span>
          <br>
          </br>
          <span>
            ❖A Brighter Smile Dental Care –Shreveport, LA 2021
          </span>
          <br>
          </br>
          <span>
            ❖Ann Taylor Factory/Loft –Mebane, NC/Shreveport, LA Sales Lead 2019 - 2021
          </span>
          <br>
          </br>
          <span>
            ❖Skechers –Bossier City, LA Lead Floor Sales Associate 2019
          </span>
          <br>
          </br>
          <span>
            ❖Shoe Show -Eden, NC Cashier/Stocker/Sales Associate 2015 - 2016
          </span>
          <br>
          </br>
          <span>
            ❖Rockingham Community College -Wentworth, NC Work Study/Assistant 2014 - 2015
          </span>

          <span id="ref">References Upon Request</span>
  
        </div>

        <div id="skill" className="container">
        <h3>Skills</h3>
          <div className="right">
            <span>❖ Adaptive team player</span>
            <span>❖ Attention to detail</span>
            <span>❖ Diligent</span>
            <span>❖ Quick learner</span>
            <span>❖ Organizational Skills</span>
            <span>❖ HTML</span>
            <span>❖ Tailwind CSS</span>
            <span>❖ JavaScript</span>
            <span>❖ React</span>
          </div>
          <div className="left">
            <span>❖ SQL</span>
            <span>❖ Bootstrap</span>
            <span>❖ VS coder</span>
            <span>❖ GitHub</span>
            <span>❖ Heroku </span>
            <span>❖ Node.js</span>
            <span>❖ Express</span>
            <span>❖ Sequalize</span>
            <span>❖ MongoDB</span>
          </div>
        </div>
      </div>

    </div>
  );
}
