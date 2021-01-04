'use strict';

const { uuid } = require('uuidv4');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('specializations', [{
      "id": "8dba6cd4-69d1-4a71-bce2-9c68e7579c98",
      "specialization_name": 'Frontend Developer',
      "specialization_description": 'Person who sees everything about client interaction',
      "createdAt": new Date(),
      "updatedAt": new Date()
    }], {});

    await queryInterface.bulkInsert('specializations', [{
      "id": "3e0b8bb1-7269-4019-83c7-d90d4a926ca2",
      "specialization_name": 'DataScience',
      "specialization_description": 'Person who analysis everything about future predictions',
      "createdAt": new Date(),
      "updatedAt": new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {}
};
