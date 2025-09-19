// ****** Derived State In React JSX ******

// App.jsx file code:

import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [user,setUser] = useState("");

  const handleUser = () => {
    setUsers([...users, user]);
  }

  const total= users.length;
  const last= users[users.length-1];
  const unique = [...new Set(users)].length
  return (
    <div>
      <h1>Derived State In React JSX</h1>

      <h2>Total Users: {total}</h2>
      <h2>Last User: {last}</h2>
      <h2>Unique User: {unique}</h2>
      <input type="text" onChange={(event) => setUser(event.target.value)} placeholder="Add new user ..." />
      <button onClick={handleUser}>Submit</button>

      {
        users.map((item, index) => (
          <h2 key={index}>{item}</h2>
        ))
      }
    </div>
  )
}

export default App


