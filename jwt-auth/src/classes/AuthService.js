import jwtDecode from 'jwt-decode';

class AuthService {
  getUser() {
    return (localStorage.getItem('user')) ?
            this.validateJwt() :
            false;
  }

  validateJwt() {
    const jwt = localStorage.getItem('user');
    console.log('validation token: ' + jwt);

    if (jwt === 'undefined') {
      console.log('no jwt found in localStorage');
      return false;
    }

    console.log(jwtDecode(jwt));
    console.log('compare jwtexp, now: ' +
      jwtDecode(jwt).exp + ', ' + Math.round(Date.now() / 1000));

    const now = Math.round(Date.now() / 1000);
    const exp = jwtDecode(jwt).exp;
    if (exp < now) {
      console.log('token expired');
      return false;
    }

    return true;
  }

  getAuthHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.jwt) {
      console.log('auth header: ' + user.jwt);
      return {Authorization: '' + user.jwt};
    } else {
      return {};
    }
  }
}

export default AuthService;
