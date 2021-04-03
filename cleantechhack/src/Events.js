import Event from './Event'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Col from "react-bootstrap/Col"
import './App.css'
import Nav from 'react-bootstrap/Nav'
import './dashboard.css'
<<<<<<< HEAD
import OurNav from './OurNav'
=======
import {useState} from 'react'
>>>>>>> fa377967074942fbb7b198ef88e8d24a05137d36

const Events = () => {
 
    return (
        <div>
            <OurNav />
            <Event eventname="Plant a tree" description="Join us to plant a tree"  organizer= "ASDF" city="NYC" points= "5" startTime="21st April 10:00am" endTime="21st April 11:30am" numberOfParticipants="27" />
            <Event eventname="Recycle" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."  organizer= "QWERTY" city="Minneapolis" points= "20" startTime="2nd April 9:00am" endTime="3rd April 1:00pm" numberOfParticipants="35" />
        </div>
    )
}

export default Events
