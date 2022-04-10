

class AuthService {

    getUser() {
        return (localStorage.getItem("user")) ? localStorage.getItem("user") : false;
    }

    getAuthHeader() {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.jwt) {
            return { Authorization: 'Bearer ' + user.jwt };
        } else {
            return {};
        }
    }
}

export default AuthService;