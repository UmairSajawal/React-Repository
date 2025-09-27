// ****** useId Hook In React JS ******

// App.jsx file code:

import { useId } from "react"


export default function App() {
  return (
      <div>
        <h1>useId Hook In React JS</h1>
        <UserForm />
        <br /><hr />
        <UserForm />
      </div>
  )
}

// make component within the file
function UserForm(){
  const name = useId();
  const password = useId();
  const skills = useId();
  const terms = useId();
  return (
      <div>
        <h1>useId Hook In React JS</h1>
        <form action="">
          <label htmlFor={name}>Name</label>
          <input id={name} type="text" placeholder="Enter your name"/>
          <br /><br />
          <label htmlFor={password}>Password</label>
          <input id={password} type="text" placeholder="Enter your name"/>
          <br /><br />
          <label htmlFor={skills}>Skills</label>
          <input id={skills} type="text" placeholder="Enter your name"/>
          <br /><br />
          <input id={terms} type="checkbox"/>
          <label htmlFor={terms}>Terms and Conditions</label>
          <br /><br />
          
        </form>
      </div>
  )
}




