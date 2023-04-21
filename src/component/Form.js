import React,{useState} from 'react'

export default function Form(props) {;
  const handleUpClick=()=>{
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleOnClick=()=>{
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleOnClear=()=>{
    let newText = " ";
    setText(newText);
  }
  const handleOnChange=(event)=>{
    setText(event.target.value);
  }
  const [text,setText] = useState("enter text here22333")
  const handleOnCopy=()=>{
  var text = document.getElementById('txtid');
  text.select();
  navigator.clipboard.writeText(text.value);
  }
  const handleExtraSpace=()=>{
       var regexpattern = /\s+/g;
       var newtext= text.replace(regexpattern," ");
       setText(newtext);
  }
  return (
    <>
     <div className='container' style={{ color:props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
    </div>
<div className="my-3 container">
  {/* <label for="exampleFormControlTextarea1" className="form-label">convert text into upper case</label> */}
  <textarea className="form-control"style={{color:props.mode==='dark'?'red':'black'}} value={text} onChange={handleOnChange} id="txtid" rows="10"></textarea>
</div>
   <div className='container'>
  <button className="btn btn-primary mx-1" onClick={handleUpClick}>convert to upper case</button>
  <button className="btn btn-primary mx-1" onClick={handleOnClick}>convert to lower case</button>
  <button className="btn btn-primary mx-1" onClick={handleOnClear}>clear</button>
  <button className="btn btn-primary mx-1" onClick={handleOnCopy}>copy text</button>
  <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>remove extra space</button>
   </div>
    
    <div className='container' style={{ color:props.mode==='dark'?'white':'black'}}>
      <h1> your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} character</p>
      <p>{0.008*text.split(" ").length} minutes to read</p>
    </div>
  </>
  
  )
}
