import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Greetings from "./components/Greetings/Greetings";
import Delimiter from "./components/Delimiter/Delimiter";
import Settings from "./components/Settings/Settings";

function App() {
  return (
    <div className="App">
      <Header />
      <Greetings />
      <Delimiter/>
      <Settings/>
    </div>
  );
}

export default App;
