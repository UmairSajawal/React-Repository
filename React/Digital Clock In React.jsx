// *** Digital Clock In React JSX ***

// App.jsx file code:
/*
import Clock from './Clock'; // Importing User component
import { useState } from 'react';
function App() {
    const [color, setColor] = useState('red');
    return (
        <div>
        <h1>Digital Clock In React JSX</h1>
        <select onChange={(event) => setColor(event.target.value)}>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
        </select>
        <Clock color={color} />
        </div>
    )
}

export default App
*/

// Clock.jsx file code: 
/*
import { useEffect, useState } from "react"
const Clock = ({ color }) => {
    const [time,setTime]=useState(0);
            useEffect(()=>{
                setInterval(()=>{
                    setTime(new Date().toLocaleTimeString());
                },1000)
            },[])

    return(
        <div style={{ color: color, padding: '10px', margin: '20px', width: '350px', borderRadius: '10px', border: `2px solid ${color}` }}>
            <h1>Digital Clock</h1>
            <h1>{time}</h1>
        </div>
    )
}
export default Clock
*/