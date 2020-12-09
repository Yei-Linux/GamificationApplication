'use strict';

const { uuid } = require('uuidv4');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('specializations', [{
      "id": uuid(),
      "specialization_name": 'Frontend Developer',
      "specialization_description": 'Person who sees everything about client interaction',
      "createdAt": new Date(),
      "updatedAt": new Date()
    }], {});

    await queryInterface.bulkInsert('specializations', [{
      "id": uuid(),
      "specialization_name": 'DataScience',
      "specialization_description": 'Person who analysis everything about future predictions',
      "createdAt": new Date(),
      "updatedAt": new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {}
};
