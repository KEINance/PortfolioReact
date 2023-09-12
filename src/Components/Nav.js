import React from 'react';
import { Link } from 'react-router-dom';
// differences between jsx and html 
//class becomes className
//img and input tags self closing 
//inline styles require double set of {{}} not ""

export default function Van() {
  // To set a state variable using `useState`, we give our variable a name of `greeting` and a function to update it.
  // We also provide an initial value
  return (

    <div id='links' >
       <ul>
        <li >
            <Link to='/'>This Is Me</Link>
        </li>
        <li>
            <Link to='/portfolio'>Portfolio</Link>
        </li>
        <li>
            <Link to='/contact'>Contact</Link>
        </li>
        <li>
            <Link to='/resume'>Resume</Link>
        </li>
       </ul>
    </div>
      );
}