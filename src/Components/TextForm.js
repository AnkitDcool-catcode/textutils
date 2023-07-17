import React, {useState} from "react"

export default function TextForm(props) {
  const handleUpclick =()=>{
    //console.log("Uppercase was clicked" + text);
    let upCase=text.toUpperCase();
    setText(upCase);
  }
  const handleDownclick =()=>{
    let downCase=text.toLowerCase();
    setText(downCase);
  }
  const handleClear =()=>{
    let clearText='';
    setText(clearText);
  }
  const handleOnchange =(event)=>{
    setText(event.target.value);
  }
  const [text, setText] = useState('');
  return (
    <>
    <div>
      <h2 style={{color: props.mode==='light'?'black':'white'}}>{props.heading}</h2>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnchange} id="myBox" rows="6"></textarea>
      </div>
      <button className="btn btn-primary mx-1"  onClick={handleUpclick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1"  onClick={handleDownclick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1"  onClick={handleClear}>Clear Text</button>
    </div>
    <div className="container my-4">
      <h2 style={{color: props.mode==='light'?'black':'white'}}>Your text summary</h2>
      <p style={{color: props.mode==='light'?'black':'white'}}>{text.split(" ").length-1} words and {text.length} characters. </p>
      <p style={{color: props.mode==='light'?'black':'white'}}>{0.008*text.split(" ").length}  Minutes required to read.</p>
      <h3 style={{color: props.mode==='light'?'black':'white'}}>Preview</h3>
      <p style={{color: props.mode==='light'?'black':'white'}}>{text.length>0?text:'Enter something to preview'}</p>
    </div>
    </>
  );
}
