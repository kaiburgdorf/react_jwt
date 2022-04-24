import {Link} from 'react-router-dom';
import React from 'react';
import {Button} from '@mui/material';

class Welcome extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <nav>
          <Link to="/login"><Button>Login</Button></Link>
          <br />
          <Link to="/dashboard"><Button>Dashboard</Button></Link>
          <br />
          <Link to="/register"><Button>Register</Button></Link>
        </nav>
      </div>
    );
  }
}

export default Welcome;
