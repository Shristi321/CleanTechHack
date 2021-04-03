import React from 'react' 
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Col from "react-bootstrap/Col"
import './App.css'

const MY_DOMAIN = 'http://localhost:3000'
// const profilepic={ padding: '100px'}

const Dashboard = () => {
    return (
        <div className="profile">
            
        <section className="profilepicture">

        <a><img id="profilepic" src={`${MY_DOMAIN}/homepic.jpeg`} width="170px" height="170px" alt="profilepic"/></a>
        <span style={{color: 'red', fontSize:'40px'}} >Full Name</span>
        </section>
        <hr/>

        <div className="level">
            <h2><u>Level:</u></h2>
            <span style={{color: 'red', fontSize:'40px'}} >10</span>
        </div>

        <div className="my_activities">
            <h2>My Activities:</h2>

            <ul>
                <li className="activity">Activity-1<span><img class="activitiespic" src={`${MY_DOMAIN}/homepic.jpeg`} width="170px" height="170px" alt="activitiespic"/></span></li>
                <li className="activity">Activity-2<span><img class="activitiespic" src={`${MY_DOMAIN}/homepic.jpeg`} width="170px" height="170px" alt="activitiespic"/></span></li>
                <li className="activity">Activity-2<span><img class="activitiespic" src={`${MY_DOMAIN}/homepic.jpeg`} width="170px" height="170px" alt="activitiespic"/></span></li>
            </ul>
            

        </div>

        <div className="bargraph">
            <h2>My Activity:</h2>



        </div>
            
        </div>
    )
}

export default Dashboard




