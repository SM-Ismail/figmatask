import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Front from './components/Front/Front';
import Info from './components/Info/Info';
import Features from './components/Features/Features';
import Plans from './components/Plans/Plans';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Front></Front>  
      <Info></Info>
      <Features></Features>
      <Plans></Plans>
    </div>
  );
}

export default App;
