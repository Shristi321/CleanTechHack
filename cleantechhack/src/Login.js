import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'
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
    },
    onPassword = ({target:{value}}) => {
        const temp = data
        temp.password = value
        setData(temp)
    },
    handleSubmit = () => {
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

            <Button href="/dashboard" style={{margin:"2vmin 0 0 0"}} onClick={handleSubmit} variant="info" type="submit">
                Submit
            </Button>
            </Form>
    </Container>
    )
}

export default LogIn