import { useState } from 'react';
import ReactDOM from 'react-dom/client';


export default function EmailCard() {
    
    <form className="title" onSubmit='#'>
      <div id='wholeEmailForm' className="main">
        <div className="main-body">
             <input className="contact" type="text" value="(+00) 12345 67890" readOnly/>
          </div>
          <br>
          </br>
        <form className="title" onSubmit='#'>
          <h1>Don't be afraid to reach out!</h1>     <br/>
          
          <div>
            <label>Enter your name here:</label>     <br/>
            <input hint="Enter your name" type="text" id="name"/> 
          </div>
          
          <div className="form-element">
            <label>Enter your E~mail here:</label>  <br/>
            <input hint="Enter your Email" type="email" id="email"/> 
          </div>
          
          <div className="form-element">
            <label>Enter your phone here:</label> <br/>
            <input hint="Telephone or Cellphone" type="text" id="phone"/>
          </div>
          
          <div className="form-element">
            <label>Let me know what you are contacting for!</label> <br/>
            <textarea id="msg" rows="5" placeholder="Please, provide a brief description of your wants...">
              </textarea> 
          </div>
          
          <button ID="submit" />
          </form>
        </div>
    </form>
  
//   return (
//     <span className="App"> 
//         <button onClick='#'>This is your presented error.</button>
//         {errorMessage && <span className="error"> {error}</span>}
//     </span>
//   )
  ReactDOM.render(
    // <Form/>,
    document.getElementById('root')
  )
};
