import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import logo from "../logo.svg";
import axios from "axios";

const navStyle = {
    color: 'white'
}

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {login: ''};
    }

    login;

    componentDidMount() {
        axios.get('http://localhost:1337/api/getUser').then(
            res => {
                this.setState({
                    login: res.data.login
                })
            }
        )
    }


    render() {
        return (
            <nav>
                <img src={logo} alt="logo" style={{width: "100px", height: "100px"}}/>
                <ul className="nav-links">
                    <Link style={navStyle} to="/">
                        <li>Home</li>
                    </Link>
                    <Link style={navStyle} to="/about">
                        <li>About</li>
                    </Link>
                    {
                        this.state.login ?
                            <Link to='/success' style={navStyle}>
                                <li>{this.state.login}</li>
                            </Link>
                            :
                            <Link style={navStyle} to="/registration">
                                <li>Registration</li>
                            </Link>
                    }
                    {
                        this.state.login ?
                            <div></div>
                            :
                            <Link style={navStyle} to="/login">
                                <li>Login</li>
                            </Link>
                    }
                </ul>
            </nav>
        );
    }
}

export default Nav;
