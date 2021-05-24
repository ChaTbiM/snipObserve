'use strict';

module.exports = {
   up: async (queryInterface, Sequelize) => {
      await queryInterface.changeColumn('Enseignants', 'pwdEnseignant', {
         type: Sequelize.STRING(255),
         allowNull: true,
         field: 'pwd_enseignant'
      })

   },

   down: async (queryInterface, Sequelize) => {
      await queryInterface.sequelize.query(`UPDATE Enseignants SET pwd_enseignant = NULL;
   `);

      await queryInterface.changeColumn('Enseignants', 'pwdEnseignant', {
         type: Sequelize.STRING(12),
         allowNull: true,
         field: 'pwd_enseignant'
      })
   }
};
