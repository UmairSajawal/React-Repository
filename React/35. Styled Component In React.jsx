// ******* Styled Component In React *******

// Note: You need to install styled-components package first by using the command: "npm install styled-components" or "npm i styled-components"
// Note: Import styled from 'styled-components' to use styled components in your React application.
// Note: You can create styled components in two ways: using template literals (``) or using an object.
// Note: Example: const StyledBtn = styled.button` in the S always Capital and after . write real name like button.
/*
App.jsx file code:

import styled from 'styled-components'
function App() {

    // Option 1: Creating styled component With ``
    // const Heading = styled.h1`
    //   color: red;
    //   font-size: 50px;
    //   background-color: black;
    //   padding: 10px;
    // `;

    // Option 2: Creating styled component With Object
    const Heading = styled.h1({
        color: 'orange',
        fontSize: '50px',
        backgroundColor: 'grey',
        padding: '10px',
    });

    const StyledBtn = styled.button`
        color: red;
        font-size: 15px;
        padding: 10px;
        width: 100px;
        font-weight: bold;
        `;

    const Para=styled.p`
        color: blue;
        font-size: 20px;
        background-color: lightgrey;
        padding: 10px;
        width: 600px;
        font-weight: bold;
    `;

    return (
        <>
        <h1>Styled Component In React</h1>

        <Heading>Heading Styles with styled component in react</Heading>
        <Heading>Heading Styles 2</Heading>
        <Heading>Heading Styles 3</Heading>
        <Heading>Heading Styles 4</Heading>

        <StyledBtn>Click Me</StyledBtn>
        <StyledBtn>Sign Up</StyledBtn>
        <StyledBtn>Log In</StyledBtn>
        <StyledBtn>Submit</StyledBtn>

        <Para>This is a paragraph styled with styled-components.</Para>
        <Para>This is a paragraph 2</Para>
        <Para>This is a paragraph 3</Para>
        </>
    )
}

export default App

*/



