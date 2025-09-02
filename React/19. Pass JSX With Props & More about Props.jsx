// ***** More about Props *****
/*
App.jsx file code:

import User from "./User";
import Wrapper from "./Wrapper";
function App() {
    return (
        <div>
            <h1>Props In React JSX</h1>
            //<User name="John Doe" />
            //<User name="sam" />

            //<User name="Alex" />
            //<User />
            //<User /> 

            // <Wrapper /> 

            <Wrapper color="orange">
                <h1>Hello everyone</h1>
            </Wrapper>

            <Wrapper color="blue">
                <h1>Hello Umair</h1>
            </Wrapper>

            <Wrapper>
                <h1>Hello Admin</h1>
                <h2 style={{color: "red"}}>Please Login</h2>
            </Wrapper>

        </div>
    )
}

export default App

*/

/*
User.jsx file code:

function User({name="New User"}){  // If no name is passed, "New User" will be used as default name
    return(
        <div>
            <h1>Hi, {name}</h1>
        </div>
    )
}
export default User;
*/

/*
Wrapper.js file code:
// *** 1st Method: ***
// function Wrapper(){  
//     return(
//         <div style={{color: "green", border: "2px solid green", width: "300px"}}>
//             <h1>Hello everyone</h1>
//         </div>
//     )
// }
// export default Wrapper;


// *** 2nd Method: ***
function Wrapper({children, color = "green"}){  // If no color is passed, "green" will be used as default color
    return(
        <div style={{color: color, border: "2px solid green", width: "350px", margin: "10px", padding: "2px 0px 2px 10px"}}>
            {children}
        </div>
    )
}
export default Wrapper;
*/