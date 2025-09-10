// ****** useRef Hook ******
// It is used to access a DOM element directly.
// It can also be used to keep a mutable variable which does not cause re-rendering of the component.

// App.jsx file code:

import { useRef } from 'react'
function App() {
  const inputRef = useRef(null);
  const h1Ref = useRef(null);
  const inputHandler = () => {
    console.log("Focused On Input");
    inputRef.current.focus();
    inputRef.current.style.color="red";
    inputRef.current.placeholder="Please enter name";
    //inputRef.current.value="123";
  }

  const Toggle = () => {
    if(inputRef.current.style.display === "none"){
      inputRef.current.style.display="block";
    } else {
      inputRef.current.style.display="none";
    }
  }

  const h1Handler = () => {
    h1Ref.current.style.color ="green"
  }
  const h1Handler2 = () => {
    h1Ref.current.style.color ="white"
  }
  return (
    <div>
      <h1>useRef Hook</h1>
      <button onClick={Toggle}>Toggle</button>
      <input type="text" ref={inputRef} placeholder='Enter Your Name'/>
    
      <button onClick={inputHandler}>Submit</button>

      <h1 ref={h1Ref}>Code Step By Step</h1>
      <button onClick={h1Handler}>Change Color</button>
      <button onClick={h1Handler2}>Reset</button>
    </div>
  )
}

export default App;
