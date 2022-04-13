import { Link } from "react-router-dom";
import React from "react";

class Welcome extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div>
                <h1>Welcome</h1>
                <nav>
                    <Link to="/login">Login</Link>
                    <br />
                    <Link to="/dashboard">Dashboard</Link>
                    <br />
                    <Link to="/register">Register</Link>
                </nav>
            </div>
        );
    }
}

export default Welcome;