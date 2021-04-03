import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

import SignUpForm from './SignUpForm'
const SignUp = () => {
    
   
    return (
        
        <div>
            
            <Container>
                <h1 style={{height:'9vmin',margin:'10vmin 0 0 1vmin', color: 'teal'}}>Sign up</h1>
                <SignUpForm style={{margin:'0 0 0 0'}}/>
            </Container>
        </div>
    )
}

export default SignUp