import Namer from "../Namer";
import Navbar from "../Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="bg-gradient-to-b from-slate-400 to-slate-200">
      <Navbar />
      <Namer />
    </div>
  );
}

export default App;
