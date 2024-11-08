import React from "react";
import ReactDOM from 'react-dom/client';

//Basic Rendering

/*const Sample=()=>{
  return(
    <div>
       <form>
        <label>Enter your name:</label>
        <input type="text" name="name" />
        <button type="submit">Submit</button>
       </form>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//Dynamic Rendering

/*const App=()=>{
  const username="mohamed";
  return(
    <div>
      <h1>Hello {username}</h1>
      <p>TodayDate::{new Date().toLocaleDateString()}</p>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>) */ //rendering the App component

//React List

/*const Myelem=()=>{
  return(

    <div>
      <h1>My List</h1>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>

  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Myelem/>) //rendering the Myelem component*/

//Conditional Rendering

/*const x=10;
let text="";
if(x>=10){
  text="x is greater than 10";
  }else{
    text="x is less than or equal to 10";

    }
    const App=()=>{
      return(
        <div>
          <h1>{text}</h1>
        </div>
        )
        }
        const r1=ReactDOM.createRoot(document.getElementById('root'))
        r1.render(<App/>) //rendering the App component*/

  //Importing the file

  /*import './index.css';

  const App=()=>{
    return(
       <div>
         <h1>Welcome to the Heading-1</h1>
       </div>
    )
  }
  const r1=ReactDOM.createRoot(document.getElementById('root'))
  r1.render(<App/>)*/

//class Component

/*class Sample extends React.Component
{
   render(){
    return(
      <div>
        <h1>Hello, World!</h1>
      </div>
      )
      }
    }
    const r1=ReactDOM.createRoot(document.getElementById('root'))
    r1.render(<Sample/>) //rendering the Sample component*/

//Function Component

function Sample()
{
  return(
     <div>
       <h1>Welcome to the function Component</h1>
     </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>) //rendering the Sample component