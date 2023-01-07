
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alerts from './components/Alerts';

function App() {
 
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
      if(mode === "light"){
          setMode("dark");
          document.body.style.backgroundColor = "#03162a";
          showAlert("Dark Mode is Enabled!", "success");
      }
      else{
          setMode("light"); 
          document.body.style.backgroundColor = "white";
          showAlert("Light Mode is Enabled!", "success");

      }
  }

  return (
    <div>
      <Navbar title='textUtils' mode={mode} toggleMode={toggleMode}/>
      <Alerts alert={alert}/><br/>
      <TextForm heading='Enter Text below to Analyse' mode={mode} showAlert={showAlert} />
      {/* <About/> */}
    </div>
  );
}

export default App;
