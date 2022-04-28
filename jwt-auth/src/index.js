import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import App from './App';
import Dashboard from './Dashboard';
import Welcome from './Welcome';
import AuthPanel from './AuthPanel';
import AuthService from './classes/AuthService';
import Navigation from './Navigation';
import Profile from './Profile';

const authService = new AuthService();


ReactDOM.render(
    <div>
      <BrowserRouter>
        <Navigation></Navigation>

        <Routes>
          <Route index
            element={<Welcome />}></Route>
          <Route path="/welcome"
            element={<Welcome />}></Route>
          <Route path="/"
            element={<App />}></Route>
          <Route path="/dashboard"
            element={authService.getUser() ? <Dashboard /> : <AuthPanel />}>
          </Route>
          <Route path="/profile"
            element={authService.getUser() ? <Profile /> : <AuthPanel />}>
          </Route>
          <Route path="/login"
            element={<AuthPanel panel_type="login"/>}
          ></Route>
          <Route path="/register"
            element={<AuthPanel panel_type="register"/>}>
          </Route>
          <Route path="/logout"
            element={<Welcome logout={true} />}
          />
          <Route path="*"
            element={<h1>hier ist nichts</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    ,
    document.getElementById('root'),
);
