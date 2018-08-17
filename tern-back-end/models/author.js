"use strict";
module.exports = (sequelize, DataTypes) => {
    var author = sequelize.define(
        "author",
        {
            username: DataTypes.STRING,
            firstName: DataTypes.STRING,
            lastName: DataTypes.STRING,
            email: DataTypes.STRING,
            photoUrl: DataTypes.STRING,
            googleId: DataTypes.STRING,
            facebookId: DataTypes.STRING
        },
        {}
    );
    author.associate = function(models) {
        author.hasMany(models.entry);
        author.hasMany(models.log);
    };
    return author;
};
