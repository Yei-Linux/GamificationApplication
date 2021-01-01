'use strict';

const { uuid } = require('uuidv4');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('question_types', [{
      "id": "abe322a5-a526-4ce5-93c1-48a56400637e",
      "name": 'OPEN',
      "description": 'Pregunta abierta',
      "createdAt": new Date(),
      "updatedAt": new Date()
    }], {});

    await queryInterface.bulkInsert('question_types', [{
      "id": "363eb0cf-e4af-4062-b942-6fceb379b02b",
      "name": 'WITH_ALTERNATIVES',
      "description": 'Pregunta con alternativas',
      "createdAt": new Date(),
      "updatedAt": new Date()
    }], {});

    await queryInterface.bulkInsert('question_types', [{
      "id": "b8d7b44d-6792-444e-b7dc-219a7c71ae0a",
      "name": 'WITH_TIME',
      "description": 'Pregunta con tiempo',
      "createdAt": new Date(),
      "updatedAt": new Date()
    }], {});

    await queryInterface.bulkInsert('question_types', [{
      "id": "40335759-446e-403b-a9f6-82fed56c5eaa",
      "name": 'ON_TEAM',
      "description": 'Pregunta en equipo',
      "createdAt": new Date(),
      "updatedAt": new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {}
};