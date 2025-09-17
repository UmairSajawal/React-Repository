// ****** Keep Component Pure In React ******

// means not make variable outside the function, use props, .....


// App.jsx file code:

function App() {

  return (
    <div>
      <h1>Keep Component Pure In React</h1>
      <Cup guest={1}/>
      <Cup guest={2}/>
      <Cup guest={3}/>
      <Cup guest={4}/>
    </div>
  )
}

function Cup({guest}){
   let count=guest;
   return(<h1>We have {count} guests and we have to make {count} cup of Tea</h1>)
}

export default App

