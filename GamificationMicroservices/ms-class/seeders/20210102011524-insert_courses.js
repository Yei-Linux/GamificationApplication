'use strict';

const { uuid } = require('uuidv4');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('courses', [{
      "id": "901a2cf7-c4df-4d02-bc80-8a5a38a1970b",
      "course_name": 'Programcion Orientada a objetos',
      "semester": "3",
      "tutor_id": "841a2cf7-c4df-4d02-bc80-8a5a38a1970b",
      "language_programming_id":"e5065254-9f3c-4d89-bf8e-977dfdb16019",
      "createdAt": new Date(),
      "updatedAt": new Date()
    }], {});
    await queryInterface.bulkInsert('courses', [{
      "id": "511a2cf7-c4df-4d02-bc80-8a5a38a1970b",
      "course_name": 'Programcion Estructurada',
      "semester": "2",
      "tutor_id": "841a2cf7-c4df-4d02-bc80-8a5a38a1970b",
      "language_programming_id":"aa1cb247-9642-4f78-a1e9-67ff9e4dfabd",
      "createdAt": new Date(),
      "updatedAt": new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => { }
};