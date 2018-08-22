import React from "react";
import EntrySummary from "./EntrySummary";

const Entries = props => {
    let EntryList = props.entries.map(entry => {
        return (
            <EntrySummary
                key={entry.id}
                entry={entry}
                user={props.user}
            />
        );
    });

    return <div>{EntryList}</div>;
};

export default Entries;
