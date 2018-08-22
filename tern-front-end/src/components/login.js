import React, { Component } from "react";
import {Redirect} from "react-router-dom";
import axios from "axios";

class Login extends Component {
    constructor(props) {
        super(props);

        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);

        this.state = {
            user: null,
            signupFormVisible: false
        };
    }

    render() {
        return (
            <div className="login-form">
                {this.state.user ? (
                    <div className="user">
                        <span className="username">
                            User: {this.state.user.username}
                        </span>
                        <button onClick={this.logout}>Log Out</button>
                    </div>
                ) : (
                    <div>
                        <a href="http://localhost:3000/login/google">Login Google</a>
                        <button onClick={this.login}>Login with Google</button>
                        <button>Login with Facebook</button>
                    </div>
                )}
            </div>
        );
    }

    login() {
        //event.preventDefault();
        axios({
            method: "get",
            url: "/login/google"
        })
            .then(res => {
                console.log(res.data);
                this.setState({
                    //user: res.data.user,
                    //showSignupForm: false
                });
                //console.log(res);
            })
            .catch(res => {
                console.log(res);
            });
    }

    logout() {
        axios({
            method: "get",
            url: "/auth/logout"
        })
            .then(() => {
                this.setState({
                    user: null
                });
            })
            .catch(res => {
                console.log(res);
            });
    }
}

export default Login;
