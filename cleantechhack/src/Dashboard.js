import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Col from "react-bootstrap/Col"
import './App.css'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import './dashboard.css'


const MY_DOMAIN = 'http://localhost:3000'
// const profilepic={ padding: '100px'}

const Dashboard = () => {
    return (
        <div className="profile">
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand style={{ color: 'teal'}}href="#home">EcoTracker</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="/feed">Feed</Nav.Link>
                    <Nav.Link href="/events">Events</Nav.Link>
                    <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container>
                <Row className="justify-content-md-center">
                    <img className='profilepic' src={`${MY_DOMAIN}/homepic.jpeg`}></img>
                </Row>
                <Row className="justify-content-md-center">
                    <h2 style={{margin:'2vmin 0 0 0'}}>First Last</h2>
                </Row>
            </Container>
    
            <div className="level">
                <h2><u>Level:</u></h2>
                <span style={{color: 'red', fontSize:'40px'}} >10</span>
            </div>
    
            <div className="my_activities">
                <h2>My Activities:</h2>
    
                <ul>
                    <li className="activity">Activity-1<span><img class="activitiespic" src={`${MY_DOMAIN}/homepic.jpeg`} width="170px" height="170px" alt="activitiespic"/></span></li>
                    <li className="activity">Activity-2<span><img class="activitiespic" src={`${MY_DOMAIN}/homepic.jpeg`} width="170px" height="170px" alt="activitiespic"/></span></li>
                </ul>
               
            </div>
    
            <div className="bargraph">
                <h2>My Activity:</h2>
    
    
    
            </div>

        </div>
            
        </div>
    )
}
export default Dashboard