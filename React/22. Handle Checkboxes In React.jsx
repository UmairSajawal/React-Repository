// ***Handle Checkboxes In React JSX ***
/*
App.jsx file code:

import Skills from './Skills.jsx';
function App() {

    return (
        <div>
        <h1>Handle Checkboxes In React JSX</h1>
        <Skills />
        </div>
    )
}

export default App

*/

/*
Skills.jsx file code:
import { useState } from "react";

function Skills(){
    const [skills,setSkills]=useState([])
    const handleSkills=(event)=>{
        console.log(event.target.value.checked)
        if(event.target.checked){
            // ...skills, this is spread operator used when needed to display all previous value in array
            setSkills([...skills,event.target.value])
        }else{
            setSkills(skills.filter((items)=> items!==event.target.value))
        }
    }
    return (
        <div>
            <h1>Skills</h1>
            <input type="checkbox" onChange={handleSkills} id="php" value={"PHP"}/>
            <label htmlFor="php">PHP</label>
            <br />
            <input type="checkbox" onChange={handleSkills} id="javascript" value={"JavaScript"}/>
            <label htmlFor="javascript">JavaScript</label>
            <br />
            <input type="checkbox" onChange={handleSkills} id="python" value={"Python"}/>
            <label htmlFor="python">Python</label>
            <br />
            <input type="checkbox" onChange={handleSkills} id="ruby" value={"Ruby"}/>
            <label htmlFor="ruby">Ruby</label>
            <br />

            <h1>{skills.toString()}</h1>
        </div>
    );
}
export default Skills;

*/