import React from 'react'
import { Login } from './pages/login';
import { Display } from './pages/display';
import {Routes, Route} from "react-router-dom";

function App () {
  return (
    <>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Login/>} />
      <Route path="/display" element={<Display/>}/>
    </Routes>

    
    </>
  );
}
export default App;