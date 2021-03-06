----صصصصصصصص

CREATE TABLE [dbo].[Options](---Specialite
	[Code_fillière] [nvarchar](5) NOT NULL,
	[Fillière] [nvarchar](50) NULL,
	[FillièreAr] [nvarchar](50) NULL,
	[Descriptif] [nvarchar](max) NULL,
	[nat_diplome] [nvarchar](18) NULL,
	[spécialité] [nvarchar](50) NULL,
	[specialité_ar] [nvarchar](50) NULL,
	[Code_Cycle] [varchar](5) NULL
) ON [PRIMARY]
SET ANSI_PADDING ON
ALTER TABLE [dbo].[Options] ADD [us] [varchar](10) NULL
ALTER TABLE [dbo].[Options] ADD [Réf_Département] [varchar](10) NULL
ALTER TABLE [dbo].[Options] ADD [Nbre_Année] [int] NULL
ALTER TABLE [dbo].[Options] ADD [cycle] [varchar](10) NULL
ALTER TABLE [dbo].[Options] ADD [id_resp] [int] NULL
ALTER TABLE [dbo].[Options] ADD [id_resp2] [int] NULL
ALTER TABLE [dbo].[Options] ADD [id_resp3] [int] NULL
ALTER TABLE [dbo].[Options] ADD [ann1] [nvarchar](14) NULL
ALTER TABLE [dbo].[Options] ADD [ann2] [nvarchar](14) NULL
ALTER TABLE [dbo].[Options] ADD [ann3] [nvarchar](14) NULL
ALTER TABLE [dbo].[Options] ADD [ann] [nvarchar](14) NULL
ALTER TABLE [dbo].[Options] ADD [usi] [varchar](6) NULL
/****** Object:  Index [Options$PrimaryKey]    Script Date: 03/29/2021 22:31:32 ******/
ALTER TABLE [dbo].[Options] ADD  CONSTRAINT [Options$PrimaryKey] PRIMARY KEY CLUSTERED 
(
	[Code_fillière] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]

GO

CREATE TABLE [dbo].[Unite_Enseig](
	[Code_UE] [nvarchar](55) NOT NULL,
	[UE] [nvarchar](30) NULL,
	[Coef] [nvarchar](5) NULL,
	[Année] [nvarchar](12) NULL,
	[AnnéeEtude] [nvarchar](1) NULL,
	[CycleEtude] [nvarchar](5) NULL,
	[FilièreEtude] [nvarchar](5) NULL,
	[semestre] [nvarchar](1) NULL,
	[credit] [float] NULL,
	[type_UE] [nvarchar](20) NULL,
	[PwUE] [nvarchar](10) NULL,
	[tet] [int] NULL,
	[nature] [nvarchar](6) NULL,
 CONSTRAINT [Unite_Enseig$PrimaryKey] PRIMARY KEY CLUSTERED 
(
	[Code_UE] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
CREATE TABLE [dbo].[Cours](
	[Réf_Cours] [nvarchar](15) NOT NULL,
	[Cours] [nvarchar](100) NULL,
	[Coef] [nvarchar](5) NULL,
	[VExm] [bit] NULL,
	[VRttrpg] [bit] NULL,
	[TD] [nvarchar](1) NULL,
	[VTD] [bit] NULL,
	[TP] [nvarchar](1) NULL,
	[VTP] [bit] NULL,
	[Seminaire] [nvarchar](1) NULL,
	[VSem] [bit] NULL,
	[Conférence] [nvarchar](1) NULL,
	[VConf] [bit] NULL,
	[Stage] [nvarchar](1) NULL,
	[VStg] [bit] NULL,
	[Projet] [nvarchar](1) NULL,
	[VPrj] [bit] NULL,
	[Autre_CTL] [nvarchar](1) NULL,
	[VCTL] [bit] NULL,
	[Année] [nvarchar](12) NULL,
	[AnnéeEtude] [nvarchar](1) NULL,
	[CycleEtude] [nvarchar](5) NULL,
	[FilièreEtude] [nvarchar](5) NULL,
	[Nbreemd] [smallint] NULL,
	[semestre] [nvarchar](1) NULL,
	[credit] [float] NULL,
	[coefExam] [real] NULL,
	[coefCC] [real] NULL,
	[codeUE] [nvarchar](10) NOT NULL,
	[Obligatoire] [bit] NULL,
	[PwCours] [nvarchar](10) NULL,
	[MatSaisie] [bit] NULL,
	[requise] [bit] NULL,
	[mode_calcul_rat] [smallint] NULL,
 CONSTRAINT [Cours$PrimaryKey] PRIMARY KEY CLUSTERED 
(
	[Réf_Cours] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
---------------------

CREATE TABLE [dbo].[Resultats_UE](
	[N°Ins] [nvarchar](15) NOT NULL,
	[Code_UE] [nvarchar](55) NOT NULL,
	[credit_obtenu] [float] NULL,
	[Moy_UE] [nvarchar](5) NULL,
	[Aquit] [bit] NULL,
	[exclu_ue] [bit] NULL,
	[An_d_obtent_UE] [nvarchar](4) NULL
) ON [PRIMARY]

GO
-----------------------

CREATE TABLE [dbo].[Résultats](
	[N°Ins] [nvarchar](15) NOT NULL,
	[Réf_Cours] [nvarchar](10) NOT NULL,
	[examen] [decimal](4, 2) NULL,
	[rattrapage] [decimal](4, 2) NULL,
	[Conference] [decimal](4, 2) NULL,
	[seminaire] [decimal](4, 2) NULL,
	[TD] [decimal](4, 2) NULL,
	[TP] [decimal](4, 2) NULL,
	[stage] [decimal](4, 2) NULL,
	[Projet] [decimal](4, 2) NULL,
	[autre_Ctl] [decimal](4, 2) NULL,
	[Moy_CC] [decimal](4, 2) NULL,
	[Moy_Module] [decimal](4, 2) NULL,
	[exclu_matière] [bit] NULL,
 CONSTRAINT [PK_rowid] PRIMARY KEY CLUSTERED 
(
	[rowid] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

--------------------------------
CREATE TABLE [dbo].[Etudiants](
	[N°Ins] [nvarchar](15) NOT NULL,
	[Nom_Etudiant] [nvarchar](60) NULL,
	[Prénom_Etudiant] [nvarchar](60) NULL,
	[Nom_Arabe] [nvarchar](60) NULL,
	[Prénom_Arabe] [nvarchar](60) NULL,
	[Date_naissance] [date] NULL,
	[Lieu_naissance] [nvarchar](80) NULL,
	[Sexe] [nvarchar](1) NULL,
	[Adresse] [nvarchar](100) NULL,
	[Nationnalité] [nvarchar](25) NULL,
	[Réf_Group] [smallint] NULL,
	[Réf_Section] [smallint] NULL,
	[AnnéeEtude] [nvarchar](1) NULL,
	[CycleEtude] [nvarchar](5) NULL,
	[FilièreEtude] [nvarchar](5) NULL,
	[AnnéeCycle] [nvarchar](11) NULL,	
	[Lieu_Naissance_FR] [nvarchar](80) NULL,
	[Nationalité_Fr] [nvarchar](25) NULL,
 CONSTRAINT [Etudiants$PrimaryKey] PRIMARY KEY CLUSTERED 
(
	[N°Ins] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]

GO


CREATE TABLE [dbo].[Enseignants](
	[Réf_Enseignant] [smallint] NOT NULL,
	[Nom_Enseignant] [nvarchar](20) NULL,
	[Prénom_Enseignant] [nvarchar](20) NULL,
	[Sexe] [nvarchar](1) NULL,
	[Adresse] [nvarchar](50) NULL,
	[N°Tél] [nvarchar](20) NULL,
	[chargeTD] [float] NULL,
	[chargeTP] [float] NULL,
	[grade] [varchar](40) NULL,
	[email] [varchar](40) NULL,
	[type_ens] [varchar](40) NULL,
 CONSTRAINT [Enseignants$PrimaryKey] PRIMARY KEY CLUSTERED 
(
	[Réf_Enseignant] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
