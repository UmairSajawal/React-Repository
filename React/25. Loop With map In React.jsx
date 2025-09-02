// *** Loops In JSX With Map Function ***

// App.jsx file code:

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
        name: 'Ihtasham',
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
        <h1>Loops In JSX With Map Function</h1>
        <table border="1">
            <thead>
            <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Age</td>
                <td>Email</td>
            </tr>
            </thead>
            <tbody>
            {
                userData.map((user)=>(
                <tr key={user.id}>  {/*Make Unique key is important in array loop, otherwise error in console */}
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>{user.email}</td>
                </tr>
            ))
                }
            </tbody>
        </table>
        </div>
    )
}

export default App
