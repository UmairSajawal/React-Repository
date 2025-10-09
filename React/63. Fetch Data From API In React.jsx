// ****** Tailwind CSS Setup In React  ******

// API link: https://dummyjson.com/users

//Start:
// main.jsx file code:
/*
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)

*/

// App.jsx file code;
import { useState } from "react";
import { useEffect } from "react";
import "./App.css";

// API link: https://dummyjson.com/users

function App() {
    useEffect(() => {
        getUserData();
    }, []);
    const [usersData, setUsersData] = useState([]);
    async function getUserData() {
        const url= "https://dummyjson.com/users";
        let response = await fetch(url);
        response = await response.json();  // convert into json()
        setUsersData(response.users);
    }
    console.log(usersData);
    return (
        <div>
            <h1>Fetch Data From API In React</h1>
            <ul className="users-list users-list-head">
                <li>First Name</li>
                <li>Last Name</li>
                <li>Age</li>
            </ul>
            {
                usersData && usersData.map((users) =>(
                    <ul className="users-list">
                        <li>{users.firstName}</li>
                        <li>{users.lastName}</li>
                        <li>{users.age}</li>
                    </ul>
                ))
            }
        </div>
    )
}

export default App


// App.css file code:
/*
.users-list{
    display: flex;
    justify-content: space-around;
    border: 1px solid gray;
    margin: 0;
    padding: 10px;
    list-style: none;
}

.users-list-head {
    font-size: 20px;
    font-weight: 800;
}

*/

// End.