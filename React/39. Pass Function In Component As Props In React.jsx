// ****** Pass Function In Component As Props In React JSX ******

// App.jsx file code:

/*
import User from "./User"

function App() {

  const displayName = (name) => {
    alert(name)
  }

  function getUser(){
    alert("getUser function called")
  }

  return (
    <div>
      <h1>Call parent component from child component</h1>
      <User displayName={displayName} name="Umair sajawal" getUser={getUser}/>
      <User displayName={displayName} name="Shahaan" getUser={getUser}/>
      <User displayName={displayName} name="Ahmed" getUser={getUser}/>
      <User displayName={displayName} name="Ihtisham" getUser={getUser}/>
    </div>
  )
}

export default App
*/

// User.jsx file code:
/*
function User({displayName, name, getUser}){
    return(
        <div>
            <button onClick={() => displayName(name)}>Display Name</button>
            <button onClick={() => getUser()}>Get User</button>
        </div>
    )
}
export default User;
*/