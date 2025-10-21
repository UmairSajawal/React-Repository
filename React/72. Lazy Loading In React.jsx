// ****** Lazy Loading In React JS ******
//Note:
// lazy loading makes react app faster
// Because it loads only those thing which needs like
// when user click on button then load the page otherwise not load

//Start:

// App.jsx file code:
/*
import { lazy } from "react"
import { Suspense, useState } from "react"

const User = lazy(()=>import('./User'))
function App() {
    const [load,setLoad]=useState(false)
    return (
        <>
        <div>
            <h1>Lazy Loading In React</h1>
            <button onClick={()=>setLoad(true)}>Load User</button>
            {
            load ? <Suspense fallback={<h3>Loading .....</h3>}><User /></Suspense> : null
            }
        </div>
        </>
    )
}

export default App

*/

// User.jsx file code:
/*
export default function App(){
    return (
        <div>
            <h1>User Component</h1>
        </div>
    )
}
*/