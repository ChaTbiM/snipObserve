'use strict';

const TRIGGER_NAME = 'trg_create_control';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.createTable('Sessions',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        teacher_id: Sequelize.SMALLINT,
        // Cours = Module = Subject 
        class_id: Sequelize.STRING(15),
        // Possibly Allow null in the future ??
        group_number: Sequelize.INTEGER,
        date_time: Sequelize.DATE
      });

    await queryInterface.sequelize.query(`
      CREATE TRIGGER [dbo].[${TRIGGER_NAME}]
     ON [dbo].[Sessions]
     AFTER INSERT
     AS
     BEGIN
         SET NOCOUNT ON;
     
       DECLARE @StudentsIds TABLE(tableId int NOT NULL IDENTITY, id VARCHAR(15));
       DECLARE @SessionId BIGINT = 0;
       
       DECLARE @Control TABLE(student_id VARCHAR(15), session_id int);
       
       DECLARE @SpecialtyCode VARCHAR(255);
       DECLARE @ClassId VARCHAR(255);
       DECLARE @GroupNumber BIGINT = 0;
       DECLARE @RowCount BIGINT = 0;
       DECLARE @Cursour INT = 0;
     
       
       
       SELECT @ClassId = i.class_id FROM inserted i; 
     
       
       
       SELECT @GroupNumber = i.group_number from inserted i;
       
     
       SET @SpecialtyCode =  (SELECT C.Année FROM dbo.Cours C WHERE C.Réf_Cours = @ClassId );
       SELECT @SpecialtyCode = LEFT(@SpecialtyCode , len(@SpecialtyCode) - 1 );
       
     
       INSERT INTO @StudentsIds
       SELECT E.[N°Ins] FROM [dbo].Etudiants E
       WHERE E.[AnnéeCycle] = @SpecialtyCode AND E.Réf_Group = @GroupNumber
       
       SELECT @RowCount = COUNT(0) FROM @StudentsIds 
       
       SELECT @SessionId = i.id FROM inserted i;
       
       
       WHILE @Cursour <= @RowCount
       BEGIN
          INSERT INTO [dbo].[Control](student_id,session_id)
          SELECT SI.id AS student_id , @SessionId AS session_id FROM @StudentsIds SI
          WHERE SI.tableId = @Cursour;
     
          SET @Cursour = @Cursour + 1;
       END
     END
    
      `)

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     */
    await queryInterface.dropTable('Sessions');
  }
};
