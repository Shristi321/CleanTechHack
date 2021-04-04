import Event from './Event'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Col from "react-bootstrap/Col"
import './App.css'
import Nav from 'react-bootstrap/Nav'
import './dashboard.css'
import OurNav from './OurNav'
import {useState} from 'react'
import useEvents from './useEvents'

const Events = () => {
    
    const {data, dataReceived} = useEvents()

    
    if (dataReceived) {
        return (
            <div>
                <OurNav />
                {data.map((datum,i)=> {
                            // console.log(task, i)
                    return (
                        <Event
                            key={i}
                            eventname={datum.name}
                            description={datum.description}
                            city={datum.location}
                            points={datum.points}
                            startTime={datum.startTime}
                            endTime={datum.endTime}
                            numberOfParticipants={datum.participants}
                
                        />

                            
                )})}
                
            </div>
        )
    } else {
        return (
            <OurNav />
        )

    }
}

export default Events
