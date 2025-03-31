import React from 'react'
import { Login } from './pages/login.jsx';
import {Chatbot} from './pages/Chat.jsx';
import {Routes, Route} from "react-router-dom";

function App () {
  return (
    <>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Login/>} />
      <Route path="/display" element={<Chatbot/>}/>
    </Routes>

    
    </>
  );
}
export default App;