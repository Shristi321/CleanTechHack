import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Col from "react-bootstrap/Col"
import './App.css'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'

const OurNav = () => {
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
                    <Nav.Link href="/leaderboard">Leaderboard</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                    {/* <Button className='ml-auto addpostbutton' inline variant="outline-info" href="/addpost">+</Button> */}
                    <DropdownButton className='ml-auto addpostbutton' inline variant="outline-info" title="+">
                         <Dropdown.Item href="/addpost">Post an activity</Dropdown.Item>
                        <Dropdown.Item href="/addevent">Host an Event</Dropdown.Item>
                    </DropdownButton>
                </Container>
            </Navbar>
        </div>
    )
}

export default OurNav
