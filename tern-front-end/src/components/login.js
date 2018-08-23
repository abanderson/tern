import React, { Component } from "react";
import { Redirect } from "react-router-dom";
// import axios from "axios";

class Login extends Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     user: null,
        //     signupFormVisible: false
        // };
    }

    render() {
        return (
            <div className="welcome">
                <h1>Tern</h1>
                <h2>Travel Journal</h2>
                <a href="http://localhost:3001/login/google">
                    <div className="google-login-button" />
                </a>
            </div>
        );
    }

    // login() {
    //     //event.preventDefault();
    //     axios({
    //         method: "get",
    //         url: "http://localhost:3001/login/google"
    //     })
    //         .then(res => {
    //             console.log(res);
    //             this.setState({
    //                 // user: res.data.user,
    //                 //user: "Alex"
    //                 //showSignupForm: false
    //             });
    //             //console.log(res);
    //         })
    //         .catch(res => {
    //             console.log(res);
    //         });
    // }

    // logout() {
    //     axios({
    //         method: "get",
    //         url: "/auth/logout"
    //     })
    //         .then(() => {
    //             this.setState({
    //                 user: null
    //             });
    //         })
    //         .catch(res => {
    //             console.log(res);
    //         });
    // }
}

export default Login;
