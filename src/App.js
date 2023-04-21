// import logo from './logo.svg';
import './App.css';
// import About from './component/About';
import Navbar from './component/Navbar';
import Form from './component/Form';
import React,{useState} from 'react';

function App() {
  const[mode,setMode]= useState('light')
  const toggleMode=()=>{
    if(mode=='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
          }
          else{
            setMode('light');
            document.body.style.backgroundColor='white';
          }
  }
  return (
    <>

{/* <Navbar title=" today is my class" home="harry"/> */}
<Navbar mode = {mode} toggleMode = {toggleMode}/>
{/* <div className='container my-3'>
<Form heading="Enter Your Plain-Text Here"/>
</div> */}

<Form mode={mode} heading="Enter the text to analyze below"/>
    </>
  );
}

export default App;
