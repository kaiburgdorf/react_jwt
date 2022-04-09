
const axios = require('axios').default;

class Api {
    constructor(props) {

        this.api = axios.create({baseURL: 'http://localhost/jwt_auth_backend/'});
    }

    getTestData() {
        this.api.get("index.php")
            .then(function(response) {
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            })
            .then(function() {

            });
    }
}

export default Api;