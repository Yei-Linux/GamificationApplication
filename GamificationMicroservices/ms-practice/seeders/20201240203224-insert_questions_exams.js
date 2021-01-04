'use strict';

const { uuid } = require('uuidv4');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('questions_exam', [{
      "id": "8137a803-3795-4bce-b64b-9d91196f053d",
      "exam_id": '84a10701-b938-4a84-ae4c-62fac721de20',
      "question_id": 'd533b5dd-a60e-4e68-bdc3-09b0583840f3',
      "createdAt": new Date(),
      "updatedAt": new Date()
    }], {});

    await queryInterface.bulkInsert('questions_exam', [{
      "id": "8bf026c7-c027-4033-b525-f0281c251d7a",
      "exam_id": '84a10701-b938-4a84-ae4c-62fac721de20',
      "question_id": 'bfb7b21c-42d5-4637-bbae-8c1defa35c3c',
      "createdAt": new Date(),
      "updatedAt": new Date()
    }], {});

    await queryInterface.bulkInsert('questions_exam', [{
      "id": "5722d4ab-26a2-4a3a-ae75-ee6d5737a765",
      "exam_id": '90c196f4-25ed-4796-836e-f21e42bd6e0b',
      "question_id": 'a7322191-8b97-4a40-84ba-70772c23ff7c',
      "createdAt": new Date(),
      "updatedAt": new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {}
};