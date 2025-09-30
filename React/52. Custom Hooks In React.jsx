// ****** Custom Hooks In React JS ******
// Important Notes:
// Custom Hooks are the functions which we create by ourselves in React JS.
// Custom Hooks always start with "use" word.
// We can use the existing hooks like useState, useEffect etc to create our custom hooks.
// We can use custom hooks in multiple components.
// We can also use other custom hooks inside a custom hook.

// App.jsx file code:

import useToggle from "./useToggle"
function App() {
  const [value, toggleValue] = useToggle(true);  // we use custom hook here
    return (
        <div>
        <button onClick={toggleValue}>Toggle Heading</button>
        <button onClick={() => toggleValue(false)}>Hide</button>
        <button onClick={() => toggleValue(true)}>Show</button>
        {/* <h1>Custom Hooks In React JS</h1> */}

        {
            value? <h1>Custom Hooks In React JS</h1>:null
        }

        </div>
    )
}
export default App


// useToggle.jsx file code:

/*
import { useState } from "react"

const useToggle = (defaultVal) => {
    const [value, setValue] = useState(defaultVal)
    function toggleValue(val) {
        if (typeof val != "boolean"){
            setValue(!value) // If the value is not boolean (true, false) not set the value
        }else {
            setValue(val)   // If the value is boolean (true, false) set the value
        }
    }
    return [value, toggleValue];
}
export default useToggle
*/