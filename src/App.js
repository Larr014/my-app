import { render } from "@testing-library/react";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Login } from "./Components/Login";
import { Principal } from "./Components/Principal";

import "./styles.css";



function App() {

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);


  const database = [
    {
      username: "admin",
      password: "admin"
    },
    {
      username: "admin1",
      password: "admin1"
    }
  ];

  const errors = {
    uname: "Usuario invalido",
    pass: "Contraseña invalida"
  };

  const handleSubmit = (event) => {

    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // contraseña invalida
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Usuario invalido
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Genera mensaje error

  
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  
  
   
  return (
  <>
  
   {isSubmitted?
   <>
    <Principal/>
    <button onClick={()=>setIsSubmitted(false)}>Cerrar sesion</button>
    </>
    :
    <Login handleSubmit={handleSubmit} renderErrorMessage={renderErrorMessage}/>}
  
  
  </>
  
  );
}

export default App;