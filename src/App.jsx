"use client"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Nav from "./components/navbar";
import Page from "./pages/home";

function App() {
  
  return (
  <div className="container mx-auto w-10/12">
   <Router>
    <Nav />
    <Routes>
      <Route path="/" element={<Page />} />
    </Routes>
   </Router>
   </div>
  )
}

export default App
