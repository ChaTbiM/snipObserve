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
        absent: {
          type: Sequelize.TINYINT,
          defaultValue: 0,
        },
        session_evaluation: {
          type: Sequelize.TINYINT,
          defaultValue: 0,
        },
        test_grade: {
          type: Sequelize.FLOAT,
          defaultValue: 0.0
        }
      });

      await queryInterface.addConstraint('Control', {
        fields: ['absent','session_evaluation'],
        type: 'check',
        where: {
          absent: [0, 1],
          session_evaluation: [0, 1],
        }
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
