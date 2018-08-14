"use strict";
module.exports = (sequelize, DataTypes) => {
    var collection = sequelize.define(
        "collection",
        {
            name: DataTypes.STRING
        },
        {}
    );
    collection.associate = function(models) {
        collection.belongsToMany(models.entry, {
            through: "collection_entry",
            as: "collection"
        });
    };
    return collection;
};
