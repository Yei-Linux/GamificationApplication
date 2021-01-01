'use strict';

const { uuid } = require('uuidv4');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('exam_types', [{
      "id": "9f8cd945-b262-427b-a81c-881f38801cc7",
      "name": 'OPEN',
      "description": 'Examen con solo preguntas abiertas',
      "createdAt": new Date(),
      "updatedAt": new Date()
    }], {});

    await queryInterface.bulkInsert('exam_types', [{
      "id": "231041f2-a016-45b8-a979-34cf4ac62122",
      "name": 'WITH_ALTERNATIVES',
      "description": 'Examen con alternativas',
      "createdAt": new Date(),
      "updatedAt": new Date()
    }], {});

    await queryInterface.bulkInsert('exam_types', [{
      "id": "1a3ba7c3-a748-4b27-93ea-be4ffc20230c",
      "name": 'WITH_ALTERNATIVES_AND_OPEN',
      "description": 'Examen con alternativas y preguntas abiertas',
      "createdAt": new Date(),
      "updatedAt": new Date()
    }], {});

    await queryInterface.bulkInsert('exam_types', [{
      "id": "fbb47bcf-041f-4da0-b584-b49c0835c99f",
      "name": 'TASKS',
      "description": 'Examen para tareas diarias',
      "createdAt": new Date(),
      "updatedAt": new Date()
    }], {});

    await queryInterface.bulkInsert('exam_types', [{
      "id": "ae73daaa-f584-45b8-ad95-03742481a3fa",
      "name": 'ON_TEAM',
      "description": 'Examen para realizarlo en grupo',
      "createdAt": new Date(),
      "updatedAt": new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {}
};