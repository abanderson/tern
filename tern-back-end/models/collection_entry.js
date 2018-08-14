"use strict";
module.exports = (sequelize, DataTypes) => {
    var collection_entry = sequelize.define(
        "collection_entry",
        {
            collection_id: DataTypes.INTEGER,
            entry_id: DataTypes.INTEGER
        },
        {}
    );
    collection_entry.associate = function(models) {
        // associations can be defined here
    };
    return collection_entry;
};
