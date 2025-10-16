// ****** Custom Hooks In React JS ******
// Important Notes:
// 1. This project uses JSON server to fetch data from a local server.
// 2. Make Sure thatJSON Server Install firstly through this Installation Command: npm install -g json-server
// 3. To run JSON server use this command: npx json-server --watch db.json --port 3000
// 4. Create db.json file in the root directory and add some data in it.
// 5. To run the React app use this command: npm start

// App.jsx file code:


import { useEffect, useState } from 'react';
import './App.css'
function App() {
    const [userData, setUsersData] = useState([]);
    const [loading, setLoading] = useState();
    useEffect(() => {
        setLoading(true);
        getUserData();
    }, []);

    const getUserData = async () => {
        const Url = "http://localhost:3000/posts";
        let response = await fetch(Url);
        response = await response.json();
        console.log(response);
        setUsersData(response);
        setLoading(false);
    }
    return (
        <>
        <div>
                <h1>Integrate Json Server API And Loader In React</h1>
                <ul className="users-list users-list-head">
                    <li>ID</li>
                    <li>Name</li>
                    <li>Author</li>
                </ul>
                {
                    !loading ?
                    userData.map((user) =>(
                        <ul key={user.id} className="users-list">
                            <li>{user.id}</li>
                            <li>{user.title}</li>
                            <li>{user.author}</li>
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