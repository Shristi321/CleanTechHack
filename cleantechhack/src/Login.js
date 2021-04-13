import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from "react-bootstrap/Col"

const LogIn = () => {
    const [data, setData] = useState({
        email:'',
        password:'',
    }),
    onEmail = ({target:{value}}) => {
        const temp = data
        temp.email = value
        setData(temp)
        console.log(temp)
    },
    onPassword = ({target:{value}}) => {
        const temp = data
        temp.password = value
        setData(temp)
    },
    handleSubmit = () => {
        const sendData = async () => {
            const response = await fetch('ENDPOINT NAME FOR SENDING INFO', {
            method: 'POST',
            cors: true,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
            });
    
            const res = await response.json();


        }
        // send to server to check if valid, if valid, allow login
    }

    console.log(data)
    return (
        <Container>
            <h1 style={{height:'9vmin',margin:'10vmin 0 0 0', color: 'teal'}}>Log in</h1>   
            <Form>
            <Form.Row>
                <Col>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={onEmail} type="email" placeholder="myname@example.com" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={onPassword} type="password" placeholder="Password" />
                    </Form.Group>
                </Col>
            </Form.Row> 

            <Button href={`/feed/`} style={{margin:"2vmin 0 0 0"}} onClick={handleSubmit} variant="info" type="submit">
                Submit
            </Button>
            </Form>
    </Container>
    )
}

export default LogIn