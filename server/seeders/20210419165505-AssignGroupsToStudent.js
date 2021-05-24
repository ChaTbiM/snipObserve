'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
    */

    // Set Group to null for all 1SNVTCSNV students
    await queryInterface.sequelize.query(`UPDATE Etudiants SET 
    Réf_Group = null 
    WHERE AnnéeCycle = '1SNVTCSNV'
    `);
    //  Assign 1SNVTCSNV students to  group number 1 , 2 , 3 , 4 
    // 1
    await queryInterface.sequelize.query(`UPDATE Etudiants SET Réf_Group = 1 
    WHERE [N°Ins] IN 
    (
      '29131610046_LS',
      '29131610082_LS',
      '29131610171_LS',
      '29131610215_LS',
      '29131610218_LS'
    );
    `);
    // 2
    await queryInterface.sequelize.query(`UPDATE Etudiants SET Réf_Group = 2 
    WHERE [N°Ins] IN 
    (
      '29131610234_LS',
      '29131610312_LS',
      '29131610316_LS',
      '29131610333_LS',
      '29131610353_LS'
    );
    `);
    // 3
    await queryInterface.sequelize.query(`UPDATE Etudiants SET Réf_Group = 3
    WHERE [N°Ins] IN 
    (
      '29131610361_LS',
      '29131610376_LS',
      '29131610435_LS',
      '29131610455_LS',
      '29131610461_LS'
    );
    `);
    // 4
    await queryInterface.sequelize.query(`UPDATE Etudiants SET Réf_Group = 4
    WHERE [N°Ins] IN 
    (
      '29131610475_LS',
      '29131610559_LS',
      '29131610563_LS',
      '29131610621_LS',
      '29131610699_LS'
    );
    `);

    // Set Group to null for all 2SNVTCSB students
    await queryInterface.sequelize.query(`UPDATE Etudiants SET 
    Réf_Group = null 
    WHERE AnnéeCycle = '2SNVTCSB'
    `);
    //  Assign 2SNVTCSB students to group number 1,7  
    // 1
    await queryInterface.sequelize.query(`UPDATE Etudiants SET Réf_Group = 1
    WHERE [N°Ins] IN 
    (
    '29131610124_LS',
    '29131610174_LS',
    '29131610179_LS',
    '29131610300_LS',
    '29131610414_LS'
    );
    `);
    // 7
    await queryInterface.sequelize.query(`UPDATE Etudiants SET Réf_Group = 1
    WHERE [N°Ins] IN 
    (
    '29131610543_LS',
    '29131610657_LS',
    '29131610689_LS',
    '29131610700_LS',
    '29131610726_LS'
    );
    `);

    // Set Group to null for all 3SNVMIC. students
    await queryInterface.sequelize.query(`UPDATE Etudiants SET 
    Réf_Group = null 
    WHERE AnnéeCycle = '3SNVMIC.'
    `);
    //  Assign 3SNVMIC.  students to  group number 2 , 4 
    // 2
    await queryInterface.sequelize.query(`UPDATE Etudiants SET Réf_Group = 2 
    WHERE [N°Ins] IN 
    (
    '29131610164_LS'
    '29131610327_LS'
    '29131610381_LS'
    '29131610405_LS'
    '29131610481_LS'
    );
    `);
    // 4
    await queryInterface.sequelize.query(`UPDATE Etudiants SET Réf_Group = 4 
    WHERE [N°Ins] IN 
    (
    '29131610565_LS',
    '29131610575_LS',
    '29131610712_LS',
    '29131700349_LS',
    '29131700354_LS'
    );
    `);


    // Set Group to null for all 3SNVMIC. students
    await queryInterface.sequelize.query(`UPDATE Etudiants SET 
    Réf_Group = null 
    WHERE AnnéeCycle = '1SNVBIO.A'
    `);
    //  Assign 1SNVBIO.A  students to  group number 2 , 4 
    // 2
    await queryInterface.sequelize.query(`UPDATE Etudiants SET Réf_Group = 2
    WHERE [N°Ins] IN 
    (
    '29131910001_MS',
    '29131910002_MS',
    '29131910003_MS',
    '29131910004_MS',
    '29131910005_MS'
    );
    `);
    // 4
    await queryInterface.sequelize.query(`UPDATE Etudiants SET Réf_Group = 4
    WHERE [N°Ins] IN 
    (
    '29131910006_MS',
    '29131910007_MS',
    '29131910008_MS',
    '29131910009_MS',
    '29131910010_MS'
    );
    `);

    // Set Group to null for all 2SNVBIO.A students
    await queryInterface.sequelize.query(`UPDATE Etudiants SET 
    Réf_Group = null 
    WHERE AnnéeCycle = '2SNVBIO.A'
    `);
    //  Assign 2SNVBIO.A  students to  group number 1 , 2 
    // 1
    await queryInterface.sequelize.query(`UPDATE Etudiants SET Réf_Group = 1 
    WHERE [N°Ins] IN 
    (
    '29131811348_MS',
    '29131911355_MS',
    '29141800003_MS',
    '29141800004_MS',
    '29141800005_MS'
    );
    `);
    // 2
    await queryInterface.sequelize.query(`UPDATE Etudiants SET Réf_Group = 4 
    WHERE [N°Ins] IN 
    (
    '29141800006_MS'
    '29141800008_MS'
    '29141800009_MS'
    '29141800010_MS'
    '29141800011_MS'
    );
    `);


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
