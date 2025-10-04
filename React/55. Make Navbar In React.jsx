// ****** Basic Routing - React Router 7 In React ******
// Note : in the previous year 2024 the react router 7 not proper working on react 19 version, 
// so now the react updated in 19 version, now we can easily use same like as react 18 version.
// So, now all the code is written bellow same as well as react 18 version file code.

// Imp Note:Make sure you have installed react-router package
// You can install it by using the following command: npm install react-router


//Start:
// main.jsx file code:
/*
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>

)
*/

// App.jsx file code;
/*
import { Route, Routes } from "react-router"
import Home from "../Home"
import About from "./About"
import Login from "./Login"
import NavBar from "./NavBar"

function App() {
    return (
        <>
        <div>
            <NavBar />

            <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />

            </Routes>
        </div>
        </>
    )
}

export default App

*/


// Home.jsx file code:
/*
function Home() {
    return (
        <div>
            <h1>Home Page</h1>
        </div>
    )
}
export default Home
*/


// About.jsx file code:
/*
function About() {
    return (
        <div>
            <h1>About Page</h1>
        </div>
    )
}
export default About
*/


// Login.jsx file code:
/*
export default function Login(){
    return (
        <>
            <h1>Login Page</h1>
        </>
    )
}
 */


// NavBar.jsx file code:
/*
import { Link } from "react-router";
import './header.css'
export default function NavBar(){
    return <div className="header">
        <div>
            <Link className="link" to="/"><h2>Logo</h2></Link>
        </div>
        <div>
            <ul>
                <li>
                    <Link className="link" to="/">Home</Link>
                    </li>
                <li>
                    <Link className="link" to="/about">About</Link>
                </li>
                <li>
                    <Link className="link" to="/login">Log In</Link>
                </li>
            </ul>
        </div>
    </div>
    
}
*/

// header.css file code:
/*
body {
    margin: 0;
    padding: 0;
}
.header {
    display: flex;
    justify-content: space-between;
    background-color: rgb(201, 142, 142);
    padding: 10px;
}

.header ul{
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
}

.header ul li{
    justify-content: space-around;
    width: 100px;
    padding: 10px;
}

.header .link h2 {
    margin: 0;
    padding: 0;
}

.header .link {
    text-decoration: none;
}
*/