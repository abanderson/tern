import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Journal from "./components/Journal";
import Home from "./components/Home";
import Entry from "./components/Entry";
import Google from "./components/Google";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userId: null
        };
    }

    render() {
        return (
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/:userid/journal" component={Journal} />
                    <Route path="/:userid/journal/:entryid" component={Entry} />
                    <Route path="/google/auth" component={Google} />
                </Switch>
            </div>
        );
    }
}

export default App;
