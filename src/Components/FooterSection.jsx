import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export default function FooterSection() {
    return (
        <>
            <div className="d-flex bg-dark text-white">
                <div className="col-md-4 py-5">
                    <h4 className=' text-center'>Ecommerce Website</h4>
                    <p className='text-center p-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus molestias porro, iste dignissimos ad est vero illum culpa vitae odio?</p>
                </div>
                <div className="col-md-4 py-5 text-center">
                    <h4>Links</h4>
                    <Link className="nav-link " to="/">Home</Link>
                    <Link className="nav-link" to="About">About</Link>
                    <Link className="nav-link" to="Products">Products</Link>
                    <Link className="nav-link" to="Categories">Categories</Link>
                </div>
                <div className="col-md-4 py-5 text-center">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <h4>Subscription</h4>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
            <div className='bg-dark fs-5 fw-semibold text-center text-white'>All the Rights Reserved</div>

        </>
    )
}
