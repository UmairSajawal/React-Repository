// *** Handle Radio Buttons And Dropdowns In React JSX ***
/*
App.jsx file code ;
import { useState } from "react"
function App() {
    const [gender,setGender]=useState("male")
    const [city,setCity]=useState("Sialkot")
    return (
        <div>
        <h1>Handle Radio Buttons And Dropdowns</h1>
        <h3>Select Gender:</h3>
        <input type="radio" onChange={(event)=>setGender(event.target.value)} name="gender" id="male" 
        value={"male"} checked={gender=="male"}
        />
        <label htmlFor="male">Male</label>

        <input type="radio" onChange={(event)=>setGender(event.target.value)} name="gender" id="female" 
        value={"female"} checked={gender=="female"} 
        />
        <label htmlFor="female">Female</label>
        <br /><br />
        <h3>Selected Gender: {gender}</h3>
        <br /><br /><br />

        <h2>Select City:</h2>
            <select onChange={(event)=>setCity(event.target.value)} defaultValue={"Sialkot"}>
                <option value="Islamabad">Islamabad</option>
                <option value="Karachi">Swat</option>
                <option value="Sialkot">Sialkot</option>
            </select>
            <h3>Selected City: {city}</h3>
        </div>
    )
}

export default App

*/