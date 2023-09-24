import React from "react";
import * as ReactDOM from 'react-dom';


export default function EmailCard() {

    function Button(props){
    function handleSubmit(){
      console.log("pleeeease work");
    }
    return(
      <input id={props.ID} type="submit" value="Submit" onClick='#' />
    );
  }


  
  function Input(props){
    function Checker(event){
      let value = event.target.value;
      // console.log(value);
      let i = props.ID.toString();
      if(i == "name"){
        var re =  /^[A-Za-z]+$/;
        let ans =  re.test(value);
        if(ans === false) {
            const message = ("Characters not valid! Please, try again.");
            error.textContent = message;
        } else {
            error.textContent = '';
        }
        
      }
      else if(i == "phone"){
        var re =  /^[0-9]+$/;
        let ans =  re.test(value);
        if(value.length < 10 || value.length >10 || ans == false) {
            const message = ("Phone number not valid! Please, try again.");
            error.textContent = message;
        } else {
            error.textContent = '';
        }

      }
      else if(i == "email"){
        var re =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let ans =  re.test(value);
        if (ans == false) {
            const message = ("E~mail is not valid! Please, try again.");
            error.textContent = message;
        } else {
            error.textContent = '';
        }
      }
    }
    return(
      <input autoComplete="off" type={props.type} placeholder={props.hint} id={props.ID} onChange={Checker}/>
    );
  }
  
  function Form(props){
    return(
      <div id='wholeEmailForm' className="main">
        <div className="main-body">
             <input className="contact" type="text" value="(+00) 12345 67890" readOnly/>
          </div>
          <br>
          </br>
        <form className="title" onSubmit={this.handleSubmit}>
          <h1>Don't be afraid to reach out!</h1>     <br/>
          
          <div>
            <label>Enter your name here:</label>     <br/>
            <Input hint="Enter your name" type="text" id="name"/> 
          </div>
          
          <div className="form-element">
            <label>Enter your E~mail here:</label>  <br/>
            <Input hint="Enter your Email ID" type="email" id="email"/> 
          </div>
          
          <div className="form-element">
            <label>Enter your phone here:</label> <br/>
            <Input hint="Phone Number" type="text" id="phone"/>
          </div>
          
          <div className="form-element">
            <label>Let me know what you are contacting for!</label> <br/>
            <textarea id="msg" rows="5" placeholder="Please, provide a brief description of your wants...">
              </textarea> 
          </div>
          
          <Button id="submit" />
          </form>
        </div>
      
    );
  }
  ReactDOM.render(
    <Form/>,
    document.getElementById('root')
  );
}