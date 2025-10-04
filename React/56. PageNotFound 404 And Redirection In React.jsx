// ****** 56. PageNotFound 404 And Redirection In React JS ******
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

import { Navigate, Route, Routes } from "react-router"
import Home from "../Home"
import About from "./About"
import Login from "./Login"
import NavBar from "./NavBar"
import PageNotFound from "./PageNotFound"


function App() {
    return (
        <>
        <div>
            <NavBar />

            <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            
            {/* // Note: path="/*" always write at the end */}
            <Route path="/*" element={<PageNotFound />} />

            {/* <Route path="/*" element={<Navigate to="/" />} /> */}
            </Routes>
        </div>
        </>
    )
}

export default App


// PageNotFound.jsx file code:
/*
import { Link } from "react-router";

export default function PageNotFound(){
    return (
        <>
        <div style={{ textAlign: "center", paddingTop: "100px"  }}>
            <div>
                <Link to="/" style={{ textDecoration: "none", color: "black", fontSize: "20px"}}>Go Back To Home</Link>
            </div> <br />
            <img  src="https://media.istockphoto.com/id/860463522/vector/404-error-page-template-for-website-404-alert-flat-design.jpg?s=612x612&w=0&k=20&c=ad0D5cQqnRMRcyQtaFdrk4GgO9LYRYl06V4MReZKsOE=" alt="" />
        </div>
        </>
    )
}
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
