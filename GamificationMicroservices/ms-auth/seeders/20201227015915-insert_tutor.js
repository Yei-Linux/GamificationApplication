'use strict';

const { uuid } = require('uuidv4');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [{
      "id": "c699053a-32ab-411b-b59c-5bea70e36fab",
      "email": 'ericka@gmail.com',
      "password": "$2y$12$rRElgI6QSwYh3pM.z8HSIere7Ui/2Nafd9hrwxymBejqHYuOlaxvK",
      "user_type_id":"8d12e6e3-e364-4231-9990-b794ebea38c6",
      "createdAt": new Date(),
      "updatedAt": new Date()
    }], {});
    await queryInterface.bulkInsert('persons', [{
      "id": "5269d5fb-dd45-4c20-b003-4681e38a2030",
      "full_name": 'Ericka',
      "last_name": "Ramirez",
      "sur_name":"Castillo",
      "age":40,
      "user_id":"c699053a-32ab-411b-b59c-5bea70e36fab",
      "idiom_id":"078069b1-d276-4fe0-94d3-d111a05d9583",
      "specialization_id":"8dba6cd4-69d1-4a71-bce2-9c68e7579c98",
      "createdAt": new Date(),
      "updatedAt": new Date()
    }], {});
    await queryInterface.bulkInsert('tutors', [{
      "id": "4ecd658a-6405-499d-afec-d63092a122ba",
      "tutor_code": '2556781',
      "college_id": "8be31cfa-87f7-4b76-8688-5f953a8d396e",
      "person_id":"5269d5fb-dd45-4c20-b003-4681e38a2030",
      "createdAt": new Date(),
      "updatedAt": new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => { }
};