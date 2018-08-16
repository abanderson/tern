"use strict";
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("entries", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            content: {
                allowNull: false,
                type: Sequelize.TEXT
            },
            publicContent: {
                type: Sequelize.TEXT
            },
            isPublished: {
                allowNull: false,
                type: Sequelize.BOOLEAN
            },
            title: {
                type: Sequelize.STRING
            },
            location: {
                type: Sequelize.STRING
            },
            latitude: {
                type: Sequelize.DOUBLE
            },
            longitude: {
                type: Sequelize.DOUBLE
            },
            slug: {
                allowNull: false,
                type: Sequelize.STRING
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
        return queryInterface.dropTable("entries");
    }
};
