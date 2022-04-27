import axios from 'axios';
import AuthService from './AuthService';

class Api {
  constructor(props) {
    this.authService = new AuthService();
    this.state = {
      'url': 'http://localhost/jwt_auth_backend/index.php', // @TODO get from a config
      'needAuth': [
        'getEntry', 'getNoteListData', 'newNote', 'updateNote', 'deleteNote',
      ],
    };

    this.state.headers = this.authService.getAuthHeader();
  }

  /*
   * basic api call
   * @param {method} Method to be called
   * @param {payload} json object with data
   * @return api response
   */
  async doRequest(method, payload = '') {
    console.log('validation:' + this.authService.validateJwt());
    const inNeedAuth = (this.state.needAuth.indexOf(method) >= 0);
    console.log('is needAuth function: ' + inNeedAuth);
    // automatic logout before doing the call
    if (inNeedAuth &&
      !this.authService.validateJwt()) {
      // @TODO maybe safe stuff before redirect to login
      window.location.reload();
    }

    const requestConfig = {
      'headers': this.state.headers,
      'params': {
        'method': method,
        'data': payload,
      },
    };

    try {
      const response = await axios.get(this.state.url, requestConfig);
      console.log(response.headers);
      if (response.headers.authtoken) {
        localStorage.setItem(
            'user', JSON.stringify(response.headers.authtoken),
        );
      }
      if (response.data.error) {
        console.log('api error: ' + response.data.error);
      }
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  login(username, password) {
    let result;

    axios.get('http://localhost/jwt_auth_backend/index.php', {
      params: {
        method: 'login',
        username: username,
        password: password,
      },
    })
        .then(function(response) {
          result = true;
          if (response.headers.authtoken) {
            localStorage.setItem(
                'user', JSON.stringify(response.headers.authtoken),
            );
            console.log(response.data);
            window.location.reload();
          }
          result = response;
        })
        .catch(function(error) {
          console.log(error);
          result = false;
        })
        .then(function() {

        });

    return result;
  }

  logout() {
    axios.get('http://localhost/jwt_auth_backend/index.php', {
      params: {
        token: this.authService.getUser().jwt,

      },
    })
        .then(function(response) {

        })
        .catch(function(error) {

        })
        .then(function() {
          localStorage.removeItem('user');
          window.location.reload();
        });
  }

  register(username, password, email) {
    let result;

    axios.get('http://localhost/jwt_auth_backend/index.php', {
      params: {
        method: 'register',
        username: username,
        password: password,
        email: email,
      },
    })
        .then(function(response) {
          result = true;
          if (response.data.jwt) {
            localStorage.setItem('user', JSON.stringify(response.data));
            window.location.reload();
          }
          result = response;
        })
        .catch(function(error) {
          console.log(error);
          result = false;
        })
        .then(function() {

        });

    return result;
  }
}

export default Api;
