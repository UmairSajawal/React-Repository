// ****** React Router 7 In React 19 Version ******
// Note : in the previous year 2024 the react router 7 not proper working on react 19 version, 
// so now the react updated in 19 version, now we can easily use same like as react 18 version.
// So, now all the code is written bellow same as well as react 18 version file code.

// Make sure you have installed react-router package
// You can install it by using the following command: npm install react-router



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
import { Routes, Route, Link} from "react-router"
import Home from "./Home"
import About from "./About"
function App() {
    return (
        <div>
            <Link to="/">Home</Link>
            <br />
            <Link to="/about">About</Link>

            <h1>React Router 7 In React 18 Version</h1>
            
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            </Routes>
        </div>
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