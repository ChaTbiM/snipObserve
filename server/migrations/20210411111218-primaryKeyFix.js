'use strict';

const { getModelsNames } = require('../utils');
const { models } = require("../database/db");

let modelsNames = getModelsNames();
let tablesNames = modelsNames.map((ModelName) => {
  return models[ModelName].tableName;
})



// TabAnnexe***
// TabCur***
// TabSem***
// TabDb***
// TabRel***
// Inscrip
// LogResExcel
// Reception
// Resultat

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const transaction = await queryInterface.sequelize.transaction();

    try {
      let index = 0;
      for (const tableName of tablesNames) {
        await queryInterface.addConstraint(tableName, {
          fields: [models[modelsNames[index]].primaryKeyAttributes[0]],
          type: 'primary key',
          transaction,
          name: 'PK_' + tableName
        })
        index++;
      }

      await transaction.commit();

    } catch (error) {
      await transaction.rollback();
      throw error;
    }



  },

  down: async (queryInterface, Sequelize) => {

    try {
      for (const tableName of tablesNames) {
        await queryInterface.removeConstraint(tableName,
          'PK_' + tableName
        )
      }
    } catch (error) {
      throw error;
    }

  }
};
