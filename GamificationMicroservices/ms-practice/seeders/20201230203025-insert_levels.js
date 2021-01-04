'use strict';

const { uuid } = require('uuidv4');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('levels', [{
      "id": "91899b93-1302-4035-8f54-5240e82e5db1",
      "name": 'Lurker',
      "description": 'No tiene conocimientos de programacion',
      "image_url": 'https://banner2.cleanpng.com/20180705/cto/kisspng-clash-of-clans-video-gaming-clan-logo-game-5b3e2e98c0c6f6.6224480815308018167896.jpg',
      "createdAt": new Date(),
      "updatedAt": new Date()
    }], {});

    await queryInterface.bulkInsert('levels', [{
      "id": "0eea4bc2-cdd5-4617-a7c7-ab605fcd06d8",
      "name": 'Sentinel',
      "description": 'Nivel principiante',
      "image_url": 'https://p7.hiclipart.com/preview/887/85/166/clash-of-clans-video-gaming-clan-clan-war-clan-badge-clash-of-clans.jpg',
      "createdAt": new Date(),
      "updatedAt": new Date()
    }], {});

    await queryInterface.bulkInsert('levels', [{
      "id": "85e3a6a5-fe92-43d4-8562-4ef7a8d33859",
      "name": 'Adventurer',
      "description": 'Nivel intermedio',
      "image_url": 'https://www.clipartmax.com/png/middle/467-4673035_clan-badge-clash-of-clans-level-15-clan.png',
      "createdAt": new Date(),
      "updatedAt": new Date()
    }], {});

    await queryInterface.bulkInsert('levels', [{
      "id": "77bf8226-31e2-4ff5-a2d0-6d2cc0af0ee0",
      "name": 'Hero',
      "description": 'Nivel avanzado',
      'image_url': 'https://www.clipartmax.com/png/middle/437-4376693_clan-badge-coc-clan-level-20.png',
      "createdAt": new Date(),
      "updatedAt": new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {}
};