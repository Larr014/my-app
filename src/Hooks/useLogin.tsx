import React, { useState } from 'react'

export const useLogin = () => {
    const [correo, setCorreo] = useState("")
  const [password, setPassword] = useState("")
  const cambiarCorreo = (valor:string)=>{
    setCorreo(valor)
  }
  const cambiarPassword = (valor:string)=>{
    setPassword(valor)
  }
  const validarDatos = ()=>{
    if(correo==="a@a.cl" && password==="a"){
        alert("Bienvenido al sistema de inventario")
    }else{
        alert("Las credenciales son incorrectas")
    }
  }
  
  return (
    {
        cambiarCorreo,
        cambiarPassword,
        validarDatos
    }
  )
}
