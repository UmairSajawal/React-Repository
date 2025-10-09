// ****** Tailwind CSS Setup In React  ******

// Imp Note:Make sure you have installed tailwind CSS in your react project.
// If not installed then install it by following the official documentation of tailwind CSS.
// https://tailwindcss.com/docs/guides/vite


//Start:
// main.jsx file code:
/*
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)

*/

// App.jsx file code;
import './App.css'  // Note: import tailwind css in header.css and import header.css here
function App() {

    return (
        <>
            <h1 className="text-3xl font-bold underline text-blue-600 bg-green-500">
                Tailwind CSS Setup In React 
            </h1>
        </>
    )
}

export default App
// App.css file code:
/*
@import "tailwindcss";


*/
// vite.config.js file code:
/*
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        tailwindcss(),
        react()
],
})

*/


// End.