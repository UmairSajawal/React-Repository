// *** Reuse Component In Loop With Map ***

//App.jsx file code: 
import User from './User.jsx'; // Importing User component
function App() {
  //const userNames=['Umair', 'Shahaan', 'Ihtasham', 'Ahmed'];
    const userData=[
    {
        name: 'Umair',
        age: 25,
        email: 'umair@example.com',
        id: 1
    },
    {
        name: 'Shahaan',
        age: 23,
        email: 'shahaan@example.com',
        id: 2
    },
    {
        name: 'Ihtisham',
        age: 19,
        email: 'ihtasham@example.com',
        id: 3
    },
    {
        name: 'Ahmed',
        age: 27,
        email: 'ahmed@example.com',
        id: 4
    }
    ]
    return (
        <div>
        <h1>Reuse Component In Loop</h1>
        {
            userData.map((user) => (
            <div key={user.id}> {/*Make Unique key is important in array loop, otherwise error in console */}
            <User data={user} />
            </div>
            ))
        }
        </div>
    )
}

export default App


// User.jsx file code:
/*
function User({data}){
    return(
        <div style={
            {
                border: '2px solid green',
                padding: '10px',
                margin: '10px',
                borderRadius: '10px',
            }
        }>
            <h3>Name: <span style={{color: 'green'}}>{data.name}</span></h3>
            <h3>Age: <span style={{color: 'green'}}>{data.age}</span></h3>
            <h3>Email: <span style={{color: 'green'}}>{data.email}</span></h3>
        </div>
    )
}
export default User;
*/