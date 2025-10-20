// ****** Simple Validation On Input fields In React JS ******

//Start:

// App.jsx file code:
/*
import { useState } from "react";
import "./App.css";
function App() {
    //const [name, setName] = useState("");
    const [nameErr, setNameErr] = useState();

    const [passErr, setPassErr] = useState();
    function handleName(event){
        console.log(event.target.value);
        if(event.target.value.length > 5){
        setNameErr("Name should be less than 5 characters");
        } else {
        setNameErr();
        }
    }
    function handlePassword(event){
        let regex = /^[A-Za-z0-9]*$/;  // regex validation for alpha numeric values only
        if(regex.test(event.target.value)){
        setPassErr();
        } else {
        setPassErr("Password should be Alpha Numeric. Special symbols not allowed");
        }
    }
    return (
        <>
        <div>
            <h1>Simple Validation On Input fields In React</h1>
            <input type="text" className={nameErr ? "error" : ""} onChange={handleName} placeholder="Enter Your Name In Max. Five Letters"/>
            <span className="red-color">{nameErr && nameErr}</span>
            <br /><br />
            <input type="text" className={passErr ? "error" : ""} onChange={handlePassword} placeholder="Enter Your Password..."/>
            <span className="red-color">{passErr && passErr}</span>
            <br /><br />
            <button disabled={nameErr || passErr}>Submit</button>
        </div>
        </>
    )
}

export default App

*/
