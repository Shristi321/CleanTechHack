import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Col from "react-bootstrap/Col"
import './App.css'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import './dashboard.css'
import {useState} from 'react'


const MY_DOMAIN = 'http://localhost:3000'
// const profilepic={ padding: '100px'}

const Dashboard = () => {
    const [data, setData] =  useState({
        firstName: 'First',
        lastName: 'Last',
        location: {
            city: 'City',
            state: 'State',       
        },
    })
    const [dataReceived, setDataReceived] = useState(false)

    // async function to call data
    const callData = async () => {
        const response = await fetch('ENDPOINT NAME FOR POPULATING DASH', {
        method: 'GET',
        });

        const data = await response.json();

        console.log(data.body)


        setData(data.body);
        setDataReceived(true);
    }

    return (

        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand style={{ color: 'teal'}}href="/">EcoTracker</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="/feed">Feed</Nav.Link>
                    <Nav.Link href="/events">Events</Nav.Link>
                    <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                    <Button className='ml-auto addpost' inline variant="outline-info" href="/addpost">+</Button>
                </Container>
            </Navbar>
            <Container>
                <Row className="justify-content-md-center">
                    <img className='profilepic' src={`${MY_DOMAIN}/homepic.jpeg`}></img>
                </Row>
                <Row className="justify-content-md-center">
                    <h2 style={{margin:'2vmin 0 0 0', padding:'0 0 0 1vmin'}}>{data.firstName+' '+data.lastName}</h2>
                    <h3 style={{margin:'2.45vmin 0 0 0', padding:'0 1vmin', color:'red'}} >Lv. 10</h3>
                </Row>
            </Container>
            <Container style={{margin:'3vmin 0 0 0'}}>
                <h4>My Activities:</h4>
                <ul>
                    <li className="activity">Activity-1<span><img class="activitiespic" src={`${MY_DOMAIN}/homepic.jpeg`} width="170px" height="170px" alt="activitiespic"/></span></li>
                    <li className="activity">Activity-2<span><img class="activitiespic" src={`${MY_DOMAIN}/homepic.jpeg`} width="170px" height="170px" alt="activitiespic"/></span></li>
                </ul>
            </Container>
    
            <div className="my_activities">
                
               
            </div>
    
            <div className="bargraph">
                <h2>My Activity:</h2>
    
    
    
            </div>

        </div>
    )
}
export default Dashboard