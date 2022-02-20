import './App.css';
import React from "react";
import QuoteHistory from './components/QuoteHistory';
import FuelQuote from "./components/FuelQuote";
import Home from "./components/Home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
       <div className="App">
        <div className="content">
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/history" element={<QuoteHistory />}></Route>
            <Route path="/quote" element={<FuelQuote />}></Route>
        </Routes>
        </div>
       </div>
    </Router>
  );
}

export default App;
