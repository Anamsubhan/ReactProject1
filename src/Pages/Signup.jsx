import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2'
export default function Signup() {
  const signup = () =>{
    Swal.fire("Successfully SignIn")
  }

  return (
    <>
      <div className="container mt-5 d-flex justify-content-center align-item-center py-4">

        <Form>
          <h1>Welcome</h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="First Name" placeholder="Enter First Name" />
            
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="Last Name" placeholder= "Enter Last Name" />
            
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Re-Entered Password</Form.Label>
            <Form.Control type="reentered password" placeholder="Reentered Password" />
          </Form.Group>

          
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          
          <Button variant="primary" type="signup" onClick={signup}>
            SignUp
          </Button>
        </Form>
      </div>

    </>
  )
}
