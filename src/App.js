import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Greetings from "./components/Greetings/Greetings";
import Delimiter from "./components/Delimiter/Delimiter";

function App() {
  return (
    <div className="App">
      <Header />
      <Greetings />
      <Delimiter/>
    </div>
  );
}

export default App;
