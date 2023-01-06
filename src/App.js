
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';

function App() {
 
  const [mode, setMode] = useState("light");
    
  const toggleMode = () => {
      if(mode === "light"){
          setMode("dark");
          document.body.style.backgroundColor = "#03162a";
      }
      else{
          setMode("light"); 
          document.body.style.backgroundColor = "white";
      }
  }

  return (
    <div>
      <Navbar title='textUtils' mode={mode} toggleMode={toggleMode}/><br/>
      <TextForm heading='Enter Text below to Analyse' mode={mode} />
      {/* <About/> */}
    </div>
  );
}

export default App;
