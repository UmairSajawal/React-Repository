// function App() {
//   //alert(Sum());
//   // 1stm Method: This is Normal function output 
//   return (
//     <div>
//       {/* 2nd Method:  This is Normal function output*/}
//       <h1>Components In React {Sum()}</h1>
//       <Fruit />
//       <Color />
//     </div>
//   );
// }

// function Fruit() {
//   return (
//     <div>
//       <h2>Mango</h2>
//     </div>
//   );
// }

// function Color() {
//   return (
//     <div>
//       <h2>Yellow</h2>
//     </div>
//   );
// }
// //Normal function: How to use a normal function in React
// function Sum(){
//   return 10+10
// }
// export default App;






// ****** Importing and Exporting Components in React: ******

// import Login, {Profile,Setting, UserKey} from './UserComponent';
// function App() {
//   return (
//     <div>
//       <h2>Importing and Exporting Components</h2>
//       <Login />
//       <Profile />
//       <Setting /> 
//       <h2>{UserKey}</h2>
//     </div>
//   )
// }

// export default App;



// ****** JSX in React: ******
// function App() {
// const Username = "Umair Sajawal";
// let x = 8;
// let y = 2;
//   return (
//     <div>
//       <h1>JSX in React</h1>
//       <h1>{Username} </h1>
//       <h1>{10 + 30 + 2}</h1>
//       <h1>{x * y}</h1>
//       <button onClick={() => alert("Hello, Button Clicked")}>Click ME</button>
//     </div>
//   )
// }
// export default App;


// ******  React Without JSX: ******
// import { createElement } from "react";
// function App() {
//   return createElement("h1",{class:"h1 tag"},"H1 Tag");
//   //return createElement("div",{id:"rootDiv"},"Hello, Div"); // Syntax : createElement(Make element, Give id/class/attr, Write text)
  
//   //if write with jsx so:
//   // return (
//   //   <div className="rootDiv">Hello div</div>
//   // )

// }
// export default App;



// ******  React JSX Exercise Implementation: ******

// home.html file code
/*
<h1>Umair Sajawal Todo</h1>
<img 
    src="img\largebox.jpg" 
    alt="Person Photo"
    class="photo"
    style="height: 250px; width: 250px;"
/>
<ul>
    <li>Red Light</li>
    <li>Green Light</li>
    <li>Yellow Light</li>
</ul>
<button onclick="callFun()">Click Me</button>

<script>
    function callFun() {
        alert("Function Called");
    }
</script> 
*/

// converts this html code into react jsx code
// ToDo.jsx file code
/*
import largebox from "./img/largebox.jpg";

function ToDo() {
    function callFun() {
        alert("Function Called");
    }

    return (
        <div>
            <h1>Umair Sajawal Todo</h1>
            <img 
                src={largebox}   // use the imported image here
                alt="Person Photo" 
                className="photo"
                style={{ height: "250px", width: "250px" }} // React style syntax
            />
            <ul>
                <li>Red Light</li>
                <li>Green Light</li>
                <li>Yellow Light</li>
            </ul>
            <button onClick={callFun}>Click Me</button>
        </div>
    );
}

export default ToDo;
*/

// App.jsx file code:
/*
import ToDo from "./ToDo"
function App() {
    return (
        <div>
            <h1>React JSX Exercise</h1>
            <ToDo />
        </div>

    )
}

export default App
*/


// ******  JSX With Curly Braces: ******
/*
App.jsx File Code:

function App() {
    let name="Umair Sajawal";
    let x=10;
    let y=10;
function Fruit(){       // with function
return "Strawberry";
}

function Sum(a, b){
    return a+b;
}

function Operation(a,b, op){ // With Operations(+, -, **, ...)
    if(op=="+"){
    return a+b;
    }else if(op=="-"){
    return a-b;
    }else{
    return a**b;
    }
}

  const userObj = {              // With Object
        name: "Umair Sajawal",
        email: "umair@gmail.com",
        age: 25,
        location: "Pakistan"
        }

  const userArr = ['peter', 'john', 'doe']  // With Array

  // store image address in a variable
let path = "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-118143566.jpg"
return (
    <div>
        <h1>JSX With Curly Braces</h1>
        <h1>{name}</h1>
        <h1>{name?name:"No Name Found"}</h1>
        <h1>{x+y}</h1>
        {Fruit()}
        <h1>{Fruit()}</h1>
        <h1>{Sum(110, 20)}</h1>
        <h1>{Operation(10,2, "+")}</h1>
        <h1>{userObj.name}</h1>
        <h3>{userObj.email}</h3>
        <h3>{userObj.location}</h3>
        <h2>{userArr[0]}</h2>
        <h3>{userArr[2]}</h3>
        <img src={path} alt="Person Photo" class="photo" style={{height: "300px", width: "350px"}} /> //Display image through storing images address in variable and write variable name to display image like :{path}
    </div>
    )
}

export default App


// ******  Event And Function Call In React JSX : ******
/*
// Note : In javaScript, to run function in output need to call a function like: function() and  In React JSX, to run function in output need to Define a function lke: {function}
// Note : In React JSX, to run an arrow function in output need to Define a function like: {() => function("pass parameter")}
function App() {
    function callFun() {
        alert("Function Called");
    }

    const Fruit = (name) => {   // With Arrow Function
        alert(name);
    } 
return (
    <div>
        <h1>Event And Function Call</h1>
        <button onClick={callFun}>Click Me</button> // In react jsx, method to run simple function
        <button onClick={() => Fruit("apple called")}>Apple</button> // In react jsx, method to run Arrow function
        <button onClick={()=>Fruit("banana called")}>Banana</button> 
    </div>
    )
}

export default App

*/



/* Our website : https://www.thecodingskills.com/
Code and Notes : https://www.thecodingskills.com/cours... */