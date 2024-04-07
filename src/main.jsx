// main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import FoodTruckDetail from './components/FoodTruckDetail';
import './index.css'; // Import index.css here
import { Auth } from "./pages/auth";

const root = createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/food-truck/:truckId" element={<FoodTruckDetail />} />
    </Routes>
  </Router>
);