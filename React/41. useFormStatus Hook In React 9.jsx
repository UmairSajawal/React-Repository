// ****** useFormStatus Hook In React 9 ******
// Important Notes:
// It works only in React 9 or above version.
// To use this hook you have to import it from "react-dom" package.
// It can be used only inside a form component.
// It returns an object with a single property pending which is a boolean value indicating whether the form is currently being submitted or not.
// The useFormStatus hook is used to manage the status of a form submission in React, like
// when the form is submit it make some delay, so to remove that delay we use this useFormStatus hook.
// It provides a pending state that indicates whether the form is currently being submitted.

// App.jsx file code:

import { useFormStatus } from "react-dom";


function App() {

  const handleSubmit = async () => {
    await new Promise((res) => setTimeout(res, 2000));
    console.log("Submit");
  }

  function CustomerForm() {
    const { pending } = useFormStatus();
    console.log(pending);
    return (
      <div>
        <input type="text" placeholder="Enter your name" />
        <br /><br />
        <input type="password" placeholder="Enter your password" />
        <br /><br />
        <button disabled={pending}>{pending ? "Submitting..." : "Submit"}</button>
      </div>
    )
  }
  return (
    <div>

      <h1>useFormStatus Hook In React 9</h1>
        <form action={handleSubmit}>
          <CustomerForm />
        </form>
    </div>
  )
}

export default App


