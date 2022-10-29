import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Dashboard } from './Dashboard'
import { Producto } from './Producto'
import { Tabla } from './Tabla'
import { Usuarios } from './Usuarios'
export const Principal = () => {
  return (
    <>
        
        <BrowserRouter>
            
            
            <Routes>
                <Route path='/' element={<Dashboard/>} >
                    
                </Route>
                <Route path="/productos" element={<Producto/>}></Route>
                <Route path='/usuarios' element={<Usuarios/>}></Route>
                <Route path='/computadores' element={<Tabla/>}></Route>
            
            </Routes>
        </BrowserRouter>
    </>
  )
}
