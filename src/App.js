
import React, { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Alert from './Components/Alert';
import NavBar from './Components/NavBar';
import Textforms from './Components/Textforms';

function App() {
  const [alert, setalert] =useState(null);

  const [mode , setmode] =useState ('light');

     const showalert =(message, type)=>{
      setalert({
        message: message ,
        type: type
      })
      setTimeout(() => {
        setalert(null);
      }, 1500);
     }

   const toggleMode =()=>{
      if(mode === 'dark'){
        setmode('light');
        document.body.style.backgroundColor ='white';
        showalert("Light Mode is Enable" ,"success"); 
        // document.title = "TextUtils - Light Mode" // for changing title dynamically 
      }
      else{
        setmode('dark');
        document.body.style.backgroundColor ='black';
        showalert("Dark Mode is Enable" ,"success");
        // document.title = "TextUtils - Dark Mode"   // for changing title dynamically 
      }
    }

  return (
    <>
   <NavBar  title = "TextUtils" aboutUs="About" about="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3" >
        {/* <About/> */}
        <Textforms showalert={showalert} header ="Enter the text to analyze below " mode={mode} toggleMode={toggleMode} ></Textforms>  
      </div>
    </>
  )
}

export default App;
