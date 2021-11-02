import React, { useState } from 'react'
import * as math  from 'mathjs' 

export default function CalcButoon() { 

    const [numbers,SetNumbers] = useState([1,2,3,4,5,6,7,8,9 ]) 

    const [opperators,SetOperator] = useState(['+', '-', '/', '=' , '*','C']) 

    const [result,SetResult] = useState('') 


    const numberHandler = (number) => {  
        console.log(number); 

        SetResult(result + number) 
 
    } 


   const opperatorHandler = (opperator) => {  

    if(opperator === '=') {

        // SetResult()
        console.log(math.evaluate(result)) ;    
        
        SetResult (math.evaluate(result))
        
    }
       else {
           SetResult(result + opperator)   
       }
    }
    //    console.log(opperator); 
       
   



//    const calc = () => { 
//        console.log('result from calc function');
       
//     SetResult (eval(SetResult)); 
//    }

    return (
        <div>
            {numbers.map((number,idx) => (
                    <button onClick={() => numberHandler(number) } key={idx} > {number}  </button>
            ))} 

                <div>
                {opperators.map((opperator,idx) => (
                    <button onClick={() => opperatorHandler(opperator)} key={idx} > {opperator}  </button>
            ))}  
                  
                </div>  
                <br />

                <div>
                  total :  {result} 
                </div>
           
        </div>
    )
}
