import React from "react";
import { Link } from "react-router-dom";

const EntrySummary = (props) => {
    return (
        <div className="entry">
            <div className="entry-header">
                <span className="entry-date">{props.entry.date}</span>
                <span className="entry-edit">Edit</span>
            </div>
            <div className="entry-content">{props.entry.content}</div>
            <div className="entry-footer" />
            <Link to={`/${props.user}/journal/${props.entry.id}`}>Read {props.entry.id}</Link>
        </div>
    );
};

export default EntrySummary;
