import React from 'react';
// import wave from '../Assets/wave'

export default function Homepage() {

  return (
// opening page with links to contact, projects, and 
//about first on opening
<div>
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

<img
            class="img"
            src="../Assets/wave"
            alt="avatarWave"
            width="200"
            height="200"
          />


{/* <img src={wave} alt='avatarWave'/> */}
</div>
  );
}
