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

    //   // -------  M211_LS 
    //   // group 2 
    await queryInterface.bulkInsert('Sessions', [{
      teacher_id: 103,
      group_number: 2,
      date_time: "2021-04-27 08:30:00",
      class_id: "M211_LS"
    },], {});

    await queryInterface.bulkInsert('Sessions', [{
      teacher_id: 103,
      group_number: 2,
      date_time: "2021-05-25 08:30:00",
      class_id: "M211_LS"
    },], {});
    await queryInterface.bulkInsert('Sessions', [{
      teacher_id: 103,
      group_number: 2,
      date_time: "2021-06-01 08:30:00",
      class_id: "M211_LS"
    },], {});
    await queryInterface.bulkInsert('Sessions', [{
      teacher_id: 103,
      group_number: 2,
      date_time: "2021-04-25 08:30:00",
      class_id: "M211_LS"
    },], {});
    await queryInterface.bulkInsert('Sessions', [{
      teacher_id: 103,
      group_number: 2,
      date_time: "2021-05-30 08:30:00",
      class_id: "M211_LS"
    },], {});
    await queryInterface.bulkInsert('Sessions', [{
      teacher_id: 103,
      group_number: 2,
      date_time: "2021-06-06 08:30:00",
      class_id: "M211_LS"
    }], {});
    await queryInterface.bulkInsert('Sessions', [{
      teacher_id: 103,
      group_number: 2,
      date_time: "2021-06-13 08:30:00",
      class_id: "M211_LS"
    }], {});
    await queryInterface.bulkInsert('Sessions', [{
      teacher_id: 103,
      group_number: 2,
      date_time: "2021-06-20 08:30:00",
      class_id: "M211_LS"
    }], {});
    await queryInterface.bulkInsert('Sessions', [{
      teacher_id: 103,
      group_number: 2,
      date_time: "2021-06-27 08:30:00",
      class_id: "M211_LS"
    }], {});
    await queryInterface.bulkInsert('Sessions', [{
      teacher_id: 103,
      group_number: 2,
      date_time: "2021-07-04 08:30:00",
      class_id: "M211_LS"
    }], {});
    // await queryInterface.bulkInsert('Sessions', [ ] , {});

    // group 1 
    await queryInterface.bulkInsert('Sessions', [{
      teacher_id: 103,
      group_number: 1,
      date_time: "2021-04-27 9:30:00",
      class_id: "M211_LS"
    },], {});
    await queryInterface.bulkInsert('Sessions', [{
      teacher_id: 103,
      group_number: 1,
      date_time: "2021-04-25 09:30:00",
      class_id: "M211_LS"
    },], {});
    await queryInterface.bulkInsert('Sessions', [{
      teacher_id: 103,
      group_number: 1,
      date_time: "2021-05-30 09:30:00",
      class_id: "M211_LS"
    },], {});
    await queryInterface.bulkInsert('Sessions', [
      {
        teacher_id: 103,
        group_number: 1,
        date_time: "2021-06-06 09:30:00",
        class_id: "M211_LS"
      }
    ], {});
    await queryInterface.bulkInsert('Sessions', [
      {
        teacher_id: 103,
        group_number: 1,
        date_time: "2021-06-13 09:30:00",
        class_id: "M211_LS"
      }
    ], {});await queryInterface.bulkInsert('Sessions', [
      {
        teacher_id: 103,
        group_number: 1,
        date_time: "2021-06-20 09:30:00",
        class_id: "M211_LS"
      }
    ], {});await queryInterface.bulkInsert('Sessions', [
      {
        teacher_id: 103,
        group_number: 1,
        date_time: "2021-06-27 09:30:00",
        class_id: "M211_LS"
      }
    ], {});await queryInterface.bulkInsert('Sessions', [
      {
        teacher_id: 103,
        group_number: 1,
        date_time: "2021-07-04 09:30:00",
        class_id: "M211_LS"
      }
    ], {});

    // group 4 
    await queryInterface.bulkInsert('Sessions', [{
      teacher_id: 103,
      group_number: 4,
      date_time: "2021-04-27 10:45:00",
      class_id: "M211_LS"
    },], {});
    await queryInterface.bulkInsert('Sessions', [{
      teacher_id: 103,
      group_number: 4,
      date_time: "2021-04-25 10:45:00",
      class_id: "M211_LS"
    },], {});
    await queryInterface.bulkInsert('Sessions', [
      {
        teacher_id: 103,
        group_number: 4,
        date_time: "2021-05-30 10:45:00",
        class_id: "M211_LS"
      },], {});
    await queryInterface.bulkInsert('Sessions', [
      {
        teacher_id: 103,
        group_number: 4,
        date_time: "2021-06-06 10:45:00",
        class_id: "M211_LS"
      }
    ], {});
    await queryInterface.bulkInsert('Sessions', [
      {
        teacher_id: 103,
        group_number: 4,
        date_time: "2021-06-13 10:45:00",
        class_id: "M211_LS"
      }
    ], {});await queryInterface.bulkInsert('Sessions', [
      {
        teacher_id: 103,
        group_number: 4,
        date_time: "2021-06-20 10:45:00",
        class_id: "M211_LS"
      }
    ], {});await queryInterface.bulkInsert('Sessions', [
      {
        teacher_id: 103,
        group_number: 4,
        date_time: "2021-06-27 10:45:00",
        class_id: "M211_LS"
      }
    ], {});await queryInterface.bulkInsert('Sessions', [
      {
        teacher_id: 103,
        group_number: 4,
        date_time: "2021-07-04 10:45:00",
        class_id: "M211_LS"
      }
    ], {});


    // group 3 
    await queryInterface.bulkInsert('Sessions', [{
      teacher_id: 103,
      group_number: 3,
      date_time: "2021-04-27 11:45:00",
      class_id: "M211_LS"
    }], {});
    await queryInterface.bulkInsert('Sessions', [{
      teacher_id: 103,
      group_number: 3,
      date_time: "2021-04-25 11:45:00",
      class_id: "M211_LS"
    }], {});
    await queryInterface.bulkInsert('Sessions', [{
      teacher_id: 103,
      group_number: 3,
      date_time: "2021-05-30 11:45:00",
      class_id: "M211_LS"
    }
    ], {});
    await queryInterface.bulkInsert('Sessions', [
      {
        teacher_id: 103,
        group_number: 3,
        date_time: "2021-06-06 11:45:00",
        class_id: "M211_LS"
      }
    ], {});
    await queryInterface.bulkInsert('Sessions', [
      {
        teacher_id: 103,
        group_number: 3,
        date_time: "2021-06-13 11:45:00",
        class_id: "M211_LS"
      }
    ], {});await queryInterface.bulkInsert('Sessions', [
      {
        teacher_id: 103,
        group_number: 3,
        date_time: "2021-06-20 11:45:00",
        class_id: "M211_LS"
      }
    ], {});await queryInterface.bulkInsert('Sessions', [
      {
        teacher_id: 103,
        group_number: 3,
        date_time: "2021-06-27 11:45:00",
        class_id: "M211_LS"
      }
    ], {});await queryInterface.bulkInsert('Sessions', [
      {
        teacher_id: 103,
        group_number: 3,
        date_time: "2021-07-04 11:45:00",
        class_id: "M211_LS"
      }
    ], {});


    // M3:MB_MS
    // group 1
    await queryInterface.bulkInsert('Sessions', [{
      teacher_id: 103,
      group_number: 1,
      date_time: "2021-04-28 11:45:00",
      class_id: "M3:MB_MS"
    }], {});
    // group 2
    await queryInterface.bulkInsert('Sessions', [{
      teacher_id: 103,
      group_number: 2,
      date_time: "2021-04-28 10:45:00",
      class_id: "M3:MB_MS"
    }], {});
    await queryInterface.bulkInsert('Sessions', [{
      teacher_id: 103,
      group_number: 2,
      date_time: "2021-05-26 10:45:00",
      class_id: "M3:MB_MS"
    }], {});
    await queryInterface.bulkInsert('Sessions', [{
      teacher_id: 103,
      group_number: 2,
      date_time: "2021-06-02 10:45:00",
      class_id: "M3:MB_MS"
    }], {});

    await queryInterface.bulkInsert('Sessions', [{
      teacher_id: 103,
      group_number: 2,
      date_time: "2021-06-09 10:45:00",
      class_id: "M3:MB_MS"
    }], {});

    await queryInterface.bulkInsert('Sessions', [{
      teacher_id: 103,
      group_number: 2,
      date_time: "2021-06-16 10:45:00",
      class_id: "M3:MB_MS"
    }], {});


    await queryInterface.bulkInsert('Sessions', [{
      teacher_id: 103,
      group_number: 2,
      date_time: "2021-06-23 10:45:00",
      class_id: "M3:MB_MS"
    }], {});

    await queryInterface.bulkInsert('Sessions', [{
      teacher_id: 103,
      group_number: 2,
      date_time: "2021-06-30 10:45:00",
      class_id: "M3:MB_MS"
    }], {});

    await queryInterface.bulkInsert('Sessions', [{
      teacher_id: 103,
      group_number: 2,
      date_time: "2021-07-07 10:45:00",
      class_id: "M3:MB_MS"
    }], {});
    
    

    // A.P.P_MS
    // group 2 
    await queryInterface.bulkInsert('Sessions', [{
      teacher_id: 103,
      group_number: 2,
      date_time: "2021-04-26 08:30:00",
      class_id: "A.P.P_MS"
    }], {});
    // group 4
    await queryInterface.bulkInsert('Sessions', [{
      teacher_id: 103,
      group_number: 4,
      date_time: "2021-04-27 09:45:00",
      class_id: "A.P.P_MS"
    }], {});
    await queryInterface.bulkInsert('Sessions', [{
      teacher_id: 103,
      group_number: 4,
      date_time: "2021-05-30 09:45:00",
      class_id: "A.P.P_MS"
    }], {});
    await queryInterface.bulkInsert('Sessions', [
      {
        teacher_id: 103,
        group_number: 4,
        date_time: "2021-06-06 09:45:00",
        class_id: "A.P.P_MS"
      }
    ], {});
    await queryInterface.bulkInsert('Sessions', [
      {
        teacher_id: 103,
        group_number: 4,
        date_time: "2021-06-13 09:45:00",
        class_id: "A.P.P_MS"
      }
    ], {});
    await queryInterface.bulkInsert('Sessions', [
      {
        teacher_id: 103,
        group_number: 4,
        date_time: "2021-06-20 09:45:00",
        class_id: "A.P.P_MS"
      }
    ], {});
    await queryInterface.bulkInsert('Sessions', [
      {
        teacher_id: 103,
        group_number: 4,
        date_time: "2021-06-27 09:45:00",
        class_id: "A.P.P_MS"
      }
    ], {});
    await queryInterface.bulkInsert('Sessions', [
      {
        teacher_id: 103,
        group_number: 4,
        date_time: "2021-07-04 09:45:00",
        class_id: "A.P.P_MS"
      }
    ], {});

    // BOT._LS
    // group 1
    await queryInterface.bulkInsert('Sessions', [{
      teacher_id: 103,
      group_number: 1,
      date_time: "2021-04-28 08:30:00",
      class_id: "BOT._LS"
    }], {});
    await queryInterface.bulkInsert('Sessions', [{
      teacher_id: 103,
      group_number: 7,
      date_time: "2021-04-28 10:30:00",
      class_id: "BOT._LS"
    }], {});
    await queryInterface.bulkInsert('Sessions', [{
      teacher_id: 103,
      group_number: 7,
      date_time: "2021-05-26 10:30:00",
      class_id: "BOT._LS"
    }], {});
    await queryInterface.bulkInsert('Sessions', [
      {
        teacher_id: 103,
        group_number: 7,
        date_time: "2021-06-02 10:30:00",
        class_id: "BOT._LS"
      }
    ], {});
    await queryInterface.bulkInsert('Sessions', [
      {
        teacher_id: 103,
        group_number: 7,
        date_time: "2021-06-09 10:30:00",
        class_id: "BOT._LS"
      }
    ], {});
    await queryInterface.bulkInsert('Sessions', [
      {
        teacher_id: 103,
        group_number: 7,
        date_time: "2021-06-16 10:30:00",
        class_id: "BOT._LS"
      }
    ], {});
    await queryInterface.bulkInsert('Sessions', [
      {
        teacher_id: 103,
        group_number: 7,
        date_time: "2021-06-23 10:30:00",
        class_id: "BOT._LS"
      }
    ], {});
    await queryInterface.bulkInsert('Sessions', [
      {
        teacher_id: 103,
        group_number: 7,
        date_time: "2021-06-30 10:30:00",
        class_id: "BOT._LS"
      }
    ], {});
    await queryInterface.bulkInsert('Sessions', [
      {
        teacher_id: 103,
        group_number: 7,
        date_time: "2021-07-07 10:30:00",
        class_id: "BOT._LS"
      }
    ], {});

    // Mi.Al_LS
    // group 4
    await queryInterface.bulkInsert('Sessions', [{
      teacher_id: 103,
      group_number: 4,
      date_time: "2021-04-25 13:00:00",
      class_id: "Mi.Al_LS"
    }], {});
    // group 2
    await queryInterface.bulkInsert('Sessions', [{
      teacher_id: 103,
      group_number: 2,
      date_time: "2021-04-26 13:00:00",
      class_id: "Mi.Al_LS"
    }], {});
    await queryInterface.bulkInsert('Sessions', [{
      teacher_id: 103,
      group_number: 2,
      date_time: "2021-05-30 13:00:00",
      class_id: "Mi.Al_LS"
    }], {});

    await queryInterface.bulkInsert('Sessions', [
      {
        teacher_id: 103,
        group_number: 2,
        date_time: "2021-06-06 13:00:00",
        class_id: "Mi.Al_LS"
      },
    ], {});
    await queryInterface.bulkInsert('Sessions', [
      {
        teacher_id: 103,
        group_number: 2,
        date_time: "2021-06-13 13:00:00",
        class_id: "Mi.Al_LS"
      },
    ], {});
    await queryInterface.bulkInsert('Sessions', [
      {
        teacher_id: 103,
        group_number: 2,
        date_time: "2021-06-20 13:00:00",
        class_id: "Mi.Al_LS"
      },
    ], {});
    await queryInterface.bulkInsert('Sessions', [
      {
        teacher_id: 103,
        group_number: 2,
        date_time: "2021-06-27 13:00:00",
        class_id: "Mi.Al_LS"
      },
    ], {});
    await queryInterface.bulkInsert('Sessions', [
      {
        teacher_id: 103,
        group_number: 2,
        date_time: "2021-07-04 13:00:00",
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
