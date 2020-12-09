'use strict';

const { uuid } = require('uuidv4');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('user_types', [{
      "id": uuid(),
      "user_typename": 'admin',
      "createdAt": new Date(),
      "updatedAt": new Date()
    }], {});

    await queryInterface.bulkInsert('user_types', [{
      "id": uuid(),
      "user_typename": 'user',
      "createdAt": new Date(),
      "updatedAt": new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {}
};
