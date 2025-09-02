// ****** Props In React JSX ******
/* App.jsx file code:
import User from './User';
import College from './College';
import Student from './Student';
import { useState } from 'react';

function App() {
  // let name="Umair Sajawal"
  // let age=25
  // let email="umair@gmail.com"
  let userObject1={
    name:"Umair Sajawal",
    age:25,
    email:"umair@test.com"
  }
  let userObject2={
    name:"Ali",
    age:20,
    email:"ali@gmail.com"
  }
    let userObject3={
    name:"Sajid",
    age:23,
    email:"Sajid@gmail.com"
  }

  let collegeArr=['IT', 'CS', 'SE']

  // Props on event click function
  const [student, setStudent]=useState(" Sam")

  return (
      <div>
        <h1>Props In React JSX</h1>

        {/* <User name={name} age={25} email={email} /> */}
        {/* <User name={" Umair Sajawal"} age={25} email={" umair@gmail.com"} />  /* Use of props, Props mean send data to component file like User.jsx */}
        <User user={userObject1} />
        <User user={userObject2} />
        <User user={userObject3} />

        <College arr={collegeArr[0]} />
        <College arr={collegeArr[1]} />
        <College arr={collegeArr[2]} />
        
        {student && <Student name={student} />}   {/* If student name is not empty then display 'Student:' otherwise no dispaly*/}
        <button onClick={()=>setStudent(" Hashim")}>Change Student Name</button>

      </div>
  )
}

export default App 
*/

/* User.jsx file code:
// 1st method to display name

// function User(props){   //1.fectching data from file from where make props //2.Instead of props, it s alowed to write another word like, data,....
//     return(
//         <div>
//             <h1>User Components</h1>
//             <h1>{props.name}</h1>
//         </div>
//     )
// }
// export default User




// 2nd method to dispaly name, age, email
//1.fectching data from file from where make props //2.Instead of props, it s alowed to write another word like, data,....

// function User({name, age, email}){  // Note: Write same name of varible write in App.jsx file
//     console.log(name) 
//     return(
//         <div>
//             <h1>User Components</h1>
//             <h2>Name:{name}</h2>
//             <h2>Age: {age}</h2>
//             <h2>Email: {email}</h2>
//         </div>
//     )
// }
// export default User



// 3rd method to display name,...., oject
function User({user}){  // Note: Write same name of varible write in App.jsx file 
    return(
        <div>
            <hr />
            <h2>Name:{user.name}</h2>
            <h2>Age: {user.age}</h2>
            <h2>Email: {user.email}</h2>
        </div>
    )
}
export default User
*/

/*
College.jsx file code:
function College({arr}){
    return(
        <div>
            <h2>{arr}</h2>
        </div>
    )
}
export default College;
*/

/*
Student.jsx file code:
// props on event click function
function Student({name}){
    return(
        <div>
            <hr />
            <h1>Student:{name}</h1>
            <hr />
        </div>
    )
}
export default Student
*/