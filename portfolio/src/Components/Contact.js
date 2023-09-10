import React from "react";
import standPoint from '../Assets/standPoint.png'

export default function Greeting() {
  // To set a state variable using `useState`, we give our variable a name of `greeting` and a function to update it.
  // We also provide an initial value
  return (
    <div>
      <div id="Communications">
        <h4>Communications</h4>
      </div>
      <section id="contactSection">
        <div id="contacts">
          <a href="https://mail.google.com/mail/?view=cm&source=mailto&to=keinance2@gmail.com">
            Keinance2@gmail.com
          </a>
          <a href="https://github.com/KEINance">GitHub</a>
        </div>



        <img id='contactImg' src={standPoint} alt='avatarWave'/>
      </section>
    </div>
  );
}
