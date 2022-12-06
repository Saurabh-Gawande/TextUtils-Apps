import React, {useState} from 'react'

export default function Textforms(props) {
    const  [text, setText] = useState('');
    
    const handleOnClicked = (event) =>{
        // console.log("On Change");
        setText(event.target.value);
        
    }
    const handleUpClick = () =>{
        // console.log("Upper Case was Clicked :" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showalert("Text Converted to Uppercase" ,"success");
    }
    const handleLowClick = () =>{
        // console.log("Upper Case was Clicked :" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showalert("Text Converted to LowerCase" ,"success");
    }
    const handleClearClick = () =>{
        // console.log("Upper Case was Clicked :" + text);
        let newText = "";
        setText(newText)
        props.showalert("Text Clear" ,"success");
    }
    const handleCopy =()=>{
        var text = document.getElementById("my-box");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showalert("Text Coppied" ,"success");
    }


    return (
        <>
        <div style={{ color:props.mode=== 'dark' ?'white':'black' }}>

   <h1>{props.header} </h1>
   <div className="mb-3" >
  <textarea className="form-control" value={text} style={{backgroundColor : props.mode=== 'dark' ?'rgb(34 52 58)':'white', color:props.mode=== 'dark' ?'white':'black' }} onChange={handleOnClicked} id="my-box" rows="8"></textarea>
  </div>                                                               
  <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick} >convert to upperCase</button>
  <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>convert to lowerCase</button>
  <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy</button>
  <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>clear text</button>
  <div className="container my-3">
    <h2 >Your Text Summary</h2>
    <p>{text.split(" ").filter((element)=>{return element.length !== 0}).length} words and {text.length} characters</p>
    <p>{ 0.008*text.split(" ").filter((element)=>{return element.length !== 0}).length} Minutes read</p>
    <h2>Preview</h2>
    <div>{text}</div>
   <footer>
   </footer>
  </div>
        </div>
   </>
  )
}
