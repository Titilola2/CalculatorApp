import  { useState } from 'react';

function App() {
    const[calc, setCalc] = useState("");
    const [result, setresult] = useState("");

    const ops = ['/', '*', '+', '-', '.', ];

    const updateCalc= value =>{
      if (
        ops.includes(value) && calc === '' || 
        ops.includes(value) && ops.includes(calc.slice(-1)
        )
      ){
        return;
      }
      setCalc(calc + value);
      if (!ops.includes(value)){
        setresult(eval(calc + value).toString());
      }
    }

  const createDigits = () => {
    const digits =[];
    
    for (let i = 1; i<10; i++){
      digits.push(
        <button onClick={() => updateCalc(i.toString())}
         key={i}>
          {i}
          </button>
      )
    }
    return digits;

  
  }

  const calculate = () =>{
    setCalc(eval(calc).toString());
  }

  const deleteEntry = () =>{
    if (calc == ''){
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  } 

  const deleteAll = () => {
    setCalc("");
    setresult("");
  };
  

  return (
    <div className="App">
     <div className="calculator">
       <div className="display">
        {result ? <span>result</span> : ''}
         { calc || "0"}
       </div>

       <div classname="digits">
            {createDigits()}
           
            <button class="grid-i" onClick={calculate}>=</button>
           
        </div>

       <div classname="operators">
        <button class="grid-item" onClick={() => updateCalc('/')}>/</button>
        <button class="grid-item" onClick={() => updateCalc('*')}>*</button>
        <button class="grid-item" onClick={() => updateCalc('+')}>+</button>
        <button class="grid-item" onClick={() => updateCalc('-')}>-</button>
        <button class="grid-item" onClick={deleteEntry}>DEL</button>
        <button class="grid-item" onClick={deleteAll}>C</button>
        <button class="grid-item" onClick={() => updateCalc('(')}>(</button>
        <button class="grid-item" onClick={() => updateCalc(')')}>)</button>
        
       </div>
       
       
       

     </div>
    </div>
  );
}

export default App;
