import React from "react";
import { useState } from "react";

function App() {
  /* You will need to use many state to keep the inut values and other needs */
  const[numA,setNumA] = useState("");
  const[numB,setNumB] = useState("");
  const[result,setResult] = useState("");
  const[isError,setError] = useState(false);
  /* You will need some function to handle the key pressed and button events */
  function onA(e){
    let val = e.target.value;
      setNumA(val)
  }
  function onB(e){
    let val = e.target.value;
    setNumB(val)
  }
  function compute(e){
    e.preventDefault();
    if(!isNaN(numA) && !isNaN(numB) ){
      setResult((parseFloat(numA)+parseFloat(numB)).toString());
      setError(false);
    }else{
      setResult("A and B Shall be a number");
      setError(true);
    }
  }
  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input onKeyUp={onA} />

      <label>B =</label>
      <input onKeyUp={onB} />

      <label>A + B =</label>

      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <input className={isError?'error':''} value={result}  disabled />
      <button onClick={compute}>Compute</button>
    </main>
  );
}

export default App;
