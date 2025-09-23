// ****** Update Object In State In React JSX ******

// App.jsx file code:
/*
import { useState } from "react"

function App() {
    const [user, setUser] =useState("Ali");
    const [data, setData] = useState({
        name: "Ahmed",
        address: {
        city: "Karachi",
        country: "Pakistan"
        }
    });
    const handleUser = () => {
        setUser("Umair Sajawal")
        console.log(setUser)
    }

    const handleData = (val) => {
        data.name = val
        setData({...data})
    }
    const handleAddressCity = (city) => {
        data.address.city = city
        setData({...data, address: {...data.address, city: city}})
    }
    const handleAddressCountry = (country) => {
        data.address.country = country
        setData({...data, address: {...data.address, country: country}})
    }

    return (
        <div>
            <h1>Update Object In State In React</h1>

            <h2>{user}</h2>
            <button onClick={handleUser}>Update User</button>
            <hr /> <br />

            <input type="text" onChange={(event) => handleData(event.target.value)} placeholder="Enter your name"/>
            <input type="text" onChange={(event) => handleAddressCity(event.target.value)} placeholder="Enter your city"/>
            <input type="text" onChange={(event) => handleAddressCountry(event.target.value)} placeholder="Enter your country"/>
            <h2>Name: {data.name}</h2>
            <h2>City: {data.address.city}</h2>
            <h2>Country: {data.address.country}</h2>
        </div>
    )
    }

export default App

*/