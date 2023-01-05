import PropTypes from 'prop-types';
import React, { useState } from 'react';

let Form = (props) => {
  const [Text, setText] = useState("");

  const handleUpClick = () => {
    let newValue = Text.toUpperCase();
    setText(newValue);
  }

  const handleLoClick = () => {
    let newValue = Text.toLowerCase();
    setText(newValue);
  }

  const handleClear = () => {
    setText("");
  }

  const handleChange = (event) => {
    setText(event.target.value);
  }

  return (
    <>
      <div className="container">
        <h2>{props.heading}</h2>
        <textarea className="form-control my-2" placeholder="Enter Text Here..." value={Text} onChange={handleChange} id="exampleFormControlTextarea1" rows="9"></textarea>
        <button className="btn btn-primary mx-1" onClick={handleUpClick} >UpperCase</button>
        <button className="btn btn-success mx-1" onClick={handleLoClick} >LowerCase</button>
        <button className="btn btn-danger mx-1" onClick={handleClear} >Clear</button>
      </div>
      <div className="container my-2">
        <h2>Your Text Summary</h2>
        <p>{Text.split(" ").length} words and {Text.length} characters</p>
        <p>{0.008 * Text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{Text}</p>
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