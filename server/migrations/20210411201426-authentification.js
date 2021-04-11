'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.changeColumn('Enseignants','pwdEnseignant', {
      type: Sequelize.STRING(255),
      allowNull: true,
      field: 'pwd_enseignant'
     })

  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.changeColumn('Enseignants','pwdEnseignant', {
      type: Sequelize.STRING(12),
      allowNull: true,
      field: 'pwd_enseignant'
     })
  }
};
