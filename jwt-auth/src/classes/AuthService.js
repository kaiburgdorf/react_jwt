import jwtDecode from 'jwt-decode';

class AuthService {
  getUser() {
    return (localStorage.getItem('user')) ?
            this.validateJwt() :
            false;
  }

  validateJwt(returnType = null) {
    try {
      if (!localStorage.getItem('user')) {
        console.log('no jwt found in localStorage');
        return false;
      }

      const jwt = localStorage.getItem('user');
      console.log('validation token: ' + jwt);

      console.log(jwtDecode(jwt));
      console.log('compare jwtexp, now: ' +
      jwtDecode(jwt).exp + ', ' + Math.round(Date.now() / 1000));

      const now = Math.round(Date.now() / 1000);
      const exp = jwtDecode(jwt).exp;
      if (exp < now) {
        console.log('token expired');
        return false;
      }

      switch (returnType) {
        case 'payload':
          return jwtDecode(jwt);
        case 'exp':
          return exp;
        default:
          return true;
      }
    } catch (error) {
      console.log('cought error in validateJwt()');
      console.log(error);
      return false;
    }
  }

  getAuthHeader() {
    // return {'Authorization': localStorage.getItem('user')};
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      console.log('auth header: ' + user);
      return {'Authorization': '' + user};
    } else {
      return {};
    }
  }

  getExpirationTime() {
    let expTime = 0;
    if (localStorage.getItem('user')) {
      try {
        expTime = localStorage.getItem.apply('user').exp;
      } catch (error) {
        expTime = 0;
      }
    }
    return expTime;
  }
}

export default AuthService;
