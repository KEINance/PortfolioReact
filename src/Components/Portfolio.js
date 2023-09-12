import React from "react";
import Projects from "./Projects";
import cool from "../Assets/cool.png";

export default function Portfolio() {
  // To set a state variable using `useState`, we give our variable a name of `greeting` and a function to update it.
  // We also provide an initial value
  return (
    <div>
      <img id="portfolioImg" src={cool} alt="avatarWithSunnies" />
      <div>
        <Projects></Projects>
      </div>
    </div>
  );
}
