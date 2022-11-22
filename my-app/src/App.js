import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import './Styling/style.css';
import '@fortawesome/fontawesome-svg-core'
import '@fortawesome/free-regular-svg-icons'
import '@fortawesome/free-solid-svg-icons'
import '@fortawesome/react-fontawesome'
import Benefits from './Components/Benefits';
import Features from './Components/Features';
import HowItWorks from './Components/HowItWorks';
import WAST from './Components/WAST';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
      <About/>
      <Benefits/>
      <Features/>
      <HowItWorks/>
      <WAST/>
    </div>
  );
}

export default App;
