import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
interface alumno{
    'nombre':string,
    'apellido':string,
    'edad':number
}
export const Tabla = () => {
    
    const datos = [
        {
            'nombre':'Juan',
            'apellido':'Perez',
            'edad':45
        },
        {
            'nombre':'Pablo',
            'apellido':'Pereza',
            'edad':48
        }
        
    ]
    const handleModificar = (objeto:any)=>{
        alert(objeto.nombre+" "+objeto.apellido)
    }


    const contenido = datos.map((dato)=>{ 
        return (
        <tr>
            <td>{dato.nombre}</td>
            <td>{dato.apellido}</td>
            <td>{dato.edad}</td>
            <td>
                <Button onClick={(dato)=>handleModificar(dato)}>Actualizar</Button>
                <Button>Eliminar</Button>
            </td>
            
        </tr>)
    })
  return (
    <>
        <Table>
            <thead>
            <tr>
                <th>nombre</th>
                <th>apellido</th>
                <th>edad</th>    
            </tr>
            
            </thead>
            <tbody>
            {contenido}
            </tbody>
        </Table>
    </>
  )
}
