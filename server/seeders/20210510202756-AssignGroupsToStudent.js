'use strict';
const { sequelize } = require("../database/db");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
    */
    //  Assign students to 1SNVTCSNV , group number 1
    // 29131610046_LS
    // 29131610082_LS
    // 29131610171_LS
    // 29131610215_LS
    // 29131610218_LS
    // 29131610234_LS
    // 29131610312_LS
    // 29131610316_LS
    // 29131610333_LS
    // 29131610353_LS
    // 29131610361_LS
    await sequelize.query(`UPDATE Etudiants SET Réf_Group = 15 
    WHERE [N°Ins] IN 
    (
    '29131610046_LS',
    '29131610046_LS',
    '29131610171_LS',
    '29131610215_LS',
    '29131610218_LS',
    '29131610234_LS',
    '29131610312_LS',
    '29131610316_LS',
    '29131610333_LS',
    '29131610353_LS',
    '29131610361_LS'
    );
    `);

    //  Assign students to 2SNVTCSB , group number 1 and 7 
    // 29131610124_LS
    // 29131610174_LS
    // 29131610179_LS
    // 29131610300_LS
    // 29131610414_LS
    // 29131610543_LS
    // 29131610657_LS
    // 29131610689_LS
    // 29131610700_LS
    // 29131610726_LS
    // 29131611310_LS
    // 29131611313_LS
    // 29131611344_LS
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
