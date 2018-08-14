"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "authors",
            [
                {
                    username: "user1",
                    first_name: "Jerry",
                    last_name: "Jerryson",
                    email: "test1@test.com",
                    photo_url:
                        "https://i.ytimg.com/vi/b6m-XlOxjbk/hqdefault.jpg",
                    google_id_token: "XXXXXXXXXX",
                    facebook_id_token: "YYYYYYYYYY",
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("authors", null, {});
    }
};
