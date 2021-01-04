'use strict';

const { uuid } = require('uuidv4');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('languages_programming', [{
      "id": "e5065254-9f3c-4d89-bf8e-977dfdb16019",
      "language_prog_name": 'Javascript',
      "language_prog_description": 'An compiled language',
      "createdAt": new Date(),
      "updatedAt": new Date()
    }], {});

    await queryInterface.bulkInsert('languages_programming', [{
      "id": "aa1cb247-9642-4f78-a1e9-67ff9e4dfabd",
      "language_prog_name": 'Python',
      "language_prog_description": 'An interpreter language',
      "createdAt": new Date(),
      "updatedAt": new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => { }
};
