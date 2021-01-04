'use strict';

const { uuid } = require('uuidv4');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('themes', [{
      "id": "5f01aa13-0eb1-4a87-a5e9-15e1a531fcbe",
      "name": 'Condidicionales',
      "description": 'Tema sobre if,switch,if-else,operador ternario',
      "course_id": "511a2cf7-c4df-4d02-bc80-8a5a38a1970b",
      "createdAt": new Date(),
      "updatedAt": new Date()
    }], {});

    await queryInterface.bulkInsert('themes', [{
      "id": "73b34ecc-a367-42ef-bb66-1071da349fcb",
      "name": 'Arrays y Matrices',
      "description": 'Tema sobre el manejo de arrays y matrices',
      "course_id": "511a2cf7-c4df-4d02-bc80-8a5a38a1970b",
      "createdAt": new Date(),
      "updatedAt": new Date()
    }], {});

    await queryInterface.bulkInsert('themes', [{
      "id": "f9e6cc86-f050-43d2-a3a8-205195456f04",
      "name": 'Funciones mutables',
      "description": 'Tema sobre funciones que alteran el resultado',
      "course_id": "511a2cf7-c4df-4d02-bc80-8a5a38a1970b",
      "createdAt": new Date(),
      "updatedAt": new Date()
    }], {});

    await queryInterface.bulkInsert('themes', [{
      "id": "f38a861b-e2b0-41e0-a8fe-70379f00e583",
      "name": 'Funciones inmutables',
      "description": 'Tema sobre funciones que no alteran el resultado',
      "course_id": "511a2cf7-c4df-4d02-bc80-8a5a38a1970b",
      "createdAt": new Date(),
      "updatedAt": new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {}
};