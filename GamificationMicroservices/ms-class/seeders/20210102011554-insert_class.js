'use strict';

const { uuid } = require('uuidv4');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('theme_study_methods_detail', [{
      "id": "c89be434-aeab-4bf1-a3b8-f3cc965e46ef",
      "theme_id": '73b34ecc-a367-42ef-bb66-1071da349fcb',
      "study_method_id": 'd5b57645-870c-43f4-baab-c982bf6c7426',
      "content_class": JSON.stringify({
        video_url: "https://youtu.be/jGEvVxplz8s",
        video_description: "Video para explicar sobre arrays y matrices"
      }),
      "createdAt": new Date(),
      "updatedAt": new Date()
    }], {});

    await queryInterface.bulkInsert('theme_study_methods_detail', [{
      "id": "74a2f7ae-d613-462e-bfa0-d6ed1cb95232",
      "theme_id": '5f01aa13-0eb1-4a87-a5e9-15e1a531fcbe',
      "study_method_id": 'd5b57645-870c-43f4-baab-c982bf6c7426',
      "content_class": JSON.stringify({
        video_url: "https://youtu.be/jGEvVxplz8s",
        video_description: "Video para explicar sobre condicionales"
      }),
      "createdAt": new Date(),
      "updatedAt": new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {}
};