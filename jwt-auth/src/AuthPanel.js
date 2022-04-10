import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "./classes/AuthService";
import LoginPanel from "./LoginPanel";


function AuthPanel() {
    let authService = new AuthService();
    let navigation = useNavigate();

    useEffect(() => {
        if(authService.getUser()) {
            navigation("/dashboard");
        }
    }, []);

    return(
        <div>
            <h1>AuthPanel</h1>
            <LoginPanel></LoginPanel>
        </div>
    );
}

export default AuthPanel;