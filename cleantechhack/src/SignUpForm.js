import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from "react-bootstrap/Col"

//build password confirmation?
// figure out how to group data

const SignUpForm = () => {
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        location: {
            city: '',
            state: '',       
        },
    })

    const onFirstName = ({target:{value}}) => {
        const temp = data
        temp.firstName = value
        setData(temp)

    }, 
    onLastName = ({target:{value}}) => {
        const temp = data
        temp.lastName = value
        setData(temp)

    }, 
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
    onCity = ({target:{value}}) => {
        const temp = data
        temp.location.city = value
        setData(temp)

    }, 
    onState = ({target:{value}}) => {
        const temp = data
        temp.location.state = value
        setData(temp)

        console.log(temp)

    }, 
    


    
    handleSubmit = (e) => {
        //endpoint stuff, send data to server
        console.log(JSON.stringify(data))

    }
    return (
        <Container>
            <Form>
            <Form.Row>
                <Col md={3}>
                    <Form.Group controlId="formFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control onChange={onFirstName} type="text" placeholder="" />
                    </Form.Group>
                </Col>
                <Col md={3}>
                    <Form.Group controlId="formLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control onChange={onLastName} type="text" placeholder="" />
                    </Form.Group>
                </Col>
            </Form.Row> 
            <Form.Row>
                <Col>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={onEmail} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={onPassword} type="password" placeholder="Password" />
                    </Form.Group>
                </Col>
            </Form.Row>
            <Form.Row>
                <Col md={3}>
                    <Form.Group controlId="formCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control onChange={onCity} type="city" placeholder="" />
                    </Form.Group>
                
                </Col>
                <Col md={3}>
                    <Form.Group controlId="formState">
                        <Form.Label>State</Form.Label>
                        <Form.Control onChange={onState} type="state" placeholder="Ex: MA" />
                    </Form.Group>
                </Col>
            </Form.Row>

            <Button style={{margin:"2vmin 0 0 0"}} onClick={handleSubmit} variant="info" type="submit">
                Submit
            </Button>
            </Form>
        </Container>
    )
}

export default SignUpForm