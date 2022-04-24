import './App.css';
import React from 'react';
import LoginPanel from './LoginPanel';
import {Link} from 'react-router-dom';
import AuthPanel from './AuthPanel';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
      <LoginPanel></LoginPanel>
      <AuthPanel></AuthPanel>
    </div>
  );
}

export default App;
