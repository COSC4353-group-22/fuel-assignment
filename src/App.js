import React from 'react';
import logo from './logo.svg';
import './App.css';
import AccountInfo from './components/AccountInfo';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';
import Register from './components/Register';
import QuoteHistory from './components/QuoteHistory';
import FuelQuote from "./components/FuelQuote";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register   />} />
        <Route path="/profile" element={<AccountInfo />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/history" element={<QuoteHistory />}></Route>
        <Route path="/quote" element={<FuelQuote />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
