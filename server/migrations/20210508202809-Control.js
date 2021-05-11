'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

     await queryInterface.createTable('Control',
     {
       id: {
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true,
       },
       session_id: Sequelize.INTEGER,
       student_id: Sequelize.STRING,
       absent: Sequelize.ENUM(1,0),
       session_evaluation: Sequelize.ENUM(1, 0),
       test_grade: Sequelize.FLOAT
     });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.dropTable('Control');
  }
};
