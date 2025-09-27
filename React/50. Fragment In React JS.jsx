// ****** Fragment In React JS ******
// Not generates html child element
// Use as a pvarent element
// use fragement instead of div as a parent element because div creates issues in loops....
// <> also use as <Fragment>

// App.jsx file code:

import { Fragment } from "react"

function App() {
  return (
  /*  <div>
        <h1>Fragment In React JS</h1>
        <h1>Fragment In React JS</h1>
      </div>  */

  /*   <Fragment>
        <h1>Fragment In React JS</h1>
        <h1>Fragment In React JS</h1>
      </Fragment> */
  <>
     <Data />
     <Data />
     <Data />
     <Data />
  </>

  )
}

function Data(){
  return (
    <>
      <h1>Fragment Data In React JS</h1>
      <h2>Data</h2>
    </>
  )
}
export default App


