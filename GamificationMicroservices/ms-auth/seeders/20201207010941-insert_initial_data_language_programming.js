'use strict';

const { uuid } = require('uuidv4');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('languages_programming', [{
      "id": uuid(),
      "language_prog_name": 'Javascript',
      "language_prog_description": 'An compiled language',
      "createdAt": new Date(),
      "updatedAt": new Date()
    }], {});

    await queryInterface.bulkInsert('languages_programming', [{
      "id": uuid(),
      "language_prog_name": 'Python',
      "language_prog_description": 'An interpreter language',
      "createdAt": new Date(),
      "updatedAt": new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => { }
};
