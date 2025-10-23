// ****** use API In React 19 JS ******
//Note:
// use API stable in react 19 version
// use of <Suspense></Suspense> is important when you use "use API". Other cause issues
// for better performance write:
// const fetchData = () => fetch("https://dummyjson.com/users").then((response)=>response.json());
// const userResource = fetchData();  
// before function App() or outside the function App()

// App.jsx file code:
/*
import { use } from "react";
import { Suspense } from "react";

const fetchData = () => fetch("https://dummyjson.com/users").then((response)=>response.json());
const userResource = fetchData();
export default function App() {
    return (
        <>
        <div>
        <h1>use API In React 19</h1>
        <Suspense fallback="Loading...">
            <Users userResource = {userResource}/>
        </Suspense>
        </div>
        </>
    )
    }


    const Users = ({userResource}) => {
    console.log(userResource)
    const userData = use(userResource)
    console.log(userData)
    return (
        <div>
        <h1>Users List</h1>
        {
        userData?.users?.map((user, index) =>(
            <h1 key={index}>
            {user.firstName}
            </h1>
        ))
        }
        </div>
        
    )
}

*/