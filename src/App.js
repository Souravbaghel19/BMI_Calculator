import React  from 'react';
import  './index.css'
import Bmi from './Bmi';


function App()
{
//const [counter , setCounter] = useState(0)
return (
    <div className="App">
    {/*<h1>{counter}</h1>
     {<button onClick={()=> {setCounter(counter+1)}}>Increase</button>
      <button onClick={()=> {setCounter(counter-1)}}>Decrease</button>*/}
      <Bmi/>
    </div>
);
}
export default App;
