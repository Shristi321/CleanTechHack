import Event from './Event'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Col from "react-bootstrap/Col"
import './App.css'
import Nav from 'react-bootstrap/Nav'
import './dashboard.css'
import {useState} from 'react'

const Events = () => {
 
    return (
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
                    <Button className='ml-auto addpostbutton' inline variant="outline-info" href="/login">+</Button>
                </Container>
            </Navbar> 
            <Event eventname="Plant a tree" description="Join us to plant a tree"  organizer= "ASDF" city="NYC" points= "5" startTime="21st April 10:00am" endTime="21st April 11:30am" numberOfParticipants="27" />
            <Event eventname="Recycle" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."  organizer= "QWERTY" city="Minneapolis" points= "20" startTime="2nd April 9:00am" endTime="3rd April 1:00pm" numberOfParticipants="35" />
        </div>
    )
}

export default Events
