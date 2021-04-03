import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Col from "react-bootstrap/Col"
import './App.css'
import Nav from 'react-bootstrap/Nav'
import './App.css'

const Addpost = () => {
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
                    <Button className='ml-auto addpost' inline variant="outline-info" href="/login">+</Button>
                </Container>
            </Navbar> 
        <div className="addpost">
            <div className="creator_info">
                <img className="" src={`${MY_DOMAIN}/homepic.jpeg`} width="100px" height="100px" alt="post_image"/>
                
                <span style={{fontSize:'20px', fontWeight:'bold'}}>Your Name, Your City</span>
            </div>

        <div className="">
          <div className="">  
              <form role="form1">
              <br styles="clear:both" />
                {/* <div className="form-group">
                    <label style={{fontSize:'18px', fontWeight:'bold'}}>Event Name:</label>
                  <input type="text" className="form-control" id="title" name="title" placeholder="Event name" required />
                </div> */}

                <div className="form-group">
                    <label style={{fontSize:'18px', fontWeight:'bold'}}>Event Type:</label>
                  <input type="text" className="form-control" id="type" name="type" placeholder="Event Type" required />
                </div>
                
                <div className="form-group">
                {/* <label style={{fontSize:'18px', fontWeight:'bold'}}>Description:</label> */}
                <textarea className="form-control" type="textarea" name="description" id="description" placeholder="Write the description of the event" maxlength="140" rows="7"></textarea>
                </div>
                <input type="file" />

            
                   
              <button type="button" id="submit" name="submit" className="btn btn-primary pull-right">POST</button>
              </form>
          </div>
        </div>




            
        </div>

        </div>
    )
}

export default Addpost
