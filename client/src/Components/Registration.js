import React from 'react';
import axios from 'axios';
import {withRouter, RouteComponentProps} from 'react-router-dom';
import '../App.css';


class Registration extends React.Component {
    email;
    password;
    submitLogin() {}

    constructor(props) {
        super(props);
        this.state = {email: '', password: ''};
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const loginData = {
            email: this.state.email,
            password: this.state.password
        }

        axios.post('http://localhost:1337/api/reg', loginData).then(
            res => {
                console.log(res.data);
                localStorage.setItem('login', res.data.login);
                this.props.history.push('/success');
                window.location.reload(true);
            }
        )
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>Registration page</h1>

                    <div style={{padding: "5px"}}>
                        <input className="form" id="input-email" type="text" name="login"
                               placeholder="Login"
                               onChange={e => this.setState({email: e.target.value})}
                               required minLength={3}
                        />
                    </div>

                    <div style={{padding: "5px"}}>
                        <input className="form" id="input-password" type="password" name="pass"
                               placeholder="Password"
                               onChange={e => this.setState({password: e.target.value})}
                               required minLength={3}
                        />
                    </div>

                    <div style={{padding: "5px"}}>
                        <button style={{minHeight: "30px", minWidth: "10%"}}>
                            Create new user!
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Registration;
