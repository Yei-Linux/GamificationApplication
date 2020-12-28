'use strict';

const { uuid } = require('uuidv4');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('college_types', [{
      "id": "0a18c440-b56f-42e2-b00a-68db55e6dfb0",
      "college_type_name": 'Public College',
      "createdAt": new Date(),
      "updatedAt": new Date()
    }], {});

    await queryInterface.bulkInsert('college_types', [{
      "id": "7753bb86-1da7-47c3-bde3-7465a6303a14",
      "college_type_name": 'Private College',
      "createdAt": new Date(),
      "updatedAt": new Date()
    }], {});

    await queryInterface.bulkInsert('colleges', [{
      "id": "8be31cfa-87f7-4b76-8688-5f953a8d396e",
      "college_name": 'UNAC',
      "college_description": 'Universidad Nacional del Callao',
      "college_type_id": "0a18c440-b56f-42e2-b00a-68db55e6dfb0",
      "createdAt": new Date(),
      "updatedAt": new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => { }
};