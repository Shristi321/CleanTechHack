// import Component from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Col from "react-bootstrap/Col"
import './App.css'
import Nav from 'react-bootstrap/Nav'
import './App.css'
import {useState} from 'react'

const Addevent = () => {

  const [data, setData] = useState({
    name: '',
    description: '',
    location: '',
    startTime: '',
    endTime: '',
    points: '',
  })

  const onName = ({target:{value}}) => {
    const temp = data
    temp.name = value
    setData(temp)
  }

  const onDescription = ({target:{value}}) => {
    const temp = data
    temp.description = value
    setData(temp)
  }
  const onLocation = ({target:{value}}) => {
    const temp = data
    temp.location = value
    setData(temp)
  }

  const onStartTime = ({target:{value}}) => {
    const temp = data
    temp.startTime = value
    setData(temp)
  }

  const onEndTime = ({target:{value}}) => {
    const temp = data
    temp.endTime = value
    setData(temp)
  }

  const onPoints = ({target:{value}}) => {
    const temp = data
    temp.points = value
    setData(temp)
  }

  const onSubmit = () => {
    const postEvent = async () => {
      await fetch('http://localhost:3001/event', {
      method: 'POST',
      cors: true,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({data}),
      });
    }
    postEvent()
    console.log('event posted')
  }
    const MY_DOMAIN = 'http://localhost:3000'
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
                    <Button className='ml-auto addpostbutton' inline variant="outline-info" href="/addpost">+</Button>
                </Container>
            </Navbar> 
        <div className="addpost">
            <div className="creator_info">
                <img className="" src={`${MY_DOMAIN}/homepic.jpeg`} width="100px" height="100px" alt="post_image"/>
                
                <span style={{fontSize:'20px', fontWeight:'bold'}}>Your Name, Your City</span>
            </div>

        <div className="">
          <div className="">  
              <form role="form">
              <br styles="clear:both" />
                <div className="form-group">
                    <label style={{fontSize:'18px', fontWeight:'bold'}}>Event Name:</label>
                  <input onChange={onName} type="text" className="form-control" id="title" name="title" placeholder="Event name" required />
                </div>
                
                <div className="form-group">
                <label style={{fontSize:'18px', fontWeight:'bold'}}>Description:</label>
                <textarea onChange={onDescription} className="form-control" type="textarea" name="description" id="description" placeholder="Write the description of the event" maxlength="140" rows="7"></textarea>
                </div>

                <div className="form-group">
                    <label style={{fontSize:'18px', fontWeight:'bold'}}>Location</label>
                  <input onChange={onLocation} type="text" className="form-control" id="city" name="city" placeholder="Location of the city" required />
                </div>

                <div className="form-group">
                <label style={{fontSize:'18px', fontWeight:'bold'}}>Points Given:</label>
                  <input onChange={onPoints} type="text" className="form-control" id="points" name="points" placeholder="Points participants will earn" required />
                </div>

                <div className="form-group">
                <label style={{fontSize:'18px', fontWeight:'bold'}}>Start Time:</label>
                  <input onChange={onStartTime} type="text" className="form-control" id="startTime" name="startTime" placeholder="Start Time" required />
                </div>

                <div className="form-group">
                <label style={{fontSize:'18px', fontWeight:'bold'}}>End Time:</label>
                  <input onChange={onEndTime} type="text" className="form-control" id="endTime" name="endTime" placeholder="End Time" required />
                </div>
                   
              <button onClick={onSubmit} type="button" id="submit" name="submit" className="btn btn-primary pull-right">Add Event</button>
              </form>
          </div>
        </div>




            
        </div>
        </div>
    )
}

export default Addevent
