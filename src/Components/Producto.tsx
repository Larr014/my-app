import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
export const Producto = () => {
  const [modalAbierto,setModalAbierto] = useState(false);
  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const handleNombre = (valor:string)=>{
    setNombre(valor);
  }
  const handleApellido = (valor:string)=>{
    setApellido(valor);
  }
  const handleClose = ()=>{
    console.log('Registro exitoso');
    console.log('Nombre: '+nombre);
    console.log('Apellido: '+apellido);
    setModalAbierto(false);
  }
  const handleShow = ()=>{
    setModalAbierto(true);
  }
  return (
    <>
      <div>
      <Button variant="primary" onClick={handleShow}>Registrar</Button>

      <Modal show={modalAbierto} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Registrar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Nombre:</Form.Label>
              <Form.Control type='text' onChange={(e)=>{handleNombre(e.target.value)}}/>
            </Form.Group>
            
            <Form.Group>
              <Form.Label>Apellido:</Form.Label>
              <Form.Control type='text' onChange={(e)=>{handleApellido(e.target.value)}}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Registrar
          </Button>
        </Modal.Footer>
      </Modal>

      </div>
      <div>Tabla</div>
    </>
  )
}
