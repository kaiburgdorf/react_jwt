import React from "react";
import { TextField, Button } from "@mui/material";
import { Login as LoginIcon } from "@mui/icons-material";
import Api from "./classes/Api";
import AuthService from "./classes/AuthService";
import { Navigate, useNavigate } from "react-router-dom";

class RegisterPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            email: '',
            password:''
        };

        this.handleRegister = this.handleRegister.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);

        this.api = new Api();
        this.authService = new AuthService();
    }

    handleInputChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    }

    handleRegister(event) {
        this.api.register(this.state.username, this.state.password, this.state.email);
        event.preventDefault();
    }


    render() {




        return (
            <div>
                <h2>Register</h2>
                <form onSubmit={this.handleRegister}>
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
                    id="email-input"
                    label="email"
                    defaultValue=""
                    variant="filled"
                    type={this.state.email}
                    onChange={this.handleInputChange}
                    name="email"
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
                    Register
                </Button>
                </form>
            </div>
        );
    }
}

export default RegisterPanel;