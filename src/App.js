
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

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

  const router = createBrowserRouter([
    {
      path: "/home",
      element: <Navbar title='textUtils' mode={mode} toggleMode={toggleMode} alert={alert}/>,
      children: [
        {
          path: "",
          element: <TextForm heading='Enter Text below to Analyse' mode={mode} showAlert={showAlert} />,
        },
        {
          path: "about",
          element: <About/>,
        }
      ]
    },
  ]);

  return (
    <div>    
      <RouterProvider router={router} />  
    </div>
  );
}

export default App;
