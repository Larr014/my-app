import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Login } from './Components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Principal } from './Components/Principal';
import Menu from './Components/Menu';
function App() {
  return (
    <>
      {/*<Login/>*/}
      <Menu/>
      <Principal/>
    </>
  );
}

export default App;
