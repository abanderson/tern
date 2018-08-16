"use strict";
module.exports = (sequelize, DataTypes) => {
    var collection = sequelize.define(
        "collection",
        {
            name: DataTypes.STRING,
            authorId: DataTypes.INTEGER // Do I need to add this?
        },
        {}
    );
    collection.associate = function(models) {
        collection.belongsToMany(models.entry, {
            through: "collectionEntry",
            as: "collection"
        });
    };
    return collection;
};
