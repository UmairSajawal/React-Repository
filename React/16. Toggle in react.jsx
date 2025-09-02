/****** Toggle Hide And Show In React JSX ******/

// With Simple If Else Condition:

/*
App.jsx file code:
// Firstly import state when use it
import { useState } from "react"; // when write use before word lke useState, useContext, useId, useEffect, .. it means it's hook
import User from "./User";
function App() {
const [display,setDisplay]=useState(true)
return (
    <div>
        <h1>Toggle In React Js</h1>
        <button onClick={() => setDisplay(!display)}>Toggle</button>
        //{
        //  display ? <h1>Umair Sajawal</h1> : null
        //} 

        {
            display? <User />: null
        }
    </div>
    )
}

export default App


User.jsx File code:
function User() {
    return (
        <div>
            <h1>User Component</h1>
        </div>
    )
}
export default User;
*/


// With Simple If Else Condition:

/*
App.jsx file code:
// Firstly import state when use it
import { useState } from "react"; // when write use before word lke useState, useContext, useId, useEffect, .. it means it's hook
function App() {
const [count,setCount]=useState(0)
return (
    <div>
        <h1>Multiple Conditions In React Js</h1>
        <h1>{count}</h1>
        <button onClick={() => setCount(count+1)}>Count</button>

        {
            count==0?<h1>Condition 0</h1>
            :count==1?<h1>Condition 1</h1>
            :count==2?<h1>Condition 2</h1>
            :count==3?<h1>Condition 3</h1>
            :count==4?<h1>Condition 4</h1>
            :count==5?<h1>Condition 5</h1>  
            :<h1>Other Condition</h1>
        }
    </div>
    )
}

export default App

*/ 