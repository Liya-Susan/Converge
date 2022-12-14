import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import RegTerms from './Components/RegTerms';
import RegGuid from './Components/RegGuid';
import Prizes from './Components/Prizes';
import ProgStruct from './Components/ProgStruct';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      
      <RegTerms/>
      <RegGuid/>
      <ProgStruct/>
      
      
      
      <Prizes/>
      <Footer/>
    </div>
  );
}

export default App;
