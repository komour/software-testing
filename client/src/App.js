import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import axios from 'axios';
import './App.css';
import Nav from './Components/Nav';
import About from './Components/About';
import Registration from "./Components/Registration";
import Login from "./Components/Login";
import LoginFail from "./Components/LoginFail";
import Success from "./Components/Success";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {apiResponse: ""};
        // this.callApi();
    }

    callApi() {
        axios.get('http://localhost:1337/api/testAPI').then(
            res => this.setState({apiResponse: res.data})
        )
    }

    componentDidMount() {
        // this.callApi();
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Nav/>
                    <Route path="/" exact component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/registration" component={Registration}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/fail" component={LoginFail}/>
                    <Route path="/success" component={Success}/>
                    <p>{this.state.apiResponse}</p>
                </div>
            </Router>
        );
    }
}

const Home = () => (
    <div id='home'>
        <h1>Home Page</h1>
    </div>
)

export default App;
