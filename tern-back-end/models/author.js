"use strict";
module.exports = (sequelize, DataTypes) => {
    var author = sequelize.define(
        "author",
        {
            username: DataTypes.STRING,
            first_name: DataTypes.STRING,
            last_name: DataTypes.STRING,
            email: DataTypes.STRING,
            photo_url: DataTypes.STRING,
            google_id_token: DataTypes.STRING,
            facebook_id_token: DataTypes.STRING
        },
        {}
    );
    author.associate = function(models) {
        author.hasMany(models.entry);
        author.hasMany(models.log);
    };
    return author;
};
