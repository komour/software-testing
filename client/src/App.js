import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {apiResponse: ""};
    }

    callApi() {
        fetch("http://localhost:1337/testAPI")
            .then(res => res.text())
            .then(res => this.setState({apiResponse: res}));
    }

    componentWillMount() {
        this.callApi();
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Nav/>
                    <Route path="/" exact component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/shop" component={Shop}/>
                    <p>{this.state.apiResponse}</p>
                </div>
            </Router>
        );
    }
}

const Home = () => (
    <div>
        <h1>Home Page</h1>
    </div>
)

export default App;
