'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

     await queryInterface.addConstraint('Cours', {
      fields: ['Réf_Cours'],
      type: 'primary key',
      name: 'PK_Cours'
    })

     await queryInterface.addConstraint('Sessions', {
      fields: ['teacher_id'],
      type: 'foreign key',
      name: 'teacher_fkey_has_sessions',
      references: { 
        table: 'Enseignants',
        field: 'Réf_Enseignant'
      },
      onUpdate: 'cascade'
    });

    await queryInterface.addConstraint('Sessions', {
      fields: ['class_id'],
      type: 'foreign key',
      name: 'class_fkey_has_sessions',
      references: { 
        table: 'Cours',
        field: 'Réf_Cours'
      },
      onUpdate: 'cascade'
    });

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

     await queryInterface.removeConstraint('Sessions', 'teacher_fkey_has_sessions', {})
     await queryInterface.removeConstraint('Sessions', 'class_fkey_has_sessions', {})
     await queryInterface.removeConstraint('Cours', 'PK_Cours', {})     
  }
};
