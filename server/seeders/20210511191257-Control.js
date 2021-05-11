'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     
    */

    // M211_LS: Physique // 1SNVTCSNV
    //  session_id:43,
    await queryInterface.bulkInsert('Control', [
      {
        session_id: 43,
        student_id: '29131610046_LS',
        absent: 0,
        session_evaluation: 1,
        test_grade: 0
      },
      {
        session_id: 43,
        student_id: '29131610082_LS',
        absent: 0,
        session_evaluation: 1,
        test_grade: 0
      }, {
        session_id: 43,
        student_id: '29131610171_LS',
        absent: 0,
        session_evaluation: 1,
        test_grade: 0
      },
      {
        session_id: 43,
        student_id: '29131610215_LS',
        absent: 0,
        session_evaluation: 1,
        test_grade: 0
      },
      {
        session_id: 43,
        student_id: '29131610218_LS',
        absent: 0,
        session_evaluation: 1,
        test_grade: 0
      }, {
        session_id: 43,
        student_id: '29131610234_LS',
        absent: 0,
        session_evaluation: 1,
        test_grade: 0
      },
      {
        session_id: 43,
        student_id: '29131610312_LS',
        absent: 1,
        session_evaluation: 1,
        test_grade: 0
      },
      {
        session_id: 43,
        student_id: '29131610316_LS',
        absent: 1,
        session_evaluation: 1,
        test_grade: 0
      },
      {
        session_id: 43,
        student_id: '29131610333_LS',
        absent: 0,
        session_evaluation: 1,
        test_grade: 0
      }, {
        session_id: 43,
        student_id: '29131610353_LS',
        absent: 0,
        session_evaluation: 1,
        test_grade: 0
      }, {
        session_id: 43,
        student_id: '29131610361_LS',
        absent: 0,
        session_evaluation: 1,
        test_grade: 0
      },


    ], {});
    //  session_id:47,
    await queryInterface.bulkInsert('Control', [
      {
        session_id: 47,
        student_id: '29131610046_LS',
        absent: 1,
        session_evaluation: 1,
        test_grade: 0
      },
      {
        session_id: 47,
        student_id: '29131610082_LS',
        absent: 0,
        session_evaluation: 1,
        test_grade: 0
      }, {
        session_id: 47,
        student_id: '29131610171_LS',
        absent: 0,
        session_evaluation: 1,
        test_grade: 0
      },
      {
        session_id: 47,
        student_id: '29131610215_LS',
        absent: 0,
        session_evaluation: 1,
        test_grade: 0
      },
      {
        session_id: 47,
        student_id: '29131610218_LS',
        absent: 0,
        session_evaluation: 1,
        test_grade: 0
      }, {
        session_id: 47,
        student_id: '29131610234_LS',
        absent: 0,
        session_evaluation: 1,
        test_grade: 0
      },
      {
        session_id: 47,
        student_id: '29131610312_LS',
        absent: 1,
        session_evaluation: 1,
        test_grade: 0
      },
      {
        session_id: 47,
        student_id: '29131610316_LS',
        absent: 1,
        session_evaluation: 1,
        test_grade: 0
      },
      {
        session_id: 47,
        student_id: '29131610333_LS',
        absent: 0,
        session_evaluation: 1,
        test_grade: 0
      }, {
        session_id: 47,
        student_id: '29131610353_LS',
        absent: 0,
        session_evaluation: 1,
        test_grade: 0
      }, {
        session_id: 47,
        student_id: '29131610361_LS',
        absent: 0,
        session_evaluation: 1,
        test_grade: 0
      },
    ], {});


    // BOT._LS : Botanique // 2SNVTCSB 
    // session_id: 55
    await queryInterface.bulkInsert('Control', [
      {
        session_id: 55,
        student_id: '29131610124_LS',
        absent: 1,
        session_evaluation: 1,
        test_grade: 0
      },
      {
        session_id: 55,
        student_id: '29131610174_LS',
        absent: 0,
        session_evaluation: 1,
        test_grade: 0
      }, {
        session_id: 55,
        student_id: '29131610179_LS',
        absent: 0,
        session_evaluation: 1,
        test_grade: 0
      },
      {
        session_id: 55,
        student_id: '29131610300_LS',
        absent: 0,
        session_evaluation: 1,
        test_grade: 0
      },
      {
        session_id: 55,
        student_id: '29131610414_LS',
        absent: 0,
        session_evaluation: 1,
        test_grade: 0
      }, {
        session_id: 55,
        student_id: '29131610543_LS',
        absent: 0,
        session_evaluation: 1,
        test_grade: 0
      },
      {
        session_id: 55,
        student_id: '29131610657_LS',
        absent: 1,
        session_evaluation: 1,
        test_grade: 0
      },
      {
        session_id: 55,
        student_id: '29131610689_LS',
        absent: 1,
        session_evaluation: 1,
        test_grade: 0
      },
      {
        session_id: 55,
        student_id: '29131610700_LS',
        absent: 0,
        session_evaluation: 1,
        test_grade: 0
      }, {
        session_id: 55,
        student_id: '29131610726_LS',
        absent: 0,
        session_evaluation: 1,
        test_grade: 0
      }, {
        session_id: 55,
        student_id: '29131611310_LS',
        absent: 0,
        session_evaluation: 1,
        test_grade: 0
      },
      {
        session_id: 55,
        student_id: '29131611313_LS',
        absent: 0,
        session_evaluation: 1,
        test_grade: 0
      }, {
        session_id: 55,
        student_id: '29131611344_LS',
        absent: 0,
        session_evaluation: 1,
        test_grade: 0
      }
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
