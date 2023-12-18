/*  
    ___________________________________________
        UseState Hooks and States in React
    ___________________________________________
    1. What are states? 
      React will render the page once at load so you will be unable to change the
      data displayed on the webpage by normal methods. 
    2. UseStates are used to change the value on the webpage.   

*/
import './App.css';
import {useState} from "react";

function App() {
  
  //     [var, function] --> function is typically used to set/change the variable for future re-renders
  const [age, setAge] = useState(0);
  const [uInput,setUInput] = useState(undefined);
  const [showTitle, setTitle] = useState(true);
  const [textColor, setTextColor] = useState("black");
  const [count, setCount] = useState(0);

  const increaseAge = () => {
    //setAge function thats created in the UseState
    setAge(age + 1);
  };
  
/* 
  event is used in JS and HTML to help retrieve the data that is inserted into an input
  event.target.value - retrieves the value of the input that calls the function and sets the uInput to the value. 
*/
  const handleInputChange = (event) => { 
    setUInput(event.target.value) 
 }

 const handleTitleEvent = () => {
    setTitle(!showTitle);
    setTextColor(textColor ==="black" ? "green" : "black");
 }

 const increaseCount = () => {
    setCount(count + 1);
 }

 const decreaseCount = () => {
    setCount(count - 1);
 }

 const resetCount = () => {
    setCount(0);
 }

  return (
    <div className='App'>
      {showTitle && <h1>This is a Title</h1>}
      <h2 style={{color: textColor}}>This text can change color on the buutton click</h2> <br/>
      <button onClick={handleTitleEvent}>Show/Hide Title Bar</button><br/>
      {age} - <button onClick={increaseAge}>Increase Age</button> <br/>
      <input type='text' onChange={handleInputChange} /> : {uInput} <br/>
      <h1>Exercise</h1><br/>
      <h2>{count}</h2>
      <button onClick={increaseCount}> + </button> <button onClick={decreaseCount}> - </button> <button onClick={resetCount}> reset </button>
    </div>
  );
}

export default App;
