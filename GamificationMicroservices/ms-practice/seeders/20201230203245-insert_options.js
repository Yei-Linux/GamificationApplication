'use strict';

const { uuid } = require('uuidv4');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('options', [{
      "id": "d0a42915-ba06-4e87-ad23-d3be9963376f",
      "text": `function simpleArraySum(n, ar) {
          var sum=0;
          for(var i=0; i<n; i++){
              sum= sum + ar[i];
          }
          return sum;
      }

      function main() {
          var n = parseInt(readLine());
          ar = readLine().split(' ');
          ar = ar.map(Number);
          var result = simpleArraySum(n, ar);
          process.stdout.write("" + result + "\n");
      }`,
      "is_answer": true,
      "question_id": "d533b5dd-a60e-4e68-bdc3-09b0583840f3",
      "createdAt": new Date(),
      "updatedAt": new Date()
    }], {});

    await queryInterface.bulkInsert('options', [{
      "id": "a565329b-5f2e-4f59-ad9a-e503ec948a75",
      "text": `function aVeryBigSum(n, ar) {
          var sum=0;
          for(var i=0; i<n; i++){
              sum= sum + ar[i];
          }
          return sum;
      }

      function main() {
          var n = parseInt(readLine());
          ar = readLine().split(' ');
          ar = ar.map(Number);
          var result = aVeryBigSum(n, ar);
          process.stdout.write("" + result + "\n");
      }`,
      "is_answer": true,
      "question_id": "bfb7b21c-42d5-4637-bbae-8c1defa35c3c",
      "createdAt": new Date(),
      "updatedAt": new Date()
    }], {});

    await queryInterface.bulkInsert('options', [{
      "id": "bde1bfdf-77d6-4147-a670-4874bead2fa3",
      "text": `
      function birthdayCakeCandles(n, ar){
          ar.sort(function(a,b){
              return b-a;
          });
          var count=1;
          for(var i=1; i<ar.length; i++){
              if(ar[0]==ar[i]){
                  count++;
              }
          }
          return count;
      }
      function main() {
          var n = parseInt(readLine());
          ar = readLine().split(' ');
          ar = ar.map(Number);
          var result = birthdayCakeCandles(n, ar);
          process.stdout.write("" + result + "\n");

      }`,
      "is_answer": true,
      "question_id": "a7322191-8b97-4a40-84ba-70772c23ff7c",
      "createdAt": new Date(),
      "updatedAt": new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {}
};