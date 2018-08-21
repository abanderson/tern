import React from "react";
import EntrySummary from "./EntrySummary";

const Entries = props => {
    let EntryList = props.entries.map(entry => {
        return (
            <EntrySummary
                //onEntrySelect={props.onEntrySelect}
                key={entry.id}
                entry={entry}
            />
        );
    });

    return <div>{EntryList}</div>;
};

export default Entries;
