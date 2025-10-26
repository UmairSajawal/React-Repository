// App.jsx file code:
/*
import { useState } from "react"

function App() {
  const colors = JSON.parse(localStorage.getItem('color'))
  const [r, setR] = useState(colors && colors.r ? colors.r : 0)
  const [g, setG] = useState(colors && colors.g ? colors.g : 0)
  const [b, setB] = useState(colors && colors.b ? colors.a : 0)
  const save = () => {
    console.log("saved")
    localStorage.setItem("color", JSON.stringify({r,g,b}))
  }
  return (
    <>
      <h1>Color Mixer In React</h1>
      <div>
        <div style={{backgroundColor: "rgb("+r+", "+g+", "+b+")", height: "200px", width: "200px"}}>

        </div>
        <br /><br />
        <input type="range" onChange={(e)=>setR(e.target.value)} value={r}/>
        <br /><br />
        <input type="range" onChange={(e)=>setG(e.target.value)} value={g}/>
        <br /><br />
        <input type="range" onChange={(e)=>setB(e.target.value)} value={b}/>
        <br /><br />
        <button onClick={save}>Save Color</button>
      </div>
    </>
  )
}

export default App

*/