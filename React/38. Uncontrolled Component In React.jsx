// ****** Uncontrolled Component In React JSX ******

// App.jsx file code:

import { useRef } from "react";

function App() {
  const userRef = useRef(null);
  const passwordRef = useRef(null);
  const handleForm = (event) => {
    event.preventDefault();       // to prevent page reload error
    // Option 1:
    // const user = event.target.user.value;
    // const password = event.target.password.value;
    // Option 2:
    const user = document.querySelector('#user').value;
    const password = document.querySelector('#password').value;
    console.log(user, password);
  }

  const handleFormRef = (event) => {
    event.preventDefault();
    const user=userRef.current.value;
    const password=passwordRef.current.value;
    console.log("Handle Form ref", user, password);
  }
  return (
    <div>
      <h1>Uncontrolled Component</h1>
      <form action="#" onSubmit={handleForm}>
        <input type="text" id="user" placeholder='Enter Username'/>
        <br /><br />
        <input type="password" id="password" placeholder='Enter user Password'/>
        <br /><br />
        <button type="submit">Submit</button>
      </form>
      <hr />

      <h1>Uncontrolled Component With useRef</h1>
      <form action="#" onSubmit={handleFormRef}>
        <input type="text" ref={userRef} placeholder='Enter Username'/>
        <br /><br />
        <input type="password" ref={passwordRef} placeholder='Enter user Password'/>
        <br /><br />
        <button type="submit">Submit With Ref</button>
      </form>
    </div>
  )
}

export default App;
