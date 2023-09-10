import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  // To set a state variable using `useState`, we give our variable a name of `greeting` and a function to update it.
  // We also provide an initial value
  return (
    <div>
       <ul>
        <li>
            <Link to='/'>About Me</Link>
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

