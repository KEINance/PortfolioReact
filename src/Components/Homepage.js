import React from 'react';
import wave from '../Assets/wave.png'

export default function Homepage() {

  return (
// opening page with links to contact, projects, and 
//about first on opening
<div id='infoCards'>
<div id="View"><h2 className='sideColumn'>A View of Myself</h2></div>
<h1 id='firstCard'>
<br>
    </br>
    <br>
    </br>
    Salutations
</h1>
{/* be one card that is clickable use zindex */}
{/* another clickable card */}
<div id='secondCard'>
    <h2 className='underline'>The Beginnings</h2>
    <br>
    </br>
    <br>
    </br>
    Starting out as an entry-level coder and aspiring developer; I have 
    started work through: HTML, CSS, JavaScript, and more through the 
    BootCamp at UNC-Charlotte. I am progressing my working knowledge of 
    multiple languages past the directive of the BootCamp, also by 
    continuing to strengthen my abilities.
</div>
{/* another clickable card */}
<div id='thirdCard'>
    <h2 className='underline'>Starting out</h2>
    <br>
    </br>
    <br>
    </br>
    I am excited to step out into the coding and developing fields to contribute my abilities
    and current working knowledge towards larger and more complicated projects.
</div>
{/* another clickable card */}
<div id='fourthCard'> 
  <h2 className='underline'>Your Time Is Appreciated</h2>
  <br>
    </br>
    <br>
    </br>
  Thank you for reading through, I hope viewing my projects shows off some of the attention
  to detail and creativness that I apply to my works. Please, enjoy! Thank you for your consideration.
</div>
<img id='homepageImg' src={wave} alt='avatarWave'/>
</div>
  );
}
