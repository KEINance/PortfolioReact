import React from "react";
import standPoint from "../Assets/standPoint.png";
import EmailForm from "./EmailForm";

export default function Greeting() {
  // To set a state variable using `useState`, we give our variable a name of `greeting` and a function to update it.
  // We also provide an initial value
  return (
    <div>
      <div>
        <h4 id="Communications">Looking Forward To Hearing From You!</h4>
      </div>

      {/* <form id="wholeEmailForm" onSubmit="#">
        <center>
          <div className="contactForm">
            <br></br>
            <form id="textFix" className="titleForm" onSubmit="#">
              <h1 className="formHeader">Don't be afraid to reach out!</h1>
              <div>
                <p>Enter your name here:</p>
                <input hint="Enter your name" type="text" id="nameForm" />
                <br></br>
                <p>Enter your E~mail here:</p>
                <input hint="Enter your Email" type="email" id="email" />
                <br></br>
                <p>Enter your phone here:</p>
                <input hint="Telephone or Cellphone" type="text" id="phone" />
                <br></br>
                <p>Let me know what you are contacting for!</p>
                <textarea
                  id="msg"
                  rows="5"
                  placeholder="Please, provide a brief description of your wants..."
                ></textarea>
              </div>

              <button id="submit">Submit</button> 
            </form>
          </div>
        </center>
      </form> */}

      <img id="contactImg" src={standPoint} alt="avatarWave" />
      <section id="contactSection">
        <div id="contacts">
          <a
            href="https://mail.google.com/mail/?view=cm&source=mailto&to=keinance2@gmail.com"
            className="btn btn-primary"
            id="btnEmail"
          >
            Let's chat over Gmail!
          </a>
          <a href="https://github.com/KEINance" className="btn" id="btnGithub">
            Let's chat over GitHub!
          </a>

          {/* linkedIn contact coming trying not to alert old job of my leaving */}
          {/* so I have not updated or added things to my linkedIn profile */}
          <a
            href="https://www.linkedin.com/feed/"
            className="btn"
            id="linkedInBtn"
          >
            Let's chat over LinkedIn!
          </a>
        </div>
      </section>
    </div>
  );
}
