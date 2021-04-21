'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.createTable('Sessions',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        teacher_id: Sequelize.SMALLINT,
        // Cours = Module = Subject 
        class_id: Sequelize.STRING(15),
        // Possibly Allow null in the future ??
        group_number: Sequelize.INTEGER,
        date_time: Sequelize.DATE
      });

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     */
    await queryInterface.dropTable('Sessions');
  }
};
