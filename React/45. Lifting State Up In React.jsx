// ****** Lifting State Up In React JSX ******

// Note: Lifting State Up In React example:
// If a parent have two child. if one child wants to send data to another child, so the child send data to parent then parent send data to other child.

// App.jsx file code:
/*
import AddUser from "./AddUser"
function App() {

  return (
      <div>
        <h1>Lifting State Up In React</h1>
        <AddUser />
        <hr />
      </div>
  )
}

export default App;
*/


// AddUser.jsx file code:
/*
import { useState } from "react";
import DisplayUser from "./DisplayUser";
function AddUser() {
    const [user, setUser] = useState();
    return (
        <div>
            <h2>Add User Component</h2>
            <input type="text" onChange={(event)=>setUser(event.target.value)} placeholder="Enter user name ..."/>
            <DisplayUser user={user}/>
        </div>
    )
}
export default AddUser;
*/


// DisplayUser.jsx file code:
/*
function DisplayUser({user}) {
    return (
        <div>
            <h2>Display User Component: <br /> {user}</h2>
        </div>
    )
}
export default DisplayUser;
*/