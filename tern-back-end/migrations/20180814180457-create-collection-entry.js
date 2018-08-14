"use strict";
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("collection_entries", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            collection_id: {
                allowNull: false,
                references: {
                    model: "collections",
                    key: "id"
                },
                type: Sequelize.INTEGER
            },
            entry_id: {
                allowNull: false,
                references: {
                    model: "entries",
                    key: "id"
                },
                type: Sequelize.INTEGER
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable("collection_entries");
    }
};
