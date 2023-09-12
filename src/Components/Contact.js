import React from "react";
import standPoint from "../Assets/standPoint.png";

export default function Greeting() {
  // To set a state variable using `useState`, we give our variable a name of `greeting` and a function to update it.
  // We also provide an initial value
  return (
    <div>
      <div>
        <h4 id="Communications">Looking Forward To Hearing From You!</h4>
      </div>
      <section id="contactSection">
        <div id="contacts">
          <a
            href="https://mail.google.com/mail/?view=cm&source=mailto&to=keinance2@gmail.com"
            className="btn btn-primary"
            id="btnEmail"
          >
            Let's chat over Gmail!
          </a>
          <a
            href="https://github.com/KEINance"
            className="btn"
            id="btnGithub"
          >
            Let's chat over GitHub!
          </a>
        </div>

        <img id="contactImg" src={standPoint} alt="avatarWave" />
      </section>
    </div>
  );
}
