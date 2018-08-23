import React from "react";
import { Link } from "react-router-dom";

const EntrySummary = props => {
    let date = new Date(props.entry.createdAt);

    let dateString = date.toLocaleDateString("en-us", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });

    return (
        <div className="entry">
            <div className="entry-header">
                <span className="entry-title">{props.entry.title}</span>
                <span className="entry-date">{dateString}</span>
            </div>
            <div className="entry-content">{props.entry.content}</div>
            <div className="entry-footer" />
        </div>
    );
};

export default EntrySummary;
