
import axios from "axios";
import AuthService from "./AuthService";

class Api {
    constructor(props) {
        this.authService = new AuthService();
    }

    getServerTime() {
        return axios.get("http://localhost/jwt_auth_backend/index.php", {
            headers: this.authService.getAuthHeader(),
            params: {
                method: 'getServerTime'
            }
        })
            .then(function(response) {
                console.log(response.data);
                return response;
                
            })
            .catch(function(error) {
                console.log(error);
            })
            .then(function() {

            });
    }

    getNoteListData() {
        return axios.get("http://localhost/jwt_auth_backend/index.php", {
            headers: this.authService.getAuthHeader(),
            params: {
                method: 'getNoteListData'
            }
        })
            .then(response => response.data)
            .catch(error => {throw error});
    }

    newNote(payload) {
        return axios.get("http://localhost/jwt_auth_backend/index.php", {
            headers: this.authService.getAuthHeader(),
            params: {
                method: 'newNote',
                data: payload
            }
        })
            .then(response => response.data)
            .catch(error => {throw error});
    }

    getAllUsers() {
        axios.get("http://localhost/jwt_auth_backend/index.php", {
            headers: this.authService.getAuthHeader(),
            params: {
                method: 'getAllUsers'
            }
        })
            .then(function(response) {
                console.log(response.data);
                return response.data;
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

            }
        })
        .then(function(response) {

        })
        .catch(function(error) {

        })
        .then(function() {
            localStorage.removeItem("user");
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
                email: email
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
}

export default Api;