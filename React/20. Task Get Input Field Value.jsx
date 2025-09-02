
import { useState } from "react";
function App() {
const [val,setVal]=useState("Umair Sajawal")
  return (
    <div>
      <h1>Get Input Field Value</h1>
      <input type="text" value={val} onChange={(event)=>setVal(event.target.value)} placeholder="Type something..." />
      <br />
      <h1>{val}</h1>
      <button onClick={() => setVal("")}>Clear</button>
    </div>
  )
}

export default App
