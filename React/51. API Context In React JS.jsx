// ****** API Context In React JS ******

// App.jsx file code:

import { useState } from "react"
import College from "./College"
import { SubjectContext } from "./ContextData"

function App() {
  const [subject, setSubject]=useState('')
  return (
    <div style={{backgroundColor: "yellow", padding: "10px"}}>
      <SubjectContext.Provider value={subject}>
        <select value={subject} onChange={(event)=>setSubject(event.target.value)}>
          <option value="">Select Subject</option>
          <option value="Maths">Maths</option>
          <option value="English">English</option>
          <option value="Physics">Physics</option>
        </select>
        <h1>API Context In React JS</h1>
        <button onClick={(e)=>setSubject('')}>Clear Data</button>
        <College />
      </SubjectContext.Provider>
    </div>
  )
}

export default App

// College.jsx file code:
import Claass from "./Claass";

function College(){
    return(
        <div style={{backgroundColor: "orange", padding: "10px"}}>
            <h1>College Component</h1>
            <Claass />
        </div>
    )
}
export default College;

// Claass.jsx file code:
import Student from "./Student";

function Claass(){
    return(
        <div style={{backgroundColor: "skyblue", padding: "10px"}}>
            <h1>Claass Component</h1>
            <Student />
        </div>
    )
}
export default Claass;

// Student.jsx file code:
import Subject from "./Subject";

function Student(){
    return(
        <div  style={{backgroundColor: "green", padding: "10px"}}>
            <h1>Student Component</h1>
            <Subject />
        </div>
    )
}
export default Student;

// Subject.jsx file code:
import { useContext } from "react";
import Student from "./Student";
import { SubjectContext } from "./ContextData";

function Subject(){
    const subject = useContext(SubjectContext)
    return(
        <div style={{backgroundColor: "red", padding: "10px"}}>
            <h1>Subject Component: {subject}</h1>
    
        </div>
    )
}
export default Subject;

// ContextData file code:
import { createContext } from "react";

export const SubjectContext = createContext("Maths")