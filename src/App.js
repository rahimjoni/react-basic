import logo from './logo.svg';
import './App.css';
import Hello from "./components/Hello";
import Welcome from "./components/Welcome";
import Welcome1 from "./components/Welcome1"

function App() {
  return (
    <div className="App">
      <Hello name="function"></Hello>
        <Welcome name = "class"></Welcome>
        <Welcome1></Welcome1>
    </div>
  );
}

export default App;
