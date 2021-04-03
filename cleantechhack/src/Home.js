import React from 'react' 
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Col from "react-bootstrap/Col"
import './App.css'

const MY_DOMAIN = 'http://localhost:3001'
const Home = () => {
    const rowStyle = { height: '70px', margin: '15vmin ' };
    const buttonStyle = {margin: '30vmin'}
    const columnStyle = { margin:'15vmin 0 0 0' }
    const logoStyle = { color: 'teal'}
    return (
        

        <div>   
            <Navbar bg="light" expand="lg">
            <Navbar.Brand style={logoStyle}href="#home">App Name</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            {/* <Navbar.Collapse id="basic-navbar-nav"> */}

            <Button className='ml-auto' inline variant="outline-info" href="/login">Log In</Button>
            {/* </Navbar.Collapse> */}
            </Navbar>
            <Container>
                <Row className="justify-content-md-center" style={rowStyle}>
                <Col>
                    <img className='srcimg' src={`${MY_DOMAIN}/homepic.jpeg`}></img>
                </Col>
                <Col style={columnStyle}>
                    <h1>Transition to an environmentally friendly lifestyle!</h1>
                </Col>
                </Row>



                
                
                <Row className="justify-content-md-center">
    
                <Button href="/signup" style={buttonStyle} variant ='info'>Sign Up</Button>
                </Row>

            </Container>
        </div>
    )
}

export default Home