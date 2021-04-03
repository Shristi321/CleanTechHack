import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Col from "react-bootstrap/Col"
import './App.css'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import {useState} from 'react'
import './dashboard.css'

import CanvasJSReact from './canvasjs.react'

// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


const MY_DOMAIN = 'http://localhost:3000'
// const profilepic={ padding: '100px'}

const Dashboard = () => {
    const options = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light1", // "light1", "dark1", "dark2"
        axisY: {
            title: "Points",

        },
        axisX: {
            title: "Week",
            interval: 1
        },
        data: [{
            type: "line",
            toolTipContent: "Week {x}: {y}",
            color: "red",
            dataPoints: [
                { x: 1, y: 0 },
                { x: 2, y: 10 },
                { x: 3, y: 15 },
                { x: 4, y: 16 },
                { x: 5, y: 20 },
                { x: 6, y: 24 },
                { x: 7, y: 27 },
                { x: 8, y: 28 },
                { x: 9, y: 35 },
                { x: 10, y: 46 },
                { x: 11, y: 50 },
                { x: 12, y: 59 },
                { x: 13, y: 64 },
                { x: 14, y: 80 },
            ]
        }]
    }

    const options2 = {
        animationEnabled: true,
        theme: "light2",
        axisX: {
            title: "Activity",
            reversed: true,
        },
        axisY: {
            title: "Times",
            includeZero: true,
        },
        data: [{
            type: "bar",
            dataPoints: [
                { y:  20, label: "Pick up trash" },
                { y:  10, label: "Eat less meat" },
                { y:  5, label: "Recycle" },
                { y:  3, label: "Compost" },
                { y:  7, label: "Alternative transportation" },
                { y:  3, label: "Plant tree" },
            ]
        }]
    }

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
                    <Button className='ml-auto addpostbutton' inline variant="outline-info" href="/addpost">+</Button>
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
            <Container className='impact-summary'>
                <h4 style={{ color: 'teal', margin: '0 0 2vmin 0'}}>My Points:</h4>

                <CanvasJSChart options = {options}/>
                
                
            </Container>
            <Container className='impact-summary'>
                <h4 style={{ color: 'teal', margin: '0 0 2vmin 0'}}>My Impact:</h4>
                <CanvasJSChart options={options2}/>
                <Row className='saved-summary'>
                    <Col>
                        <h5>Trees saved: 5</h5>
                    </Col>
                    <Col>
                        <h5>Water saved: 100 gallons</h5>
                    </Col>
                    <Col>
                        <h5>Fossil fuels saved: 50 gallons</h5>
                    </Col>
                </Row>
            </Container>
            <Container className='justify-content-md-center activities' >
                <h4 style={{ color: 'teal'}}>My Activities:</h4>
                <ul>
                    <li className="activity">Activity-1<span><img class="activitiespic" src={`${MY_DOMAIN}/homepic.jpeg`} width="170px" height="170px" alt="activitiespic"/></span></li>
                    <li className="activity">Activity-2<span><img class="activitiespic" src={`${MY_DOMAIN}/homepic.jpeg`} width="170px" height="170px" alt="activitiespic"/></span></li>
                </ul>
            </Container>

        </div>
    )
}
export default Dashboard