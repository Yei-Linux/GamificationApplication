'use strict';

const { uuid } = require('uuidv4');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('study_methods', [{
      "id": "d5b57645-870c-43f4-baab-c982bf6c7426",
      "name": 'Video',
      "description": 'Metodo de estudio mediante videos',
      "createdAt": new Date(),
      "updatedAt": new Date()
    }], {});

    await queryInterface.bulkInsert('study_methods', [{
      "id": "6c096a0e-4fd0-474f-8616-8a599d54df3f",
      "name": 'Audio',
      "description": 'Metodo de estudio mediante audios',
      "createdAt": new Date(),
      "updatedAt": new Date()
    }], {});

    await queryInterface.bulkInsert('study_methods', [{
      "id": "7cffeaf5-8b12-47fe-80df-62d27901f493",
      "name": 'Ejemplos',
      "description": 'Metodo de estudio mediante ejemplos',
      "createdAt": new Date(),
      "updatedAt": new Date()
    }], {});

    await queryInterface.bulkInsert('study_methods', [{
      "id": "e669650a-119e-4501-bf97-dc7a146621b5",
      "name": 'Mapa',
      "description": 'Metodo de estudio mediante mapa o graficos',
      "createdAt": new Date(),
      "updatedAt": new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {}
};