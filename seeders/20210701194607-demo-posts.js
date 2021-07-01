'use strict';

const { query } = require("express");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Posts', [
      {
        subject: "Want to Leave",
        content: "I want to leave the organization but I don't know how.",
        userId: 1
      },
      {
        subject: "Family Issues",
        content: "How can I talk to my family without fighting?",
        userId: 2
      },
      {
        subject: "Book Recommendations",
        content: "Are there ex-JW biographies I can read?",
        userId: 3
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
