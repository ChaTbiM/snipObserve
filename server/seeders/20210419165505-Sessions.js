'use strict';

const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
      Classes 1st year :  A.P.P_MS ,  A.P.S_MS , ABMI_MS 
      Classes 2nd year : A.N.C_MS , Agru_LA
      Classes 3rd year : ABSE5_LA , 
    */
     await queryInterface.bulkInsert('Sessions', [
       {
        teacher_id: 2,
        group_number: 1,
        date_time: "2021-04-20 09:00:00",
        class_id: "A.P.P_MS"
      },
      {
        teacher_id: 2,
        group_number: 2,
        date_time: "2021-04-20 10:05:00",
        class_id: "A.P.P_MS"
      },
      {
        teacher_id: 2,
        group_number: 1,
        date_time: "2021-04-20 11:10:00",
        class_id: "A.N.C_MS"
      },
      {
        teacher_id: 2,
        group_number: 2,
        date_time: "2021-04-20 13:00:00",
        class_id: "Agru_LA"
      },
      {
        teacher_id: 2,
        group_number: 2,
        date_time: "2021-04-20 14:05:00",
        class_id: "ABSE5_LA"
      },
      {
        teacher_id: 2,
        group_number: 1,
        date_time: "2021-04-20 15:10:00",
        class_id: "ABSE5_LA"
      },
    ], {});
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
