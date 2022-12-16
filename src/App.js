import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import RegTerms from './Components/RegTerms';
import RegGuid from './Components/RegGuid';
import Prizes from './Components/Prizes';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Timeline from "./Components/Timeline";
import Radium, { StyleRoot } from 'radium';


function App() {
  return (
    <StyleRoot>
    <div className="App " style={{overflow:'hidden'}}>
      <Header/>
      <Home/>
      <About/>
      <RegTerms/>
      <RegGuid/>
      <Timeline/>
      
      
      <Prizes/>
      <Footer/>
    </div>
    </StyleRoot>
  );
}

export default Radium(App);
