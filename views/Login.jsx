import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom'
import { useRouteState } from '../components/context-api/RouteContext'

const Login = () => {
  const { setState } = useRouteState();
  const navigate = useNavigate();


  const LoginFun = () => {
    localStorage.setItem('token', 'jasfkAJCsafASBKJFasbb')
    const originalPath = localStorage.getItem('originalPath');
    setState(true)
    alert('Login Sucessfully')

    if (originalPath) {
      localStorage.removeItem('originalPath');
      navigate(originalPath);
    } else {
      navigate('/');
    }
  
  }
  
 


  return (
    <React.Fragment>

      <Container>
        <Row className='justify-content-center my-5 py-5'>
          <Col lg={5}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button onClick={LoginFun} variant="primary" >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>

    </React.Fragment>
  )
}

export default Login
