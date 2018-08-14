"use strict";
module.exports = (sequelize, DataTypes) => {
    var entry = sequelize.define(
        "entry",
        {
            content: DataTypes.TEXT,
            public_content: DataTypes.TEXT,
            is_published: DataTypes.BOOLEAN,
            title: DataTypes.STRING,
            location: DataTypes.STRING,
            latitude: DataTypes.DOUBLE,
            longitude: DataTypes.DOUBLE,
            slug: DataTypes.STRING
        },
        {}
    );
    entry.associate = function(models) {
        entry.belongsTo(models.author);
        entry.belongsToMany(models.collection, {
            through: "collection_entry",
            as: "entry"
        });
    };
    return entry;
};
