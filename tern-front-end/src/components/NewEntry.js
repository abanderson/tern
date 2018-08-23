import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";

class NewEntry extends Component {
    constructor(props) {
        super(props);

        console.log(this.props);

        this.state = {
            title: "",
            content: "",
            publicContent: "",
            location: "",
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        axios
            .post(`http://localhost:3001/entries/${this.props.user}`, {
                title: this.state.title,
                content: this.state.content,
                publicContent: this.state.publicContent,
                location: this.state.location
            })
            .then(response => {
                console.log(response);
                this.setState({ submitted: true });
            })
            .catch(err => {
                console.log(err);
            });
        event.preventDefault();
    }

    render() {
        return (
            <div>
                {" "}
                {this.state.submitted == true ? (
                    <Redirect to={`/${this.props.props}/journal`} />
                ) : (
                    <div>
                        <Navbar />
                        <div className="main">
                            <form
                                className="compose-entry"
                                onSubmit={this.handleSubmit}
                            >
                                <label>
                                    Title:&nbsp;
                                    <input
                                        className="compose-entry-title"
                                        type="text"
                                        name="title"
                                        value={this.state.value}
                                        onChange={this.handleChange}
                                    />
                                </label>

                                <label>
                                    Location:&nbsp;
                                    <input
                                        className="compose-entry-title"
                                        type="text"
                                        name="location"
                                        value={this.state.value}
                                        onChange={this.handleChange}
                                    />
                                </label>

                                <label>
                                    Content:
                                    <textarea
                                        className="compose-entry-content"
                                        rows="20"
                                        type="text"
                                        name="content"
                                        value={this.state.value}
                                        onChange={this.handleChange}
                                    />
                                </label>
                                <label>
                                    Public content:
                                    <textarea
                                        className="compose-entry-content"
                                        rows="20"
                                        type="text"
                                        name="publicContent"
                                        value={this.state.value}
                                        onChange={this.handleChange}
                                    />
                                </label>

                                <input type="submit" value="Submit" />
                            </form>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default NewEntry;
