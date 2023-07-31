import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import "./index.css";
import About from "./routes/About.jsx";
import Contact from "./routes/Contact.jsx";

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";
import Namer from "./Namer.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
