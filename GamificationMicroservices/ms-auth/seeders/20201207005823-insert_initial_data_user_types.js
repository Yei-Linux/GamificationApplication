'use strict';

const { uuid } = require('uuidv4');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('user_types', [{
      "id": "3e2a173d-8205-42b9-ac1b-cb3fdc92aeb7",
      "user_typename": 'admin',
      "createdAt": new Date(),
      "updatedAt": new Date()
    }], {});

    await queryInterface.bulkInsert('user_types', [{
      "id": "8d12e6e3-e364-4231-9990-b794ebea38c6",
      "user_typename": 'user',
      "createdAt": new Date(),
      "updatedAt": new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {}
};
