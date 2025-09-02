// ****** useEffect Hook In React JSX ******

import { useEffect, useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);

 // If you want both "count" and "data" called one time only, so then: 
/* 
  function onceCall(){
    console.log("I will be called only once");
  }

// onceCall(); 

// Note: The problem or side-effect is that the function call multiple times instead of one. So for the solution of this problem,
// we can use useEffect hook
    useEffect(()=>{
      //onceCall();
    },[])   // [] means that this effect will only run once, after the initial render, there are many other methods to control the behavior of useEffect. */

// If you want only "count" called multiple times but "data" is only one time so then:
    function counterControl(){
      console.log("Only count called multiple times")
  }

  useEffect(()=>{
    counterControl();
  },[count])  // Note: Due to [count], "count" called multiple times and "data" is only one time.


  return (
    <div>
      <h1>useEffect Hook In React</h1>
      <button onClick={()=>setCount(count+1)}>Counter: {count}</button>
      <button onClick={()=>setData(data+1)}>Data: {data}</button>
    </div>
  )
}

export default App
