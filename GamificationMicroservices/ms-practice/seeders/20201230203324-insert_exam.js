'use strict';

const { uuid } = require('uuidv4');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('exams', [{
      "id": "84a10701-b938-4a84-ae4c-62fac721de20",
      "name": 'Examen de nivelacion',
      "description": 'Examen para calcular el nivel que posee un alumno',
      "duration": '30',
      "order": null,
      "exam_type_id": '9f8cd945-b262-427b-a81c-881f38801cc7',
      "level_id": '0eea4bc2-cdd5-4617-a7c7-ab605fcd06d8',
      "theme_id": '73b34ecc-a367-42ef-bb66-1071da349fcb',
      "createdAt": new Date(),
      "updatedAt": new Date()
    }], {});

    await queryInterface.bulkInsert('exams', [{
      "id": "90c196f4-25ed-4796-836e-f21e42bd6e0b",
      "name": 'Tarea diaria sobre arrays',
      "description": 'Reto para comprender el tema de arrays',
      "duration": '1440',
      "order": '1',
      "exam_type_id": 'fbb47bcf-041f-4da0-b584-b49c0835c99f',
      "level_id": '0eea4bc2-cdd5-4617-a7c7-ab605fcd06d8',
      "theme_id": '73b34ecc-a367-42ef-bb66-1071da349fcb',
      "createdAt": new Date(),
      "updatedAt": new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {}
};