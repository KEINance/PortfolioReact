// First we import `useState` with React so that we can take advantage of the hook
import React, { useState } from 'react';

export default function Greeting() {
  // To set a state variable using `useState`, we give our variable a name of `greeting` and a function to update it.
  // We also provide an initial value
  const [greeting, setGreeting] = useState('Welcome! React state is awesome!');

  return (
<div id="Communications"><h4>Communications</h4></div>
<section class="container-1"> 
    <div id="contacts">
        <a href="https://mail.google.com/mail/?view=cm&source=mailto&to=keinance2@gmail.com">Keinance2@gmail.com</a>
        <a href="https://github.com/KEINance">GitHub</a>
    </div>
  );
}


