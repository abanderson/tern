"use strict";
module.exports = (sequelize, DataTypes) => {
    var collectionEntry = sequelize.define(
        "collectionEntry",
        {
            collectionId: DataTypes.INTEGER,
            entryId: DataTypes.INTEGER
        },
        {}
    );
    collectionEntry.associate = function(models) {
        // associations can be defined here
    };
    return collectionEntry;
};
