import React, { useState } from "react";
import ReactDOM from "react-dom/client";


//Basic Rendering

/*const Sample=()=>{
  return(
    <div>
      <h1>Hello World</h1>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//Dynamic Rendering

/*const App=()=>{
  return(
    <div>
      <h1>Hello World</h1>
      <p>TodayDate::{new Date().toLocaleDateString()}</p>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)*/

//React without JSX

/*const myelem1=React.createElement('h1',null,'welcome')
const r2=ReactDOM.createRoot(document.getElementById('root'))
r2.render(myelem1)*/

//React with JSX

/*const myelem1=<h1>Welcome</h1>
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(myelem1)  //jsx is converted to react.createElement() internally by babel*/

//React list

/*const Myelem=()=>{
  return(
    <div>
      <h1>Hello World</h1>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Myelem/>)*/

//Conditional Rendering
//Nested if else,else if ladder,switch  case

/*const x=10
let text=""
if(x>10){
  text="Greater than 10"
}
else if(x==10)
{
   text="Equal to 10"
}
else{
  text="Less than 10"
  }
  const Myelem=()=>{
    return(
      <div>
        <h1>Hello World</h1>
        <p>{text}</p>
      </div>
    )
  }
  const r1=ReactDOM.createRoot(document.getElementById('root'))
  r1.render(<Myelem/>)*/

  //importing css and bootstrap

  /*import './index.css';

  const App=()=>{
    return(
      <div>
        <h1>Hello World</h1>
        <ul className="list-group">
            <li>list1</li>
            <li>list2</li>
        </ul>
        <input type="submit" className="btn btn-primary" value="Submit"/>
      </div>
    )
  }
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)*/

//class Component

/*class Sample extends React.Component
{
   render()
   {
    return(
      <div>
        <h1>This is Class Component</h1>
      </div>
    )
   }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//Function Component

/*function Sample()
{
  return(
    <div>
      <h1>This is Function Component</h1>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//Function Component with  Props

/*function Sample(props)
{
  return(
    <div>
      <h1>This is Function Component</h1>
      <h2>{props.name}</h2>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample name="Rahul"/>)*/

//Component in Component

/*function Component1()
{
  return(
    <div>
      <h1>This is Component1</h1>
    </div>
  )
}
function Component2()
{
  return(
    <div>
      <h1>This is Component2</h1>
      <Component1/>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Component2/>)*/

//Constructor using super

/*class  Sample extends React.Component
{
  constructor()
  {
    super();
    this.state={
      name:"Rahul",
      age:25,
      address:"Mumbai"
  }
}
render()
{
  return(
    <div>
      <h1>This is Class Component</h1>
      <h2>{this.state.name}</h2>
      <h2>{this.state.age}</h2>
      <h2>{this.state.address}</h2>
    </div>
    )
}
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//React State

/*class Sample extends React.Component
{
  constructor(props)
  {
     super(props);
     this.state={
      name:"Rahul",
      age:25,
      address:"Mumbai"
  }
}
render()
{
  return(
    <div>
      <h1>This is Class Component</h1>
      <h2>{this.state.name}</h2>
      <h2>{this.state.age}</h2>
      <h2>{this.state.address}</h2>
    </div>
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
    <div>
      <h1>This is Function Component</h1>
      <button onClick={shoot}>Shoot</button>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Football/>)*/

/*function Football()
{
  const shoot=(a)=>{
    alert("Goal Scored by"+a)
  }
  return(
    <div>
      <h1>This is Function Component</h1>
      <button onClick={()=>shoot("Ronaldo")}>Shoot</button>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Football/>)*/

//Conditional Rendering

/*function MissedGoal()
{
  return<h1>Missed</h1>
}
function ScoredGoal()
{
  return<h1>Scored</h1>
}
function Football()
{
  const shoot=()=>{
    const random=Math.floor(Math.random()*2)
    if(random==0)
      {
        return <MissedGoal/>
        }
        else
        {
          return <ScoredGoal/>
          }
          }
          return(
            <div>
              <h1>This is Function Component</h1>
              <button onClick={shoot}>Shoot</button>
              {shoot()}

            </div>
          )
          
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Football/>)*/

//React List using Map

/*function Car(props)
{
  return<li>I am {props.b1}</li>
}
function Garage()
{
  const cars=["BMW","Audi","Tata"]
  return(
    <div>
      <h1>This is Function Component</h1>
      <ul>
        {cars.map((car)=><Car b1={car}/>)}
      </ul>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Garage/>)*/

//React Keys

/*function Car(props)
{
   return<li>{props.id}{props.name}</li>
}
function Garage()
{
  const cars=[
    {id:1,name:"BMW"},
    {id:2,name:"Audi"},
    {id:3,name:"Tata"}
    ]
    return(
      <div>
        <h1>This is Function Component</h1>
        <ul>
          {cars.map((car,index)=><Car key={index} id={car.id} name={car.name}/>)}
        </ul>
      </div>
    )
  }
  const r1=ReactDOM.createRoot(document.getElementById('root'))
  r1.render(<Garage/>)*/

  //getDerivedStateFromProps

  /*class Header extends  React.Component
  {
    constructor(props)
    {
      super(props)
      this.state={count:0}
      }
      static getDerivedStateFromProps(props,state)
      {
        console.log("getDerivedStateFromProps")
        return {count:props.count}
        }
        render()
        {
          return(
            <div>
              <h1>Header</h1>
              <p>Count:{this.state.count}</p>

            </div>
          )
        }
  }
  const r1=ReactDOM.createRoot(document.getElementById('root'))
  r1.render(<Header count={10}/>)*/

  //ComponentDidMount

  /*class Header extends  React.Component
  {
    constructor(props)
    {
      super(props)
      this.state={count:0}
      }
      componentDidMount()
      {
        console.log("componentDidMount")
        setTimeout(()=>{
            this.setState({count:10})
        },5000)
        }
        render()
        {
          return(
            <div>
              <h1>Header</h1>
              <p>Count:{this.state.count}</p>
            </div>
          )
        }
  }
  const r1=ReactDOM.createRoot(document.getElementById('root'))
  r1.render(<Header/>)*/

  //Updating getDerivedStateFromProps

/*class Header extends React.Component
{
    constructor(props)
    {
      super(props)
      this.state={favcolor:"red"}
    }
     static getDerivedStateFromProps(props,state)
     {
      console.log("getDerivedStateFromProps")
     }
     changeColor=()=>{
      this.setState({favcolor:"blue"})
     }
    render()
    {
       return(
        <div>
        <h1>Header</h1>
        <p>Favorite Color:{this.state.favcolor}</p>
        <button onClick={this.changeColor}>Change Color</button>
        </div>
       
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Header/>)*/

//Hooks useState()

/*function Counter()
{
   const [count,setCount]=useState(10);
   const [name,setName]=useState("mohamed")
   return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
      <h1>Name:{name}</h1>
      <button onClick={()=>setName("Ahmed")}>Change Name</button>
    </div>
   )
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Counter/>)*/

//React useEffect
import { useEffect } from "react";
/*function ClickCounter()
{
   const [count,setCount]=useState(0)
   useEffect(()=>{
    document.title="You clicked "+count+" times"
    },[count])
    return(
       <div>
        <button onClick={()=>setCount(count+1)}>Click me</button>
        <p>Count is {count}</p>
       </div>
    )
}
 
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<ClickCounter/>)*/

//React without useContext

/*function Component1()
{
   const [user,setUser]=useState("mohamed")
   return(
    <div>
      <h1>User Name:{user}</h1>
      <button onClick={()=>setUser("Ahmed")}>Change User</button>
      <Component2 user={user}/>
      </div>
      
   )
}
function Component2(props)
{
  return(
    <div>
      <h1>User Name:{props.user}</h1>
    </div>
  )
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Component1/>)*/

//React with useContext

import  { useContext,createContext } from "react";

const UserContext=createContext()
function Component1()
{
  const [user,setUser]=useState("mohamed")
  return(
    <div>
      <h1>User Name:{user}</h1>
      <button onClick={()=>setUser("Ahmed")}>Change User</button>
      <Component2/>
    </div>
    )
    }
    function Component2()
    {
      const user=useContext(UserContext)
      return(
        <div>
          <h1>User Name:{user}</h1>
          
        </div>
        )
        }
        const r1=ReactDOM.createRoot(document.getElementById('root'))
        r1.render(<UserContext.Provider value={"mohamed"}><Component1/>
        </UserContext.Provider>)
