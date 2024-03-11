import Home from "./components/Home";
import Possibilities from "./components/Possibilities";
import Howitworks from "./components/Howitworks";
import './App.css'

function App() {
  return (
    <div className="App">
      {/* <h1>Our app</h1>
     <p>Hello project</p> */}

     <Home />
     <Possibilities />
     <Howitworks />
    </div>
  );
}

export default App;
