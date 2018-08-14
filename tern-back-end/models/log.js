"use strict";
module.exports = (sequelize, DataTypes) => {
    var log = sequelize.define(
        "log",
        {
            content: DataTypes.STRING(1024)
        },
        {}
    );
    log.associate = function(models) {
        log.belongsTo(models.author);
    };
    return log;
};
