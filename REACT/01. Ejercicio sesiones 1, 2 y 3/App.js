import logo from './logo.svg';
import './App.css';
import ContactInfoComponent from './components/container/contactInfo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ContactInfoComponent></ContactInfoComponent>
      </header>
    </div>
  );
}

export default App;
