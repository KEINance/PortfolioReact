import React from 'react';
import Email from '../Assets/gmail.png'
import Github from '../Assets/github.png'
import LinkedIn from '../Assets/linkedin.png'

export default function Footer() {
  // To set a state variable using `useState`, we give our variable a name of `greeting` and a function to update it.
  // We also provide an initial value
  return (
    <div id='footer'>
        <a href='https://github.com/KEINance'><img src={Github}/></a>
        <a href='https://mail.google.com/mail/?view=cm&source=mailto&to=keinance2@gmail.com'><img src={Email}/></a>
        {/* when LINKEDIn finished add link */}
        <a href='https://www.linkedin.com/feed/'><img src={LinkedIn}/></a>
    </div>
  );
}


