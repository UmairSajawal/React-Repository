// ******* Handle Props Side-Effects with useEffect in component ******

/*
App.jsx file code:

import Counter from "./Counter"
import { useState } from "react";

function App() {
    const [count, setCount] = useState(0);
    const [data, setData] = useState(0);
    return (
        <div>
        <h2>Handle Props Side-Effects with useEffect in component</h2>
        <Counter count={count} data={data} />
        <button onClick={() => {setCount(count+1)}}>Count</button>
        <button onClick={() => {setData(data+1)}}>Data</button>
        </div>
    )
}

export default App
*/

/*
Counter.jsx file code:
import { useEffect } from "react";
const Counter = ({count, data}) => {          
    const handleCounter = () => {
        console.log("handleCounter function called")
    }

    const handleData = () => {
        console.log("handleData function called")
    }

    useEffect(() => {
        handleCounter();
    },[])

    useEffect(() => {
        handleData();
    },[count, data]) // This effect depends on the 'data' prop

    return(
        <div>
            <h2>Counter Value: {count}</h2>
            <h2>Data Value: {data}</h2>
        </div>
    )
}
export default Counter;
*/