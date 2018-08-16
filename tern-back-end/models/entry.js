"use strict";
module.exports = (sequelize, DataTypes) => {
    var entry = sequelize.define(
        "entry",
        {
            content: DataTypes.TEXT,
            publicContent: DataTypes.TEXT,
            isPublished: DataTypes.BOOLEAN,
            title: DataTypes.STRING,
            location: DataTypes.STRING,
            latitude: DataTypes.DOUBLE,
            longitude: DataTypes.DOUBLE,
            slug: DataTypes.STRING,
            authorId: DataTypes.INTEGER // Do I need to add this?
        },
        {}
    );
    entry.associate = function(models) {
        entry.belongsTo(models.author);
        entry.belongsToMany(models.collection, {
            through: "collectionEntry",
            as: "entry"
        });
    };
    return entry;
};
