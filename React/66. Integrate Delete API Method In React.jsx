// ****** Integrate Delete API Method In React JS ******
// Imp Note:Make sure you have installed react-router package
// You can install it by using the following command: npm install react-router
// Also Run the API server using JSON server or any other method you prefer.
// You can use the following command to run JSON server: npx json-server --watch db.json --port 3000
// Make sure you have a db.json file in your root directory with some initial data.
// Update main.jsx file like this:
/*
import { BrowserRouter } from 'react-router'
createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>

)*/

// Important Notes:
// 1. This project uses JSON server to fetch data from a local server.
// 2. Make Sure thatJSON Server Install firstly through this Installation Command: npm install -g json-server
// 3. To run JSON server use this command: npx json-server --watch db.json --port 3000
// 4. Create db.json file in the root directory and add some data in it.
// 5. To run the React app use this command: npm start


//Start:

// main.jsx file code:

import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>

)


// App.jsx file code:
/*
import { NavLink, Route, Routes } from "react-router"
import UserAdd from "./UserAdd"
import UserList from "./UserList"
import './App.css'
function App() {
    return (
        <>
        <div>
                // commented: <h1>Make Routes And Pages For Add User And User List UI</h1> 
                <ul className="Nav-list">
                <li>
                    <NavLink to="/">User List</NavLink>
                </li>
                <li>
                    <NavLink to="/add">Add User</NavLink>
                </li>
                </ul>
                <Routes>
                    <Route path="/" element={<UserList />} />
                    <Route path="/add" element={<UserAdd />} />
                </Routes>
                
                
            </div>
        </>
    )
}

export default App
*/

// UserList.jsx file code:
/*

import { useEffect, useState } from 'react';
import './App.css'
export default function UserList() {
    const [userData, setUsersData] = useState([]);
    const [loading, setLoading] = useState();
    const Url = "http://localhost:3000/posts";
    useEffect(() => {
        setLoading(true);
        getUserData();
    }, []);

    const getUserData = async () => {
        
        let response = await fetch(Url);
        response = await response.json();
        console.log(response);
        setUsersData(response);
        setLoading(false);
    }

    const deleteUser = async (id) => {
        let response = await fetch(Url+"/"+id, {
            method: "DELETE"
        });
        response = await response.json();
        if(response){
            alert("User Deleted Successfully");
        }
    }
    return (
        <>
        <div>
                <h1>Integrate Delete API Method In React</h1>
                <ul className="users-list users-list-head">
                    <li>Title</li>
                    <li>Author</li>
                    <li>Email</li>
                    <li>Action</li>
                </ul>
                {
                    !loading ?
                    userData.map((user) =>(
                        <ul key={user.id} className="users-list">
                            <li>{user.id}</li>
                            <li>{user.title}</li>
                            <li>{user.author}</li>
                            <li>{user.email}</li>
                            <li><button onClick={() => deleteUser(user.id)}>Delete</button></li>
                        </ul>
                    ))
                    : <div>
                        <h1>Loading...</h1>
                        <img src="https://miro.medium.com/1*9EBHIOzhE1XfMYoKz1JcsQ.gif" alt="" />
                    </div>
                }
            </div>
        </>
    )
}

*/



// UserAdd.jsx file code:
/*
import { useState } from "react"

export default function UserAdd() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [email, setEmail] = useState("");
    const createUser = async () => {
        console.log(title, author, email);
        const Url = "http://localhost:3000/posts";
        let response = await fetch(Url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({title, author, email}),
        });
        response = await response.json();
        if(response){
            alert("User Added Successfully");
        }
    }
    return (
        <div>
            <input type="text" onChange={(event) => setTitle(event.target.value)} placeholder="Enter Your Title"/>
            <br /><br />    
            <input type="text" onChange={(event) => setAuthor(event.target.value)} placeholder="Enter Your Author"/>
            <br /><br />    
            <input type="email" onChange={(event) => setEmail(event.target.value)} placeholder="Enter Your Email"/>
            <br /><br />    
            <button onClick={createUser}>Add User</button>
        </div>
    )
}

*/


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