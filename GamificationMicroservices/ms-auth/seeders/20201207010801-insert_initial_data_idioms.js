'use strict';

const { uuid } = require('uuidv4');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('idioms', [{
      "id": uuid(),
      "idiom_name": 'English',
      "createdAt": new Date(),
      "updatedAt": new Date()
    }], {});

    await queryInterface.bulkInsert('idioms', [{
      "id": uuid(),
      "idiom_name": 'Spanish',
      "createdAt": new Date(),
      "updatedAt": new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {}
};
