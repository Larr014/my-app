
import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLogin } from '../Hooks/useLogin';
export const Login = () => {
  const {cambiarCorreo,cambiarPassword,validarDatos} = useLogin()
  return (
    <Container>
        <Row>
            <Col>
        <Form>
            <Form.Group>
                <Form.Label>Correo:</Form.Label>
                <Form.Control type="email" placeholder='Ingresa tu correo' onChange={(e)=>cambiarCorreo(e.target.value)} />
            </Form.Group>
            <Form.Group>
            <Form.Label>Contrasenia:</Form.Label>
            <Form.Control type="password" placeholder='Ingresa tu contrasenia' onChange={(e)=>cambiarPassword(e.target.value)}/>
            
            </Form.Group>
            <Form.Group as={Row} className='mt-1'>
            
                <Col md={{offset:5,span:2}}>
                <Button onClick={validarDatos}>Ingresar</Button>
            
                </Col>
            </Form.Group>
            
            
            
        </Form>
            </Col>
        </Row>

    </Container>
  )
}
