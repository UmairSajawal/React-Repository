// ****** useTransition hook In React 19 ******

// App.jsx file code:
import { useTransition } from "react"

function App() {
  const [pending, startTransition] = useTransition(false)

  const handelButton = () => {
    startTransition (async()=>{     // Note: asyn function just worked in lateset version 19 and above
      await new Promise(res=>setTimeout(res, 3000))
    }

  )
  
  }
  return (
    <div>
      <h1>useTransition hook In React 9</h1>
      {
        pending?
        <img style={{width: "200px"}} src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="" />
        :null
      }
      <button disabled={pending} onClick={handelButton}>Submit</button>
    </div>
  )
}

export default App


