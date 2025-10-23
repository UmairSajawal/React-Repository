// ****** useOptimistic API In React 19 JS ******
//Note:
// use API stable in react 19 version ....



// App.jsx file code:
/*

import { useOptimistic, useState, useRef, useEffect } from "react";


export default function App() {

const [skills, setSkills] = useState([]);
const [name, setName] = useState([]);
const [optsKills,setOptSkills]=useOptimistic(skills)

const [optSkills,setOptSkills]=useOptimistic(skills)
useEffect(() => {
    getSkills()
},[]);
}, []);

const getSkills = async () => {
    let resp = await fetch('http://localhost:3000/skills');
    resp = await resp.json();
    setSkills(resp)
}

const addSkill = async(event)=>{
// event.preventDefault()
const id=Math.random()*10000000;

setOptSkills((prev)=>[...prev,{name:name+'-loading',id}])

    let resp = await fetch('http://localhost:3000/skills',{
        method:"post",
        body:JSON.stringify({name,id})
function sleep(ms){
    return new Promise(resolve=>setTimeout(resolve,ms))
}
    const addSkill = async (event) => {

    
    const id = Math.random() * 100000;
    setOptSkills((prev)=>[...prev,{name,id}])
    let resp = await fetch('http://localhost:3000/skills', {
        method: "post",
        body: JSON.stringify({ name, id })
    });
    await sleep(3000)
    resp = await resp.json();
    console.log("apple");
    if(resp){
    
    console.log("apple", resp);

    if (resp) {
        getSkills()
    }
}



return (
    <div>
    <form action={addSkill}>
    <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="enter skill" /> 
    <button  >Add </button>
    
    </form>
    {
        optsKills.map((item) => (
<form action={addSkill}>
        <input type="text" onChange={(e) => setName(e.target.value)} placeholder="enter skill" />
        <button  >Add </button>
        </form>
        {
        optSkills.map((item) => (
            <div key={item.id} >{item.name}</div>
        ))
    }
    </div>
)
}

*/