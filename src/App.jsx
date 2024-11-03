"use client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/navbar";
import Page from "./pages/home";
import Dcos from "./pages/docs";

function App() {
  return (
    <div className="container mx-auto w-full">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/docs" element={<Dcos />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
