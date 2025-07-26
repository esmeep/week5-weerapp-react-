import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by Esmee Peters and is {""}
          <a href="https://github.com/esmeep/week5-weerapp-react-">
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
