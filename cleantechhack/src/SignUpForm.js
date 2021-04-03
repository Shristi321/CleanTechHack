import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from "react-bootstrap/Col"

//build password confirmation?
// figure out how to group data

const SignUpForm = () => {
    const handleSubmit = () => {
        //endpoint stuff
    }
    return (
        <Container>
            <Form>
            <Form.Row>
                <Col md={6}>
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="First Last" />
                    </Form.Group>
                </Col>
            </Form.Row> 
            <Form.Row>
                <Col>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Col>
            </Form.Row>
            <Form.Row>
                <Col>
                    <Form.Group controlId="formCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="city" placeholder="" />
                    </Form.Group>
                
                </Col>
                <Col>
                    <Form.Group controlId="formState">
                        <Form.Label>State</Form.Label>
                        <Form.Control type="state" placeholder="Enter two letter state abbreviation" />
                    </Form.Group>
                </Col>
            </Form.Row>

            <Button style={{margin:"2vmin 0 0 0"}}onClick={handleSubmit} variant="info" type="submit">
                Submit
            </Button>
            </Form>
        </Container>
    )
}

export default SignUpForm