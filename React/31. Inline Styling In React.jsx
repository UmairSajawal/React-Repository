// ******* Inline Styling In React *******


// App.jsx file code:

function App() {

    const tagStyle = { 
        color: 'orange', 
        backgroundColor: 'grey', 
        padding: '10px',
        marginBottom: '10px'
    }

    const cardStyle = {
        width: '200px', 
        border: '1px solid #cccccc3b', 
        borderRadius: '5px', 
        boxShadow: '1px 2px 3px 0px #cccccc57',
        margin: '10px'
        }
    return (
        <>
        <h1 style={tagStyle}>Inline Styling In React JSX</h1>
        <div style={{display: 'flex', flexWrap: 'wrap'}}>  {/* Note: Added flexWrap: "wrap" to handle overflow means use for scrolling down */}
            <div style={cardStyle}>
            <img style={{width: '200px', borderBottom: '1px solid #cccccc57'}} src="https://img.freepik.com/premium-vector/admin-clerk-with-laptop-icon_1076610-101107.jpg" alt="" />

            <div style={{padding: '5px'}}>
                <h4>Software Developer</h4>
                <p>Umair Sajawal</p>
            </div>
            </div>

            <div style={cardStyle}>
            <img style={{width: '200px', borderBottom: '1px solid #cccccc57'}} src="https://img.freepik.com/premium-vector/admin-clerk-with-laptop-icon_1076610-101107.jpg" alt="" />

            <div style={{padding: '5px'}}>
                <h4>Software Enginneer</h4>
                <p>M Sajawal</p>
            </div>
            </div>

            <div style={cardStyle}>
            <img style={{width: '200px', borderBottom: '1px solid #cccccc57'}} src="https://img.freepik.com/premium-vector/admin-clerk-with-laptop-icon_1076610-101107.jpg" alt="" />

            <div style={{padding: '5px'}}>
                <h4>Software Developer</h4>
                <p>M Shahzad</p>
            </div>
            </div>

            <div style={cardStyle}>
            <img style={{width: '200px', borderBottom: '1px solid #cccccc57'}} src="https://img.freepik.com/premium-vector/admin-clerk-with-laptop-icon_1076610-101107.jpg" alt="" />

            <div style={{padding: '5px'}}>
                <h4>Web Developer</h4>
                <p>Umer Farooq</p>
            </div>
            </div>

            <div style={cardStyle}>
            <img style={{width: '200px', borderBottom: '1px solid #cccccc57'}} src="https://img.freepik.com/premium-vector/admin-clerk-with-laptop-icon_1076610-101107.jpg" alt="" />

            <div style={{padding: '5px'}}>
                <h4>Software Developer</h4>
                <p>Umair Sajawal</p>
            </div>
            </div>

            <div style={cardStyle}>
            <img style={{width: '200px', borderBottom: '1px solid #cccccc57'}} src="https://img.freepik.com/premium-vector/admin-clerk-with-laptop-icon_1076610-101107.jpg" alt="" />

            <div style={{padding: '5px'}}>
                <h4>Software Enginneer</h4>
                <p>M Sajawal</p>
            </div>
            </div>

            <div style={cardStyle}>
            <img style={{width: '200px', borderBottom: '1px solid #cccccc57'}} src="https://img.freepik.com/premium-vector/admin-clerk-with-laptop-icon_1076610-101107.jpg" alt="" />

            <div style={{padding: '5px'}}>
                <h4>Software Developer</h4>
                <p>Umair Sajawal</p>
            </div>
            </div>

            <div style={cardStyle}>
            <img style={{width: '200px', borderBottom: '1px solid #cccccc57'}} src="https://img.freepik.com/premium-vector/admin-clerk-with-laptop-icon_1076610-101107.jpg" alt="" />

            <div style={{padding: '5px'}}>
                <h4>Software Enginneer</h4>
                <p>M Sajawal</p>
            </div>
            </div>

            <div style={cardStyle}>
            <img style={{width: '200px', borderBottom: '1px solid #cccccc57'}} src="https://img.freepik.com/premium-vector/admin-clerk-with-laptop-icon_1076610-101107.jpg" alt="" />

            <div style={{padding: '5px'}}>
                <h4>Software Developer</h4>
                <p>Umair Sajawal</p>
            </div>
            </div>

            <div style={cardStyle}>
            <img style={{width: '200px', borderBottom: '1px solid #cccccc57'}} src="https://img.freepik.com/premium-vector/admin-clerk-with-laptop-icon_1076610-101107.jpg" alt="" />

            <div style={{padding: '5px'}}>
                <h4>Software Enginneer</h4>
                <p>M Sajawal</p>
            </div>
            </div>

            <div style={cardStyle}>
            <img style={{width: '200px', borderBottom: '1px solid #cccccc57'}} src="https://img.freepik.com/premium-vector/admin-clerk-with-laptop-icon_1076610-101107.jpg" alt="" />

            <div style={{padding: '5px'}}>
                <h4>Software Developer</h4>
                <p>Umair Sajawal</p>
            </div>
            </div>

            <div style={cardStyle}>
            <img style={{width: '200px', borderBottom: '1px solid #cccccc57'}} src="https://img.freepik.com/premium-vector/admin-clerk-with-laptop-icon_1076610-101107.jpg" alt="" />

            <div style={{padding: '5px'}}>
                <h4>Software Enginneer</h4>
                <p>M Sajawal</p>
            </div>
            </div>

        </div>
        </>
    )
}

export default App



