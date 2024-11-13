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

/*function Sample()
{
  return(
     <div>
       <h1>Welcome to the function Component</h1>
     </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>) //rendering the Sample component*/

//Props using function to passing arguments

/*function Sample(props)
{
    return(
      <>
      <h1>Hello{props.name}</h1>
      <p>{props.age}</p>
      </>
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample name="mohamed" age="25"/>) //rendering the Sample component*/

//React component in Component

/*function Component1()
{
  return(
    <div>
      <h1>Welcome</h1>
    </div>
  )
}
function Component2()
{
  return(
    <div>
      <h1>Component2</h1>
      <Component1/>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Component2/>) //rendering the Component2 component*/

//constructor using super

/*class Sample extends React.Component
{
   constructor()
   {
      super();
      this.state={name:"azar",age:34}
   }
   render()
   {
    return(
      <>
         <h1>Hello{this.state.name}</h1>

         <p>{this.state.age}</p>
      </>
      )
   }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>) //rendering the Sample component*/

//constructor using props

/*class Sample extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={name:this.props.name,age:this.props.age}
  }
  render()
  {
    return(
      <>
       <h1>Hello{this.state.name}</h1>
       <p>{this.state.age}</p>
      </>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample name="azar" age={34}/>) //rendering the Sample component*/

//React State

/*class Sample extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={
        brand:"Ford",
        model:"Mustang",
        year:2022,
        color:"red"
    }
  }
  render()
  {
    return(
      <>
       <h1>Brand:{this.state.brand}</h1>
       <h1>Model:{this.state.model}</h1>
       <h1>Year:{this.state.year}</h1>
       <h1>Color:{this.state.color}</h1>
      </>
    )
  }
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//Changing State object

/*class Sample extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={
      brand:"Ford",
      model:"Mustang",
      year:2022,
      color:"red"
      }
      }
      changeColor=()=>{
        this.setState({color:"blue"})
      }
      render()
      {
        return(
          
          <>
          <h1>Brand:{this.state.brand}</h1>
          <h1>Model:{this.state.model}</h1>
          <h1>Year:{this.state.year}</h1>
          <h1>Color:{this.state.color}</h1>
          <button onClick={this.changeColor}>Change Color</button>
          </>
        )
        }
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//React Event

/*function Football()
{
   const shoot=()=>{
    alert("Goal Scored")
   }
   return(
    <>
      
      <h1>Football</h1>
      <button onClick={shoot}>Shoot</button>
    </>
   )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Football/>)*/

//React Event Argument passing

/*function Football()
{
  const shoot=(year)=>{
    alert(`Goal Scored ${year}`)
    
    }
    return(
      <>
       <h1>Football</h1>
       <button onClick={()=>shoot("2024")}>Shoot</button>
      </>
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Football/>)*/

//Conditional Rendering

/*function MissedGoal()
{
    return<h1>Missed</h1>
}
function MadeGoal()
{
    return<h1>Goal Made</h1>
}

function Football(props)
{
   const isGoal=props.isGoal;
   if(isGoal)
   {
      return<MadeGoal/>
   }
   else
   {
    return<MissedGoal/>
   }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Football isGoal={Math.random()>0.5}/>)*/

//React List using Map

/*function Car(props)
{
   return<li>I am {props.b1}</li>
}
function Garage()
{
    const cars=["BMW","Audi","Toyota"];
    return(
      <>
         <h1>Garage</h1>
         <ul>
          {cars.map((car)=><Car b1={car}/>)}
         </ul>
      </>
    )
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Garage/>)*/

//React Hooks

 