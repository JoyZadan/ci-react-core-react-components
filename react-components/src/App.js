import logo from './logo.svg'
import './App.css';
// import FunctionalGreeting from "./components/FunctionalGreeting";
import StatefulGreeting from "./components/StatefulGreeting";
// import HooksCounter from "./components/HooksCounter";

function App() {
  return (
    <div className="App">
      {/* <FunctionalGreeting name="Joy" /> */}
      <StatefulGreeting greeting="I'm a stateful class component!" name="Joy" />
      {/* <HooksCounter name="Mike" /> */}
    </div>
  );
}

export default App;
