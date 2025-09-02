// ******* Use Of State In React JSX ******
/*
App.jsx file code:
// Firstly import state when use it
import { useState } from "react"; // when write use before word lke useState, useContext, useId, useEffect, .. it means it's hook
import Counter from "./Counter"
function App() {
  const [fruit,setFruit]=useState("Apple");
  const [abc, setAbc]=useState("Abc")

  const changeFruit = () => {
    setFruit("Peach");
  }
  function nextAbc(){
    return setAbc("def")
  }
  return (
    <div>
      <h1>State In React Js</h1>
      <h1>{fruit}</h1>
      <button onClick={changeFruit}>Change Fruit</button>
      <br />
      <h1>{abc}</h1>
      <button onClick={nextAbc}>Click Me</button>
      <Counter />
    </div>
  )
}

export default App

//Counter.jsx File Code:         //make new file for use of different state component
// State in different component
import { useState } from "react";
const Counter = () => {          // when make component always first letter is capital
    const [count,setCount]=useState(0)
    const [rCount,setRcount]=useState(10)
    return(
        <div>
            <h1>Counter:{count}</h1>
            <button onClick={()=>setCount(count+1)}>Update Counter</button>
            <br />
            <h1>Reverse Counter:{rCount}</h1>
            <button onClick={()=>setRcount(rCount-1)}>Reverse Counter</button>
        </div>
    )
}
export default Counter;

*/