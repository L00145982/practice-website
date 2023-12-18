/*
  Stephen O'Donnell 
  Important!! :  this app is used to help me gain a better understanding of React,
  there will be a lot of Comments within the code to help explain what things are,
  What they do. 
  How I'd explain JSX is JavaScript meets HTML
*/

/* This exercise went through working with the Itenery operator and how it can be implemented
   in React to conditionally display Elements. */
import './App.css';
import {User} from './User'

function App() {
  //variables
  const age = 18;
  const isGreen = true;
  const users = [
    {name: "Stephen", age: 23},
    {name: "Sian", age: 25},
    {name: "Rhys", age: 6},
    {name: "Kayla", age: 3}
  ];

  const planets = [
    {name: "Earth", isGasPlanet: false},
    {name: "Venus",isGasPlanet: false},
    {name: "Jupiter", isGasPlanet: true},
    {name: "Neptune", isGasPlanet: true},
    {name: "Uranus", isGasPlanet: true},
    {name: "Mars", isGasPlanet: false}
  ];

  /*  
      1. The isGreen && <button>.... is an itenery operator that displays the button if the isGreen value is true.
      2. user.map() retrieves the data from the users array of objects and allows you to display the contents in this case
         the data is used through the User Component which is initiated through a seperate Users.js file
  */

  return (
    <div className="App">
      <div className='conditionalElements'>
        {age>=18 ? <h1>OverAge</h1> : <h1>Underage</h1>} 
        <h1 style={{color: isGreen ? "green" : "red"}}>This text has colour</h1>
        {isGreen && <button>Do NOT Click this Button</button>}
      </div>
      <div className='Lists'>
        {users.map((user,key)=>{
          return <User name={user.name} age={user.age}/>
        })}
      </div>
      <div className='exercises'>
        {planets.map((planets, key)=>
          !planets.isGasPlanet && <h1>{planets.name}</h1>
        )}
      </div>
    </div>
  );
}

export default App;
