import React from 'react';
import axios from 'axios';
import '../App.css';


class Login extends React.Component {
    email;
    password;

    constructor(props) {
        super(props);
        this.state = {email: '', password: ''};
    }

    authorize = (e) => {
        e.preventDefault();

        const loginData = {
            email: this.state.email,
            password: this.state.password
        }

        axios.post('http://localhost:1337/api/log', loginData).then(
            res => {
                console.log(res.data);
                this.props.history.push('/success');
                window.location.reload(true);
            }
        ).catch(
            () => {
                this.props.history.push('/fail');
            }
        )
    };

    render() {
        return (
            <div>
                <form onSubmit={this.authorize}>
                    <h1>Login page</h1>

                    <div style={{padding: "5px"}}>
                        <input className="form" id="input-email" type="text"
                               placeholder="Login"
                               onChange={e => this.setState({email: e.target.value})}
                               required minLength={3}
                        />
                    </div>

                    <div style={{padding: "5px"}}>
                        <input className="form" id="input-password" type="password"
                               placeholder="Password"
                               onChange={e => this.setState({password: e.target.value})}
                               required minLength={3}
                        />
                    </div>

                    <div style={{padding: "5px"}}>
                        <button style={{minHeight: "30px", minWidth: "10%"}}>
                            Login
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;
