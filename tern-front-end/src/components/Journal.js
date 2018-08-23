import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import Collection from "./Collection";
import Entries from "./Entries";
import Entry from "./Entry";
const queryString = require("query-string");

class Journal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            entries: []
        };
    }

    componentDidMount() {
        this.getEntriesForAuthor();
    }

    // componentDidUpdate() {
    //     this.getEntriesForAuthor();
    // }

    getEntriesForAuthor() {
        console.log(this.props.user);

        if (this.props.user == null) {
            let unauthenticatedUser = window.location.pathname.split("/")[1];
            if (isNaN(unauthenticatedUser)) {
                this.setState({ entries: [] });
            } else {
                console.log(unauthenticatedUser);
                axios
                    .get(
                        `http://localhost:3001/entries/${unauthenticatedUser}/public`
                    )
                    .then(response => {
                        this.setState({ entries: response.data });
                    })
                    .catch(err => {
                        console.log(err);
                    });
            }
        } else {
            axios
                .get(`http://localhost:3001/entries/${this.props.user}`)
                .then(response => {
                    console.log(response.data);
                    this.setState({ entries: response.data });
                })
                .catch(err => {
                    console.log(err);
                });
        }

        // if (this.state.authorId == null) {
        //     return;
        // }
    }

    render() {
        return (
            <div>
                <Navbar user={this.props.user} />
                <div className="main">
                    <div>
                        <Entries
                            user={this.props.user}
                            entries={this.state.entries}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Journal;
