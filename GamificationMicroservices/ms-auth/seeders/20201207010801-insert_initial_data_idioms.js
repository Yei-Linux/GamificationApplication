'use strict';

const { uuid } = require('uuidv4');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('idioms', [{
      "id": "f72d6ea6-a775-4371-9907-5d32180e8061",
      "idiom_name": 'English',
      "createdAt": new Date(),
      "updatedAt": new Date()
    }], {});

    await queryInterface.bulkInsert('idioms', [{
      "id": "078069b1-d276-4fe0-94d3-d111a05d9583",
      "idiom_name": 'Spanish',
      "createdAt": new Date(),
      "updatedAt": new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {}
};
