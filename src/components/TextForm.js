import React, {useState} from 'react'

export default function TextForm(props) {
 
 const handleUpClick = () => {
            let newText= text.toUpperCase( );
            setText(newText);
  }
 
  const handleLowClick = () => {
    let newText= text.toLowerCase( );
    setText(newText);
}

const handleClear = () => {
  let newText= (" ");
  setText(newText);
}

const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
}

  const handleOnChange = (event) => {
    setText(event.target.value);
}

    const[text, setText]= useState('');
    // text=Enter text here :-it is the default value if u want to change the default value then use setText
    // text= "new text"  :-wrong way to update the text
    // setText=("new text"); :-right way to update the text
  return (
    <>
    <div className="container">
    <h1>{props.heading}</h1>
<div className="mb-3">
<textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert To UpperCase</button>
<button className="btn btn-primary mx-3" onClick={handleLowClick}>Convert To LowerCase</button>
<button className="btn btn-primary mx-3" onClick={handleClear}>Clear Text</button>
<button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
    </div>

    <div className="container my-3">
      <h2>Your Text Summary </h2>
      <p>{text.split(" ").length}words and {text.length} characters</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter any text in textbox to preview"}</p>
    </div>
    </>
  )
}
