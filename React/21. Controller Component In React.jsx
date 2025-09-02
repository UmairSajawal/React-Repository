// *** Controller Component In React JSX ***
/*
App.jsx file code:
import  { useState } from 'react';
function App() {
    const [name,setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    return (
        <div>
        <h1>Controller Component</h1>
        <form action="" method="get">
            <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder="Enter your name..." />
            <br /><br />
            <input type="password" value={password} onChange={(event)=>setPassword(event.target.value)} placeholder="Enter your password..." />
            <br /><br />
            <input type="text" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder="Enter your email..." />
            <br /><br />
            <h1>{name}</h1>
            <h1>{password}</h1>
            <h1>{email}</h1>

            <button type="submit">Submit</button>
            <br /><br />
            <button onClick={() => {setName("");setPassword("");setEmail("")}}>Clear All</button>
        </form>
        </div>
    )
}

export default App

*/