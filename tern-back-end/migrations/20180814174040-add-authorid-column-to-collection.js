"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn("collections", "authorId", {
            allowNull: false,
            type: Sequelize.INTEGER,
            references: {
                model: "authors",
                key: "id"
            }
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn("collections", "authorId");
    }
};
