import Post from './Post'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Col from "react-bootstrap/Col"
import './App.css'
import Nav from 'react-bootstrap/Nav'
import './dashboard.css'
import OurNav from './OurNav'

const Feed = () => {
    return (
        <div>
            <OurNav />
            <Post fullname="asdf asdf" city="NYC" caption="I walked 3 miles today!" />
            <Post fullname="fdsa fdsa" city="Madison" caption="Recycled!" />
            <Post fullname="qwerty" city="Minneapolis" caption="I planted a tree" />
        </div>
    )
}

export default Feed
