
import axios from "axios";
import AuthService from "./AuthService";

class Api {
    constructor(props) {
        this.authService = new AuthService();
    }

    getTestData() {
        axios.get("http://localhost/jwt_auth_backend/index.php")
            .then(function(response) {
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            })
            .then(function() {

            });
    }

    login(username, password) {

        let result;

        axios.get('http://localhost/jwt_auth_backend/index.php', {
            params: {
                method: 'login',
                username: username,
                password: password
            }
        })
        .then(function(response) {     
            result = true;
            if(response.data.jwt) {
                localStorage.setItem("user", JSON.stringify(response.data));
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

            }
        })
        .then(function(response) {

        })
        .catch(function(error) {

        })
        .then(function() {
            localStorage.removeItem("user");
        });
    }
}

export default Api;