import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Login from "./login";
const queryString = require("query-string");
//import Journal from "./Journal";

class Home extends Component {
    constructor(props) {
        super(props);

        //console.log(this.props);

        // this.state = {
        //     author: null
        // };
    }

    componentDidMount() {
        if (this.props.author == null) {
            let parsed = queryString.parse(window.location.search);
            if (parsed.id) {
                this.props.setAuthorId(parsed.id);
            }
        }
    }

    render() {
        return (
            <div>
                {this.props.author == null ? (
                    <Login />
                ) : (
                    <Redirect to={`/${this.props.author}/journal`} />
                )}
            </div>
        );
    }
}

export default Home;
