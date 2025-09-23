// ****** Update Array In State In React JSX ******

// App.jsx file code:

import { useState } from "react"

function App() {
    const [data, setData] = useState([
        "John", "Doe", "Smith"
    ])
    const [dataDetail, setDataDetail] = useState([
        { name: "Umair", age: 22 },
        { name: "Amir", age: 35 },
        { name: "Hassan", age: 29 }
    ])
    function handleData(name) {
        data[data.length - 1] = name
        setData([...data])
    }
    function handleDataDetail(age) {
        dataDetail[dataDetail.length - 1].age = age
        setDataDetail([...dataDetail])
    }
    return (
        <div>
            <h1>Update Array In State In React</h1>
            <input type="text" onChange={(event) => handleData(event.target.value)} placeholder="Enter your name"/>
            {
            data.map((item, index) => {
                return <h2 key={index}> {item} </h2>
            })
            }
            <hr />

            <input type="text" onChange={(event) => handleDataDetail(event.target.value)} placeholder="Enter last person age"/>
            {
            dataDetail.map((item, index) => {
                return <h2 key={index}> {item.name}, {item.age} </h2>
            })
            }
        </div>
    )
}

export default App
