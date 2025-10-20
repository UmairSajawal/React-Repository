// ****** Validation With useAction State In React JS ******

//Start:

// App.jsx file code:
/*

import { useActionState } from "react";
import "./App.css";

function App() {

    const handleLogin = (prevData, formData) => {
        let name = formData.get("name");
        let password = formData.get("password");
        let regex = /^[A-Za-z0-9]*$/;  // regex validation for alpha numeric values only

        if(!name || name.length > 5){
        return { error: "Name should not empty or must be in max five letters",name,password}
        }  else if(!regex.test(password)){
            return { error: "Password should be Alpha Numeric. Special symbols not allowed",name,password }
        } else {
            return { message: "Login Successful!",name,password }
        }
    }
    const [data,action,pending]=useActionState(handleLogin, {});
    return (
        <>
        <div>
            <h1>Validation With useAction State In React</h1>
            {
            data?.message && <span style={{color: "green", fontSize: "20px"}}>{data.message}</span>
            }
            {
            data?.error && <span style={{color: "red", fontSize: "20px"}}>{data.error}</span>
            }

            <form action={action}>
            <input defaultValue={data?.name} type="text" name="name" placeholder="Enter Your Name In Max. Five Letters"/>
            <br /><br />
            <input defaultValue={data?.password} type="text" name="password" placeholder="Enter Your Password..."/>
            <br /><br />
            <button disabled={pending}>Login</button>
            </form>
        </div>
        </>
    )
}

export default App

*/

// App.css file code:
/*
input[type="text"] {
    padding: 5px;
    font-size: 16px;
    width: 350px;
}

button {
    padding: 5px;
    font-size: 16px;
    width: 100px;
}

.error {
    outline: 2px solid red;
}

.error:focus {
    outline: 2px solid red;
}

.red-color {
    color: red;
}

*/