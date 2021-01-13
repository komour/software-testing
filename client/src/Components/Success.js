import React, {Component} from 'react';
import '../App.css';
import {withRouter} from 'react-router-dom';
import axios from "axios";

class Success extends Component {
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
            },
            err => {
                console.log(err);
            }
        )
    }

    handleLogout = (e) => {
        localStorage.setItem('login', '');
        this.props.history.push('/');
        axios.post('http://localhost:1337/api/logout').then(
            res => {
                console.log(res.data);
                window.location.reload(true);
            }
        ).catch(
            err => {
                console.log(err.data);
            }
        )
    }

    render() {
        return (
            <div>
                {this.state.login ? <h1>You are logged in as {this.state.login}</h1> : <h1>You are logged in</h1>}
                <button className="logout-button" onClick={this.handleLogout}>Logout</button>
            </div>
        );
    }
}

export default Success;
