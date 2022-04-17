import { Button } from "@mui/material";
import React from "react";
import { Logout as LogoutIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Api from "./classes/Api";
import EditNote from "./EditNote";
import NoteList from "./NoteList";

class Dashboard extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {};

        this.logoutHandler = this.logoutHandler.bind(this);
        this.getServerTimeHandler = this.getServerTimeHandler.bind(this);
        this.api = new Api();
        this.api.getAllUsers();
    }

        logoutHandler() {
        this.api.logout();
    }

    getServerTimeHandler() {
        let data = this.api.getServerTime();
        console.log(data);
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
                <Button onClick={this.getServerTimeHandler} variant="contained">
                    gerServerTime
                </Button>
                <NoteList api={this.api}></NoteList>
                <EditNote></EditNote>
            </div>
        );
    }
}

export default Dashboard;