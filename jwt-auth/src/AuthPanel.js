import React, {useEffect} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import AuthService from './classes/AuthService';
import LoginPanel from './LoginPanel';
import RegisterPanel from './RegisterPanel';


function AuthPanel(props) {
  const authService = new AuthService();
  const navigation = useNavigate();

  useEffect(() => {
    if (authService.getUser()) {
      navigation('/dashboard');
    }
  }, []);

  return (
    <div>
      <h1>AuthPanel</h1>
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
      <div>
        {(props.panel_type == 'register' ?
          <RegisterPanel></RegisterPanel> :
          <LoginPanel></LoginPanel>)}
      </div>
    </div>
  );
}

export default AuthPanel;
