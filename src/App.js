
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <div>
      <Navbar title='textUtils' /><br/>
      <TextForm heading='Enter Text below to Analyse'/>
    </div>
  );
}

export default App;
