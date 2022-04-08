import React from "react";
import { TextField, Button } from "@mui/material";
import { Login as LoginIcon } from "@mui/icons-material";

class LoginPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password:''
        };

        this.handleLogin = this.handleLogin.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);


    }

    handleInputChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    }

    handleLogin(event) {
        alert(this.state.username + " - - - " + this.state.password);
        event.preventDefault();
    }


    render() {
        return (
            <div>
                <h2>Login</h2>
                <form onSubmit={this.handleLogin}>
                <TextField
                        required
                        id="username-input"
                        label="Username"
                        defaultValue=""
                        variant="filled"
                        type={this.state.username}
                        onChange={this.handleInputChange}
                        name="username"
                        />
                <br />
                <TextField
                    required
                    id="password-input"
                    label="Password"
                    defaultValue=""
                    variant="filled"
                    type={this.state.password}
                    onChange={this.handleInputChange}
                    name="password"
                    />
                <br />
                <Button type="submit" variant="contained" endIcon={<LoginIcon />}>
                    Login
                </Button>
                </form>
            </div>
        );
    }
}

export default LoginPanel;