// 1. Delete App.css File
// 2. Change text in <title>Gemini Clone</title> in index.html file

// App.jsx file code:
/*
import React from "react"
import Sidebar from "./components/Sidebar/sidebar"

function App() {

  return (
    <>
       <Sidebar />
       <Main />
    </>
  )
}

export default App
*/

// Sidebar.jsx file code:
/*
import React from "react"
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { useState } from "react"
function Sidebar() {
    const [extended, setExtended] = useState(false)
    return (
        <>
            <div className="sidebar">
                <div className="top">
                    <img onClick={()=>setExtended(prev=>!prev)} className="menu" src={assets.menu_icon} alt="" />
                    <div className="new-chat">
                        <img src={assets.plus_icon} alt="" />
                        {extended ? <p>New Chat</p> : null}
                    </div>
                    {
                        extended
                            ?
                            <div className="recent">
                                <p className="recent-title">Recent</p>
                                <div className="recent-entry">
                                    <img src={assets.message_icon} alt="" />
                                    <p>What is react...</p>
                                </div>
                            </div>
                            : null
                    }
                </div>
                <div className="bottom">
                    <div className="bottom-item recent-entry">
                        <img src={assets.question_icon} alt="" />
                        {extended ? <p>Help</p> : null}
                    </div>
                    <div className="bottom-item recent-entry">
                        <img src={assets.history_icon} alt="" />
                        {extended ? <p>Activity</p> : null}
                    </div>
                    <div className="bottom-item recent-entry">
                        <img src={assets.setting_icon} alt="" />
                        {extended ? <p>Settings</p> : null}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar

*/

// Main.jsx file code:

/*
import React from "react"
import './Main.css'
import { assets } from "../../assets/assets"
function Main() {

  return (
    <>
       <div className="main">
          <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
          </div>
          <div className="main-container">
            <div className="greet">
                <p><span>Hello, Dev.</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest beautiful places to see on an upcoming road trip</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Breifly summarize the concept: urban planning</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Brainstorm team bonding activities for our work retreat</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Imrpve the readability of the following code</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
            <div className="main-bottom">
                <div className="search-box">
                    <input type="text" placeholder="Enter a prompt here" />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img src={assets.send_icon} alt="" />
                    </div>
                </div>
                <p>
                    Gemini may display inaccurate info, including about people, so double-check its response. Your privacy and Gemini Apps
                </p>
            </div>
          </div>
       </div>
    </>
  )
}

export default Main

*/

// Main.css file code:

/*
.main {
    flex: 1;
    padding-bottom: 15vh;
    min-height: 100vh;
    position: relative;
}

.main .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 22px;
    padding: 20px;
    color: #585858;
}

.main .nav img {
    width: 40px;
    border-radius: 50%;
}

.main-container {
    max-width: 900px;
    margin: auto;
}

.main .greet {
    margin: 50px 0;
    font-size: 56px;
    color: #c4c5c7;
    padding: 20px;
    font-weight: 500;
}

.main .greet span {
    background: -webkit-linear-gradient(16deg,#4b90ff,#ff5546);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.main .cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px,1fr));
    gap: 15px;
    padding: 20px;
}

.main .card {
    height: 200px;
    padding: 15px;
    background-color: #f0f4f9;
    border-radius: 10px;
    position: relative;
    cursor: pointer;
}

.main .card img {
    width: 35px;
    padding: 5px;
    position: absolute;
    background-color: white;
    bottom: 10px;
    right: 10px;
}

.main .card p {
    color: #585858;
    font-size: 17px;
}

.main .card:hover {
    background-color: #dfe4ea;
}
*/


// index.css file code:
/*
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Outfit;
}

#root {
  min-height: 100vh;
  display: flex;
}
*/


// Sidebar.css file code:

/*
.sidebar {
    min-height: 100vh;
    display: inline-flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #f0f4f9;
    padding: 12px 15px;
}

.sidebar img {
    width: 20px;
}

.sidebar .menu {
    display: block;
    margin-left: 10px;
    cursor: pointer;
}

.sidebar .new-chat{
    margin: 10px;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 10px 15px;
    background-color: #e6eaf1;
    border-radius: 50px;
    font-size: 14px;
    color: grey;
    cursor: pointer;
}

.sidebar .recent {
    display: flex;
    flex-direction: column;
}

.sidebar .recent-title {
    margin-top: 30px;
    margin-bottom: 20px;
}

.sidebar .recent-entry {
    display: flex;
    align-items: start;
    gap: 10px;
    padding: 10px;
    padding-right: 40px;
    border-radius: 50px;
    color: #282828;
    cursor: pointer;
}

.sidebar .recent-entry:hover {
    background-color: #e2e6eb;
}

.sidebar .bottom {
    display: flex;
    flex-direction: column;
}

.sidebar .bottom-item {
    padding-right: 10px;
    cursor: pointer;
}

*/

