/*
  Stephen O'Donnell 
  Important!! :  this app is used to help me gain a better understanding of React,
  there will be a lot of Comments within the code to help explain what things are,
  What they do. 
  How I'd explain JSX is JavaScript meets HTML
*/
import './App.css';

function App() {
  /* Normal Javascript function as it does not return any JSX tags such as <h1>,<p>, etc...
  const getName = () => {
    return "Stephen"
  } 
  */

  /*  This is a component as it uses JSX as you can see with the HTML like elements
  Components must start with a Capital letter (Best practices)  */
  const GetInfoComponent = (props) =>{
    return (
      <div>
        <h3>{props.name}</h3>
        <h3>{props.age}</h3>
        <h3>{props.email}</h3>
      </div>
    )
  };

  /*  Props allows the values to be passed through when the component is called
  with example <Job salary={2500}...  */
  const Job = (props) =>{
    return (
    <div>
      <h1>Job Listing</h1>
      <h3>Salary : {props.Salary}</h3>
      <h3>position : {props.position}</h3>
      <h3>Salary : {props.company}</h3>
    </div>
    )
  }

  return (
    <div className='App'>
      <GetInfoComponent name="Stephen" age={23} email="Stephenod30@gmail.com"/>
      <GetInfoComponent name="Sian" age={25} email="Siansmith9850@gmail.com"/>
      <br/>
      <Job Salary={35000} position="Software Engineer" company="Alchemy"/>
      <Job Salary={45000} position="Senior Developer" company="All State"/>
      <Job Salary={27500} position="Bussiness Analyst" company="Optum"/>
    </div>
  );
}

export default App;
