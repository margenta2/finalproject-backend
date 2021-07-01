'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.bulkInsert('Users', [
     {
       username: "MamaJacques",
       password: "toppletower",
       email: "mamadee@xrc.com",
       jwStatus: "disassociated",
       topic: "csa",
       postId: 0
     },
     {
       username: "Margenta",
       password: "piper",
       email: "mball@glic.com",
       jwStatus: "disassociated",
       topic: "counseling",
       postId: 1
     },
     {
       username: "AshleyU",
       password: "sammy",
       email: "ashley@xrc.com",
       jwStatus: "disfellowshipped",
       topic: "relationships",
       postId: 2
     }
   ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
