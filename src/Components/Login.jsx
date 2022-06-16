import React from 'react'

export const Login = (props) => {
  return (
    <>
    <div className="form">
      <form onSubmit={props.handleSubmit}>
        <div className="input-container">
          <label>Usuario </label>
          <input type="text" name="uname" required />
          {props.renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Contraseña </label>
          <input type="password" name="pass" required />
          {props.renderErrorMessage("pass")}
        </div>
        <div className="button-container">
         <input type="submit" />
        </div>
      </form>
    </div>
    </>
  )
}
