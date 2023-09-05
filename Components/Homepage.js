import React, { useState } from 'react';

export default function Homepage() {

  const [homepage, setHomepage] = useState('Welcome! React state is awesome!');

  return (


// opening page with links and about first there
<h1>
Greetings and salutations from Katie Eliza Isabel Nance
</h1>

<div id="View"><h2>A View of Myself</h2></div>
<p>
    Starting out as an entry-level coder and aspiring developer; I have 
    started work through: HTML, CSS, JavaScript, and more through the 
    BootCamp at UNC-Charlotte. I am progressing my working knowledge of 
    multiple languages past the directive of the BootCamp, also by 
    continuing to strengthen my abilities.
</p>
<p>
    I am excited to step out into the coding and developing fields to contribute my abilities
    and current working knowledge towards larger and more complicated projects.
</p>

  );
}
