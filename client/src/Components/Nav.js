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
                    <li>
                        <Link style={navStyle} to="/">Home</Link>
                    </li>
                    <li>
                        <Link style={navStyle} to="/about">About</Link>
                    </li>
                    {
                        this.state.login ?
                            <li>
                                <Link to='/success' style={navStyle}>{this.state.login}</Link>
                            </li>
                            :
                            <li>
                                <Link style={navStyle} to="/registration">Registration</Link>
                            </li>
                    }
                    {
                        this.state.login ?
                            <div></div>
                            :
                            <li>
                                <Link style={navStyle} to="/login">Login</Link>
                            </li>
                    }
                </ul>
            </nav>
        );
    }
}

export default Nav;
