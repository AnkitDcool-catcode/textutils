// import logo from './logo.svg';
import React , {useState} from "react";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

function App() {
 const [mode, setMode] = useState('light')
 const toggleMode=()=>{
  if(mode==='light'){  
  setMode('dark')
  document.body.style.backgroundColor='#30302f'
  }
  else{
    setMode('light')
    document.body.style.backgroundColor='white'
  }
 }
  return (
    <>
    <BrowserRouter>
      <Navbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
        <Routes>
          <Route path="/about" element={<About/>}/>          
          <Route path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode}/>}/> 
        </Routes>                         
      </div>      
      </BrowserRouter>
    </>
  );
}

export default App;
