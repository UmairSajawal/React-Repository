// ******* External Styling In React *******

/*
App.jsx file code:
import UserProfile from "./UserProfile"
function App() {

    return (
        <>
        <h1>Style With CSS Module In React</h1>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            <UserProfile />
            <UserProfile />
            <UserProfile />
            <UserProfile />
            <UserProfile />
            <UserProfile />
            <UserProfile />
            <UserProfile />
            <UserProfile />
            <UserProfile />
            <UserProfile />
            <UserProfile />
            <UserProfile />
            <UserProfile />

        </div>
        </>
    )
}

export default App

*/

/*
UserProfile.jsx file code:

import style from './css/UserProfile.module.css'
const UserProfile = () => {
    return (
        <div>
            <h1 className={style.heading}>User Profile</h1>
            <div className={style.card}>
                <div>
                    <img className={style.img} src="https://img.freepik.com/premium-vector/admin-clerk-with-laptop-icon_1076610-101107.jpg" alt="" />
                    <div>
                        <h4>Software Developer</h4>
                        <p>Umair Sajawal</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UserProfile  
*/

/*
UserProfile.jsx file code:

.heading {
    color: red;
}
.card {
    width: 200px; 
    border: 1px solid #cccccc3b; 
    border-radius: 5px; 
    box-shadow: 1px 2px 3px 0px #cccccc57;
    margin: 10px;
}
.img {
    width: 200px;
    border-bottom: 1px solid #cccccc57;
}
.card h4, .card p {
    padding: 5px;
}
*/