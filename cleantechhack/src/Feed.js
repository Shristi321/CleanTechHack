import Post from './Post'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Col from "react-bootstrap/Col"
import './App.css'
import Nav from 'react-bootstrap/Nav'
import './dashboard.css'

const Feed = () => {
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

            <Post fullname="asdf asdf" city="NYC" caption="I walked 3 miles today!" />
            <Post fullname="fdsa fdsa" city="Madison" caption="Recycled!" />
            <Post fullname="qwerty" city="Minneapolis" caption="I planted a tree" />
        </div>
    )
}

export default Feed
