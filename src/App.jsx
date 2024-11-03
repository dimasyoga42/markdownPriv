"use client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/navbar";
import Page from "./pages/home";
import Dcos from "./pages/docs";
import New from "./pages/newfile";

function App() {
  return (
    <div className="container mx-auto min-h-screen w-full">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<New />} />
          <Route path="/home" element={<Page />} />
          <Route path="/docs" element={<Dcos />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
