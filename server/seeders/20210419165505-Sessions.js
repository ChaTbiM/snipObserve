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
        teacher_id: 103,
        group_number: 2,
        date_time: "2021-04-27 08:30:00",
        class_id: "M211_LS"
      },
      {
        teacher_id: 103,
        group_number: 1,
        date_time: "2021-04-27 9:30:00",
        class_id: "M211_LS"
      },
      {
        teacher_id: 103,
        group_number: 4,
        date_time: "2021-04-27 10:45:00",
        class_id: "M211_LS"
      },
      {
        teacher_id: 103,
        group_number: 3,
        date_time: "2021-04-27 11:45:00",
        class_id: "M211_LS"
      },
      {
        teacher_id: 103,
        group_number: 2,
        date_time: "2021-04-25 08:30:00",
        class_id: "M211_LS"
      },
      {
        teacher_id: 103,
        group_number: 1,
        date_time: "2021-04-25 09:30:00",
        class_id: "M211_LS"
      },
      {
        teacher_id: 103,
        group_number: 3,
        date_time: "2021-04-25 11:45:00",
        class_id: "M211_LS"
      },
      {
        teacher_id: 103,
        group_number: 4,
        date_time: "2021-04-25 10:45:00",
        class_id: "M211_LS"
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
