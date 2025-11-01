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