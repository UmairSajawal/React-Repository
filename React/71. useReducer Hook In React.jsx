// ****** useReducer Hook In React JS ******

//Start:

// App.jsx file code:
/*
import { useReducer } from "react";

const empData = {
    password: '',
    email: '',
    city: '',
    address: ''
    };

    const reducer = (data, action) => {
    return {...data, [action.type]:action.val}
    }
    function App() {
    const[state, dispatch] = useReducer(reducer, empData);
    //console.log(state)
    return (
        <>
        <div>
            <h1>useReducer Hook In React</h1>
            <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:"name"})} placeholder="Enter your name"/>
            <br /><br />
            <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:"password"})} placeholder="Enter your password"/>
            <br /><br />
            <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:"email"})} placeholder="Enter your email"/>
            <br /><br />
            <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:"city"})} placeholder="Enter your city"/>
            <br /><br />
            <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:"address"})} placeholder="Enter your address"/>
            <br /><br />
            <button onClick={()=>console.log(state)}>Submit</button>

            <ul>
                <li>Name:{state.name}</li>
                <li>Password:{state.password}</li>
                <li>Email:{state.email}</li>
                <li>City:{state.city}</li>
                <li>Address:{state.address}</li>
            </ul>

        </div>
        </>
    )
}

export default App


*/
