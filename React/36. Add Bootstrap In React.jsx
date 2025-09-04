// ******* Styled Component In React *******

// Note: You need to install bootstrap package first using the following command from react bootstrap: npm install bootstrap react-bootstrap 
// Note: Add CSS file in main.jsx or App.js file or index.js 
// Note: import bootstrap's button, alerts, navbar, or more you want to use in your App.jsx file
// Note: For more components visit react bootstrap official website : https://react-bootstrap.netlify.app/docs/getting-started/introduction

// App.jsx file code:

import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
function App() {
    return (
        <>
        {/* */}
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                    Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                    Separated link
                </NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        {/* */}

        <h1>Add Bootstrap In React</h1>
        <Alert>Bootstrap Installed Alert!</Alert>
        <Alert variant="danger">This is a danger alert!</Alert>
        <Alert variant="info">This is a info alert!</Alert>
        

        <Button>Click Me!</Button>
        <Button variant="danger">Submit</Button>
        <Button variant="success">Okay</Button> 
        <br />
        <Button onClick={() => alert('Bootstrap Button Clicked!')} variant='warning'>Bootstrap Button</Button>

        </>
    )
}

export default App






