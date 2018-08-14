"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn("logs", "authorId", {
            allowNull: false,
            type: Sequelize.INTEGER,
            references: {
                model: "authors",
                key: "id"
            }
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn("logs", "authorId");
    }
};
