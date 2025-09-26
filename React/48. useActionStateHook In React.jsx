// ****** useActionStateHook In ReactJS ******

// App.jsx file code:

import { useActionState } from "react"
function App() {
    const handleSubmit = async (previousData, formData) => {
        let name = formData.get("name");
        let password = formData.get("password");
        await new Promise((resolve) => setTimeout(resolve, 2000));
        //console.log("form submitted", name, password);
        
        if(name && password){
        return {message: "Form submitted successfully!", name, password}
        }else{
        return {error: "Please fill all the fields!", name, password}
        }
    }
    const [data, action, pending] = useActionState(handleSubmit, undefined)
    return (
        <div>
            <h1>useActionStateHook In React JS</h1>
            <form action={action}>
            <input defaultValue={data?.name} type="text" placeholder="Enter Username ..." name="name" />
            <br /><br />
            <input defaultValue={data?.password} type="password" placeholder="Enter your password ..." name="password" />
            <br /><br />
            <button disabled={pending}>Submit</button>
            </form>
            {
            data?.message && <span style={{color: "green"}}>{data.message}</span>
            }
            {
            data?.error && <span style={{color: "red"}}>{data.error}</span>
            }

            <h3>Name: {data?.name}</h3>
            <h3>Password: {data?.password}</h3>
        </div>
    )
}

export default App
