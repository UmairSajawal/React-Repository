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
            <h1>Basic Routing In React</h1>
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
export default function NavBar(){
    return (
        <div>
            <Link to="/"><h1>Home</h1></Link>
            <Link to="/about"><h1>About</h1></Link>
            <Link to="/login"><h1>Log In</h1></Link>
        </div>
    )
}
*/