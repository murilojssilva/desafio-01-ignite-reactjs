import { useState } from "react";

import "./global.css";

import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { TaskBox } from "./components/TaskBox";

function App() {
  return (
    <div className="App">
      <Header />
      <TaskBox />
    </div>
  );
}

export default App;
