
import './App.css';



function App() {
   const num = 1;

   const addition = () => {
      return num + 1;
   }

   const subtraction = () =>{
      return "Hello";
   }
   
  
    return(
    <div className='App'>
      <div>{addition(num)}</div>
      <div>subtraction()</div>
   </div>
    )
}


export default App;

