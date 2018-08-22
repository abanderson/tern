import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Collection from "./Collection";
import Entries from "./Entries";
import Entry from "./Entry";

const Journal = props => {

    return (
        <div>
            <Navbar />
            <div className="main">
                    <div>
                        <Collection />
                        <Entries user={props.user} entries={props.entries} />
                    </div>
            </div>
        </div>
    );
};

export default Journal;
