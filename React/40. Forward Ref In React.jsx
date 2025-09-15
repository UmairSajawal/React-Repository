// ****** Forward Ref In React JSX ******

// App.jsx file code:

/*
import { useRef } from "react"
import User from "./User"

function App() {
  const inputRef = useRef(null);
  const updateInput = () => {
    inputRef.current.value = "1000"
    inputRef.current.focus()
    inputRef.current.style.color = "red"
    //console.log(inputRef.current.value)
  } 
  return (
    <div>

      <h1>Forward Ref In React JSX</h1>

      <User ref={inputRef} />
      <button onClick={updateInput}>Update Input Field</button>

    </div>
  )
}

export default App

*/



// User.jsx file code:
/*

// To use forward ref in lower version of react we have to use React.forwardRef() method. (old method)
// For Old Version of react from 18 and lower
// function User(ref){
//     return(
//         <div>
//             <input type="text" ref={ref} />  
//         </div>
//     )
// }
// export default User;


// Preferable way to use forward ref in react 19 and above
// Imp Note: This method to use forward ref is working only from react 19 and above.      (new method)
function User(props){
    return(
        <div>
            <input type="text" ref={props.ref} />  
        </div>
    )
}
export default User;

*/