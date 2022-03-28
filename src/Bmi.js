import React ,{useState} from 'react';

export default function Bmi()
{   
 //state
   const [weight , setWeight] = useState(0)
   const [height , setheight] = useState(0)
   const [bmi , setBmi] = useState('')
   const [message , setMessage] = useState('')
                                            

   let calcBmi=(event) =>{
     event.preventDefault()

     if(weight == 0 || height== 0) {
       alert('Please Enter a valid  Weight and Height')
     }else{
       let bmi =(weight/(height* height)* 703)
       setBmi(bmi.toFixed(1))

       //logic for message
       if(bmi < 25){
         setMessage('you are underweight')
       }
       else if(bmi >=25 && bmi <30){
         setMessage('you are healthy weight')
       } 
       else {
         setMessage("you are overweight")
       }
     }
   }
   // show image on bmi calculation
   let imgSrc;

   if(bmi <1){
     imgSrc = null
   }else{
     if(bmi < 25){
       imgSrc =require('../src/assets/chahal.jfif')
    }else if(bmi >=25 && bmi <30) {
      imgSrc= require('../src/assets/kohli.jfif')
    } else{
      imgSrc= require('../src/assets/cornwell.jfif')
    }
   }

        let reload =() => {
          window.location.reload()
        } 
    //const [counter , setCounter] = useState(0)
  return (
    <div className='app'>
    <div className="container"> 
           <h2 className='center'>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
               <div>
                  <label>Weight(lbs) </label>
                  <input value ={weight} onChange={(event) => setWeight(event.target.value)}/>
              </div>
              <div>
                  <label>Height(in) </label>
                  <input value ={height} onChange={(event) => setheight(event.target.value)}/>
              </div>
              <div>
                  <button className='btn' type ='submit'>submit</button>
                  <button className='btn btn-outline' onClick={reload} type ='submit'>Reload</button>
              </div>
        </form>
              <div className ='center'>
                  <h3>Your BMI is :{bmi}</h3>
                  <p>{message}</p>
              </div>
              <div className ='img-container'>
                  <img src={imgSrc} alt =''/>
                   </div>
             </div>
          </div>
  );
  }
