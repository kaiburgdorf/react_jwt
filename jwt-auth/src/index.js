import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './App';
import Dashboard from './Dashboard';
import Welcome from './Welcome'
import LoginPanel from './LoginPanel';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Welcome />}></Route>
      <Route path="/" element={<App />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/login" element={<LoginPanel />}></Route>
      <Route path="*" element={<h1>hier ist nichts</h1>}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);