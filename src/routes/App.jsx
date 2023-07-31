import Namer from "../Namer";
import Navbar from "../Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Namer />
    </>
  );
}

export default App;
