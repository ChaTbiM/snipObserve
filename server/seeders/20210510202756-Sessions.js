'use strict';

const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
      Classes 1st year Licence : M211_LS: Physique // 1SNVTCSNV
      Classes 2nd year Licence : BOT._LS : Botanique // 2SNVTCSB
      Classes 3rd year Licence : Mi.Al_LS :	Microbiologie Alimentaire // 3SNVMIC.
      Classes 1st year Masters : A.P.P_MS :  Analyses des propriétés physicochimiques des biomolécules // 1SNVBIO.A
      Classes 2nd year Master:  M3:MB_MS : Modification des biomolécules par voie chimique et enzymatiq  // 2SNVBIO.A 
    */
     await queryInterface.bulkInsert('Sessions', [
      // -------  M211_LS 
      // group 2 
       {
        teacher_id: 103,
        group_number: 2,
        date_time: "2021-04-27 08:30:00",
        class_id: "M211_LS"
      },
      {
        teacher_id: 103,
        group_number: 2,
        date_time: "2021-05-25 08:30:00",
        class_id: "M211_LS"
      },
      {
        teacher_id: 103,
        group_number: 2,
        date_time: "2021-06-01 08:30:00",
        class_id: "M211_LS"
      },
      {
        teacher_id: 103,
        group_number: 2,
        date_time: "2021-04-25 08:30:00",
        class_id: "M211_LS"
      }],{}); 
     await queryInterface.bulkInsert('Sessions', [

      // group 1 
      {
        teacher_id: 103,
        group_number: 1,
        date_time: "2021-04-27 9:30:00",
        class_id: "M211_LS"
      },
      {
        teacher_id: 103,
        group_number: 1,
        date_time: "2021-04-25 09:30:00",
        class_id: "M211_LS"
      }],{});

     await queryInterface.bulkInsert('Sessions', [
      // group 4 
      {
        teacher_id: 103,
        group_number: 4,
        date_time: "2021-04-27 10:45:00",
        class_id: "M211_LS"
      },
      {
        teacher_id: 103,
        group_number: 4,
        date_time: "2021-04-25 10:45:00",
        class_id: "M211_LS"
      }],{});

      await queryInterface.bulkInsert('Sessions', [
      // group 3 
      {
        teacher_id: 103,
        group_number: 3,
        date_time: "2021-04-27 11:45:00",
        class_id: "M211_LS"
      },
      {
        teacher_id: 103,
        group_number: 3,
        date_time: "2021-04-25 11:45:00",
        class_id: "M211_LS"
      }],{});

      await queryInterface.bulkInsert('Sessions', [
      // M3:MB_MS
      {
        teacher_id: 103,
        group_number: 1,
        date_time: "2021-04-28 11:45:00",
        class_id: "M3:MB_MS"
      },
      {
        teacher_id: 103,
        group_number: 2,
        date_time: "2021-04-28 10:45:00",
        class_id: "M3:MB_MS"
      }],{});

      await queryInterface.bulkInsert('Sessions', [
      // A.P.P_MS
      {
        teacher_id: 103,
        group_number: 2,
        date_time: "2021-04-26 08:30:00",
        class_id: "A.P.P_MS"
      },
      {
        teacher_id: 103,
        group_number: 4,
        date_time: "2021-04-27 09:45:00",
        class_id: "A.P.P_MS"
      }],{});
      await queryInterface.bulkInsert('Sessions', [
      // BOT._LS
      {
        teacher_id: 103,
        group_number: 1,
        date_time: "2021-04-28 08:30:00",
        class_id: "BOT._LS"
      },
      {
        teacher_id: 103,
        group_number: 7,
        date_time: "2021-04-28 10:30:00",
        class_id: "BOT._LS"
      }],{});
      await queryInterface.bulkInsert('Sessions', [
      // Mi.Al_LS
      {
        teacher_id: 103,
        group_number: 4,
        date_time: "2021-04-25 13:00:00",
        class_id: "Mi.Al_LS"
      },
      {
        teacher_id: 103,
        group_number: 2,
        date_time: "2021-04-26 13:00:00",
        class_id: "Mi.Al_LS"
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
