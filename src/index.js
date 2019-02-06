import React from "react";
import ReactDOM from "react-dom";

require("../src/scripts/crypto.js");
require("../src/scripts/site.js");
require("../src/scripts/dragon.js");
require("../src/styles/styles.css");

function App() {
  return <div className="App" />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
