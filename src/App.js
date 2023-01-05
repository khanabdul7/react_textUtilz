
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <div>
      <Navbar title='textUtils' /><br/>
      <TextForm heading='Enter Text below to Analyse'/>
      {/* <About/> */}
    </div>
  );
}

export default App;
