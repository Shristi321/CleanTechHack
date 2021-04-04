import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Col from "react-bootstrap/Col"
import './App.css'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import LBUser from './LBUser'
import OurNav from './OurNav'

const Leaderboard = () => {
    const MY_DOMAIN = 'http://localhost:3000'
    return (
        <div>
            <OurNav />
            <Container className='post'>

            <div className="leaderboard">
                <div>
                <Row>
                    <Col>
                       <a href="#getLocalUsers"> <Button style={{color:'black', fontSize:'20px', fontWeight:'bold', backgroundColor:'orange', width:'104%', float:'left'}}> Local</Button></a>
                    </Col>

                    <Col>
                    <a href="#getGlobalUsers"><Button style={{color:'black', fontSize:'20px', fontWeight:'bold', backgroundColor:'orange', width:'104%', float:'right'}}>Global</Button></a>
                    </Col>

                </Row>
                <Row>
                    <Col>
                        <p style={{color:'black', fontSize:'20px', fontWeight:'bold', width:'100%', textAlign:'center'}}> Name</p>
                    </Col>

                    <Col>
                    <p style={{color:'black', fontSize:'20px', fontWeight:'bold', width:'100%', textAlign:'right'}}>Points</p>
                    </Col>

                </Row>
                </div>
               
               <LBUser fullname="Shristi" city="ZXCVB" points="200" />
               <LBUser fullname="Carolyn" city="ASDF" points="300" />
               <LBUser fullname="Arnab" city="QWERTY" points="400" />
               <LBUser fullname="Shristi" city="ZXCVB" points="200" />
               <LBUser fullname="Carolyn" city="ASDF" points="300" />
               <LBUser fullname="Arnab" city="QWERTY" points="400" />


            </div>






            
        
        </Container>
        </div>
    )
}

export default Leaderboard
