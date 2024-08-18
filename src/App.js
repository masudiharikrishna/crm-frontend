import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomerForm from './components/Home/index';
import './App.css';
import CRMpush from "./components/CRM push/index"

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route exact path="/" element={<CustomerForm />} />
          <Route exact path="/CRMpush" element={<CRMpush />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
}

export default App;