import { Button } from "@mui/material";
import React from "react";
import { Logout as LogoutIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Api from "./classes/Api";

class Dashboard extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {};

        this.logoutHandler = this.logoutHandler.bind(this);
    }

    logoutHandler() {
        console.log("hit logout");
        let api = new Api();
        api.logout();

    }

    render() {

        return (
            <div>
                <h1>Dashboard</h1>
                <Link to="/">
                <Button onClick={this.logoutHandler} variant="contained" endIcon={<LogoutIcon />}>
                    Logout
                </Button>
                </Link>
            </div>
        );
    }
}

export default Dashboard;