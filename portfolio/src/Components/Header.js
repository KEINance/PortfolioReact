import React from 'react';
import Nav from './Nav';
// differences between jsx and html 
//class becomes className
//img and input tags self closing 
//inline styles require double set of {{}} not ""

export default function Header() {
  // To set a state variable using `useState`, we give our variable a name of `greeting` and a function to update it.
  // We also provide an initial value
  return (
    <div>
        <h2>Katie Eliza Isabel Nance</h2>
        <Nav></Nav>
    </div>
  );
}

