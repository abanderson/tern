import React from "react";
import { Link } from "react-router-dom";

const EntrySummary = ({ entry }) => {
    return (
        <div className="entry">
            <div className="entry-header">
                <span className="entry-date">{entry.date}</span>
                <span className="entry-edit">Edit</span>
            </div>
            <div className="entry-content">{entry.content}</div>
            <div className="entry-footer" />
            <Link to={`${entry.id}`}>Test {entry.id}</Link>
        </div>
    );
};

export default EntrySummary;
