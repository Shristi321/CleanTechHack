import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Col from "react-bootstrap/Col"
import './App.css'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'

const Post = ({fullname, city, caption, date}) => {
    const MY_DOMAIN = 'http://localhost:3000'
    return (
        <Container className='post'>
            
            <Row className="creator_info">
                <img className="userpic" src={`${MY_DOMAIN}/homepic.jpeg`} alt="post_image"/>
                
                <span style={{marginTop: '1.4vmin',fontSize:'1.5vmin', fontWeight:'bold'}}>{fullname}, {city}</span>
                <Col md={3} className="ml-auto">
                    <p className='date'>{date}</p>
                </Col>
            </Row>
           
            <Row className="justify-content-md-center">
            <img className="post_image" src={`${MY_DOMAIN}/plants.jpeg`} width="700px" alt="post_image"/>
            </Row>
            <h4 style={{marginTop: '3vmin', marginLeft: '1vmin',fontSize:'1.5vmin', fontWeight:'bold'}}>{fullname} <span style={{fontWeight: 'lighter'}}>{caption}</span> </h4> 

            <br/>


            
        
        </Container>
    )
}

export default Post
