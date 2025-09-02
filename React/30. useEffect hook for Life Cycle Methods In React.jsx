// ******* useEffect hook for Life Cycle Methods In React *******

/*
App.jsx file code:

import Counter from "./Counter"
import { useState } from "react";

function App() {
    const [count, setCount] = useState(0);
    const [data, setData] = useState(0);
    const [display, setDisplay] = useState(true); // New state for unmounted phase
    return (
        <div>
        <h2>Handle Props Side-Effects with useEffect in component</h2>
        {
            display? <Counter count={count} data={data} /> : null
        }
        <button onClick={() => {setCount(count+1)}}>Count</button>
        <button onClick={() => {setData(data+1)}}>Data</button>
        <button onClick={() => {setDisplay(!display)}}>Toggle</button>

        </div>
    )
}

export default App
*/

/*
Counter.jsx file code:

import { useEffect } from "react";

const Counter = ({count, data}) => {          

    useEffect(() => {
        console.log("Mounted Phase Only");
    },[])

    useEffect(() => {
        console.log("Updated Phase Only");
    },[count])

    useEffect(() => {       // To display the unmounted phase or to display data in unmounted phase
        return () => {
            console.log("Unmounted Phase Only");
        }
    },[])



    return(
        <div>
            <h2>Counter Value: {count}</h2>
            <h2>Data Value: {data}</h2>
        </div>
    )
}
export default Counter;
*/
