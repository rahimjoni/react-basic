import logo from './logo.svg';
import './App.css';
import Hello from "./components/Hello";
import Welcome from "./components/Welcome";
import Welcome1 from "./components/Welcome1";
import NewDemo from "./components/NewDemo";
import JsonList from "./components/JsonList";
import CompnetProps from "./components/CompnetProps";
import Apporaval from "./components/Apporaval";
import React from "react";

function App() {
  return (
    <div className="App">
      {/* <Hello name="function"></Hello>
        <Welcome name = "class"></Welcome>
        <Welcome1></Welcome1> */}
        {/* <NewDemo></NewDemo> */}
        {/*<JsonList></JsonList>*/}

        <Apporaval>
            <CompnetProps
                Headcontent="Project Report - January"
                content = "Leverage agile frameworks to provide a robust synopsis for high level overviews."
            />
        </Apporaval>
    </div>
  );
}

export default App;
