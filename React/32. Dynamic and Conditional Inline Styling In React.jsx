// ******* Inline Styling In React *******


// App.jsx file code:

import { useState } from 'react'
function App() {
 const [cardStyle, setCardStyle] = useState(  // Use useState to update the cardStyle object
        {
            width: '200px', 
            border: '1px solid #cccccc3b', 
            borderRadius: '5px', 
            boxShadow: '1px 2px 3px 0px #cccccc57',
            margin: '10px'
        }
    )
    const [textColor, setTextColor] = useState('black');
    const [grid, setGrid] = useState("true");

    const handleTheme=(bgColor, textColor) => {
        //console.log(bgColor, textColor);
        setCardStyle({...cardStyle, backgroundColor: bgColor})
        setTextColor(textColor);
    }

    return (
        <>
        <h1 style={{color: 'red'}}>Dynamic and Conditional Inline Styling In React JSX</h1>

        <button onClick={()=>handleTheme('grey', 'green')}>Grey Theme</button>
        <button onClick={()=>handleTheme('white', 'black')}>Default Theme</button>
        <button onClick={()=>setGrid(!grid)}>Toggle Grid</button>

        <div style={{display: grid ?"flex" : "block", flexWrap: 'wrap'}}>  {/* Note: Added flexWrap: "wrap" to handle overflow means use for scrolling down */}
            <div style={cardStyle}>
            <img style={{width: '200px', borderBottom: '1px solid #cccccc57'}} src="https://img.freepik.com/premium-vector/admin-clerk-with-laptop-icon_1076610-101107.jpg" alt="" />
            <div style={{padding: '5px', color: textColor}}>
                <h4>Software Developer</h4>
                <p>Umair Sajawal</p>
            </div>
            </div>

            <div style={cardStyle}>
            <img style={{width: '200px', borderBottom: '1px solid #cccccc57'}} src="https://img.freepik.com/premium-vector/admin-clerk-with-laptop-icon_1076610-101107.jpg" alt="" />
            <div style={{padding: '5px', color: textColor}}>
                <h4>Software Developer</h4>
                <p>Umair Sajawal</p>
            </div>
            </div>

            <div style={cardStyle}>
            <img style={{width: '200px', borderBottom: '1px solid #cccccc57'}} src="https://img.freepik.com/premium-vector/admin-clerk-with-laptop-icon_1076610-101107.jpg" alt="" />
            <div style={{padding: '5px', color: textColor}}>
                <h4>Software Developer</h4>
                <p>Umair Sajawal</p>
            </div>
            </div>

            <div style={cardStyle}>
            <img style={{width: '200px', borderBottom: '1px solid #cccccc57'}} src="https://img.freepik.com/premium-vector/admin-clerk-with-laptop-icon_1076610-101107.jpg" alt="" />
            <div style={{padding: '5px', color: textColor}}>
                <h4>Software Developer</h4>
                <p>Umair Sajawal</p>
            </div>
            </div>

            <div style={cardStyle}>
            <img style={{width: '200px', borderBottom: '1px solid #cccccc57'}} src="https://img.freepik.com/premium-vector/admin-clerk-with-laptop-icon_1076610-101107.jpg" alt="" />
            <div style={{padding: '5px', color: textColor}}>
                <h4>Software Developer</h4>
                <p>Umair Sajawal</p>
            </div>
            </div>

            <div style={cardStyle}>
            <img style={{width: '200px', borderBottom: '1px solid #cccccc57'}} src="https://img.freepik.com/premium-vector/admin-clerk-with-laptop-icon_1076610-101107.jpg" alt="" />
            <div style={{padding: '5px', color: textColor}}>
                <h4>Software Developer</h4>
                <p>Umair Sajawal</p>
            </div>
            </div>

            <div style={cardStyle}>
            <img style={{width: '200px', borderBottom: '1px solid #cccccc57'}} src="https://img.freepik.com/premium-vector/admin-clerk-with-laptop-icon_1076610-101107.jpg" alt="" />
            <div style={{padding: '5px', color: textColor}}>
                <h4>Software Developer</h4>
                <p>Umair Sajawal</p>
            </div>
            </div>

            <div style={cardStyle}>
            <img style={{width: '200px', borderBottom: '1px solid #cccccc57'}} src="https://img.freepik.com/premium-vector/admin-clerk-with-laptop-icon_1076610-101107.jpg" alt="" />
            <div style={{padding: '5px', color: textColor}}>
                <h4>Software Developer</h4>
                <p>Umair Sajawal</p>
            </div>
            </div>

            <div style={cardStyle}>
            <img style={{width: '200px', borderBottom: '1px solid #cccccc57'}} src="https://img.freepik.com/premium-vector/admin-clerk-with-laptop-icon_1076610-101107.jpg" alt="" />
            <div style={{padding: '5px', color: textColor}}>
                <h4>Software Developer</h4>
                <p>Umair Sajawal</p>
            </div>
            </div>

            <div style={cardStyle}>
            <img style={{width: '200px', borderBottom: '1px solid #cccccc57'}} src="https://img.freepik.com/premium-vector/admin-clerk-with-laptop-icon_1076610-101107.jpg" alt="" />
            <div style={{padding: '5px', color: textColor}}>
                <h4>Software Developer</h4>
                <p>Umair Sajawal</p>
            </div>
            </div>
        
        </div>
        </>
    )
}

export default App
