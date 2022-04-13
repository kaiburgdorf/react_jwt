

class AuthService {

    getUser() {
        return (localStorage.getItem("user")) ? localStorage.getItem("user") : false;
    }

    getAuthHeader() {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.jwt) {
            console.log("auth header: " + user.jwt);
            return { Authorization: '' + user.jwt };
        } else {
            return {};
        }
    }
}

export default AuthService;