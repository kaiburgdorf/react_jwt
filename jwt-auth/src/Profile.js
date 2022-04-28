import React from 'react';
import AuthService from './classes/AuthService';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.jwt = JSON.stringify((new AuthService).validateJwt('payload'));
    console.log(this.jwt);
  }

  render() {
    return (
      <div>
        <h1>Profile</h1>
        <p>{this.jwt}</p>
      </div>
    );
  }
}

export default Profile;
