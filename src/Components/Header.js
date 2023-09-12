import React from "react";
import { Link } from "react-router-dom";

// differences between jsx and html
//class becomes className
//img and input tags self closing
//inline styles require double set of {{}} not ""

export default function Header() {
  // To set a state variable using `useState`, we give our variable a name of `greeting` and a function to update it.
  // We also provide an initial value
  return (
    <div id="navBar">
      <h2 id="name">Katie Eliza Isabel Nance</h2>

      <div>
        <ul >
          <li>
            <Link to="/" id="links" className="text-decoration-none">Home</Link>
          </li>
          <li>
            <Link to="/portfolio" id="links" className="text-decoration-none">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact" id="links" className="text-decoration-none">Contact</Link>
          </li>
          <li>
            <Link to="/resume" id="links" className="text-decoration-none">Resume</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};