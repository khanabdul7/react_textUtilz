import PropTypes from 'prop-types';
import React, { useState } from 'react';

let Form = (props) => {
  const [Text, setText] = useState("");

  const handleUpClick = () => {
    let newValue = Text.toUpperCase();
    setText(newValue);
    props.showAlert("Converted to UpperCase", "success");
  }

  const handleLoClick = () => {
    let newValue = Text.toLowerCase();
    setText(newValue);
    props.showAlert("Converted to LowerCase", "success");

  }

  const handleClear = () => {
    setText("");
    props.showAlert("Text cleared", "success");

  }

  const handleCopy = ()=> {
    navigator.clipboard.writeText(Text);
    props.showAlert("Copied to clipboard", "success");

 }

  const handleExtraSpaces = () => {
    let newValue = Text.split(/[ ]+/);
    setText(newValue.join(" "));
    props.showAlert("Extra spaces removed", "success");

  }

  const handleChange = (event) => {
    setText(event.target.value);
  }

  return (
    <>
      <div className="container" style={{color: props.mode==="light"?"black":"white"}}>
        <h2>{props.heading}</h2>
        <textarea className="form-control my-2" value={Text} onChange={handleChange} id="txtArea" rows="9" style={{backgroundColor: props.mode==="light"?"white":"#0c233b", color: props.mode==="light"?"black":"white"}}></textarea>
        <button disabled={Text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick} >UpperCase</button>
        <button disabled={Text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick} >LowerCase</button>
        <button disabled={Text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClear} >Clear</button>
        <button disabled={Text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy} >Copy</button>
        <button disabled={Text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces} >Remove Extra Spaces</button>


      </div>
      <div className="container my-2" style={{color: props.mode==="light"?"black":"white"}}>
        <h2>Your Text Summary</h2>
        <p>{Text.split(/\s/).filter((element)=>{return element.length!==0}).length} words and {Text.length} characters</p>
        <p>{0.008 * Text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h3>Preview</h3>
        <p>{Text.length>0?Text:"Enter Something above to see Preview here."}</p>
      </div>
    </>
  );
}

Form.propTypes = {
  heading: PropTypes.string.isRequired
};

Form.defaultProps = {
  heading: 'Heading Here...'
}

export default Form;