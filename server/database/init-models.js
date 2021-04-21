var DataTypes = require("sequelize").DataTypes;
var _Affectations = require("../models/Affectations");
var _AnnexeDiplome = require("../models/AnnexeDiplome");
var _Annee = require("../models/Annee");
var _AnneeCycle = require("../models/AnneeCycle");
var _CongeAcademique = require("../models/CongeAcademique");
var _Cours = require("../models/Cours");
var _Daira = require("../models/Daira");
var _Dossier = require("../models/Dossier");
var _Departements = require("../models/Departements");
var _Emplacements = require("../models/Emplacements");
var _Enseignants = require("../models/Enseignants");
var _Etudiants = require("../models/Etudiants");
var _Facultes = require("../models/Facultes");
var _Filieres = require("../models/Filieres");
var _Fonctions = require("../models/Fonctions");
var _Grades = require("../models/Grades");
var _Historique = require("../models/Historique");
var _HistoriqueUe = require("../models/HistoriqueUe");
var _Jour = require("../models/Jour");
var _OccupationSalles = require("../models/OccupationSalles");
var _Options = require("../models/Options");
var _ResultatsUe = require("../models/ResultatsUe");
var _Resultats = require("../models/Resultats");
var _Semestre = require("../models/Semestre");
var _Sexes = require("../models/Sexes");
var _Statistiques = require("../models/Statistiques");
var _Series = require("../models/Series");
var _Tabb = require("../models/Tabb");
var _Tabb1 = require("../models/Tabb1");
var _TabAnnexe2Snvbiot = require("../models/TabAnnexe2Snvbiot");
var _TabAnnexe2SnvbioA = require("../models/TabAnnexe2SnvbioA");
var _TabAnnexe2Snvcp = require("../models/TabAnnexe2Snvcp");
var _TabAnnexe2Snvmpv = require("../models/TabAnnexe2Snvmpv");
var _TabAnnexe2SnvnutD = require("../models/TabAnnexe2SnvnutD");
var _TabAnnexe2Snvphp = require("../models/TabAnnexe2Snvphp");
var _TabAnnexe2Snvpna = require("../models/TabAnnexe2Snvpna");
var _TabAnnexe2SnvqPS = require("../models/TabAnnexe2SnvqPS");
var _TabAnnexe2StUmh = require("../models/TabAnnexe2StUmh");
var _TabAnnexe3Snv3Eve = require("../models/TabAnnexe3Snv3Eve");
var _TabAnnexe3SnvaBA = require("../models/TabAnnexe3SnvaBA");
var _TabAnnexe3SnvaNP = require("../models/TabAnnexe3SnvaNP");
var _TabAnnexe3Snvmic = require("../models/TabAnnexe3Snvmic");
var _TabAnnexe3SnvpA = require("../models/TabAnnexe3SnvpA");
var _TabCurE2Snvbiot = require("../models/TabCurE2Snvbiot");
var _TabCurE2Snvcp = require("../models/TabCurE2Snvcp");
var _TabCurE2SnvnutD = require("../models/TabCurE2SnvnutD");
var _TabCurE2Snvphp = require("../models/TabCurE2Snvphp");
var _TabCurE2Snvpna = require("../models/TabCurE2Snvpna");
var _TabCurE2Snvtcagr = require("../models/TabCurE2Snvtcagr");
var _TabCurE2Snvtcsb = require("../models/TabCurE2Snvtcsb");
var _TabCurE3Snv3Eve = require("../models/TabCurE3Snv3Eve");
var _TabCurE3SnvaBA = require("../models/TabCurE3SnvaBA");
var _TabCurE3SnvaNP = require("../models/TabCurE3SnvaNP");
var _TabCurE3Snvmic = require("../models/TabCurE3Snvmic");
var _TabCurE3SnvpV = require("../models/TabCurE3SnvpV");
var _TabCurE3SnvtPV = require("../models/TabCurE3SnvtPV");
var _TabCurE3Stuga = require("../models/TabCurE3Stuga");
var _TabCur1Snvtcsnv1 = require("../models/TabCur1Snvtcsnv1");
var _TabCur2Snvbiot0 = require("../models/TabCur2Snvbiot0");
var _TabCur2Snvbiot1 = require("../models/TabCur2Snvbiot1");
var _TabCur2SnvbioA0 = require("../models/TabCur2SnvbioA0");
var _TabCur2SnvbioA1 = require("../models/TabCur2SnvbioA1");
var _TabCur2Snvcp0 = require("../models/TabCur2Snvcp0");
var _TabCur2Snvcp1 = require("../models/TabCur2Snvcp1");
var _TabCur2Snvmpv0 = require("../models/TabCur2Snvmpv0");
var _TabCur2Snvmpv1 = require("../models/TabCur2Snvmpv1");
var _TabCur2SnvnutD0 = require("../models/TabCur2SnvnutD0");
var _TabCur2SnvnutD1 = require("../models/TabCur2SnvnutD1");
var _TabCur2Snvphp0 = require("../models/TabCur2Snvphp0");
var _TabCur2Snvpna0 = require("../models/TabCur2Snvpna0");
var _TabCur2Snvpna1 = require("../models/TabCur2Snvpna1");
var _TabCur2SnvqPS0 = require("../models/TabCur2SnvqPS0");
var _TabCur2SnvqPS1 = require("../models/TabCur2SnvqPS1");
var _TabCur2StUmh0 = require("../models/TabCur2StUmh0");
var _TabCur2StUmh1 = require("../models/TabCur2StUmh1");
var _TabCur3Snv3Eve0 = require("../models/TabCur3Snv3Eve0");
var _TabCur3Snv3Eve1 = require("../models/TabCur3Snv3Eve1");
var _TabCur3SnvaBA0 = require("../models/TabCur3SnvaBA0");
var _TabCur3SnvaBA1 = require("../models/TabCur3SnvaBA1");
var _TabCur3SnvaNP0 = require("../models/TabCur3SnvaNP0");
var _TabCur3SnvaNP1 = require("../models/TabCur3SnvaNP1");
var _TabCur3Snvmic0 = require("../models/TabCur3Snvmic0");
var _TabCur3Snvmic1 = require("../models/TabCur3Snvmic1");
var _TabCur3SnvpA0 = require("../models/TabCur3SnvpA0");
var _TabCur3SnvpA1 = require("../models/TabCur3SnvpA1");
var _TabCur3SnvpV0 = require("../models/TabCur3SnvpV0");
var _TabCur3SnvpV1 = require("../models/TabCur3SnvpV1");
var _TabCur3SnvtPV0 = require("../models/TabCur3SnvtPV0");
var _TabCur3SnvtPV1 = require("../models/TabCur3SnvtPV1");
var _TabCur3Stuga0 = require("../models/TabCur3Stuga0");
var _TabCur3Stuga1 = require("../models/TabCur3Stuga1");
var _TabCursus = require("../models/TabCursus");
var _TabDbRel = require("../models/TabDbRel");
var _TabDbaData = require("../models/TabDbaData");
var _TabRel1SnvbiotBio2 = require("../models/TabRel1SnvbiotBio2");
var _TabRel1SnvbioABio2 = require("../models/TabRel1SnvbioABio2");
var _TabRel1SnvcpAg1 = require("../models/TabRel1SnvcpAg1");
var _TabRel1SnvnutDBio2 = require("../models/TabRel1SnvnutDBio2");
var _TabRel1SnvphpAg1 = require("../models/TabRel1SnvphpAg1");
var _TabRel1SnvpnaAg1 = require("../models/TabRel1SnvpnaAg1");
var _TabRel1SnvqPSBio2 = require("../models/TabRel1SnvqPSBio2");
var _TabRel1SnvtcsnvBio1 = require("../models/TabRel1SnvtcsnvBio1");
var _TabRel1StugeoAg1 = require("../models/TabRel1StugeoAg1");
var _TabRel1StUmhAg1 = require("../models/TabRel1StUmhAg1");
var _TabRel2SnvbiotBio2 = require("../models/TabRel2SnvbiotBio2");
var _TabRel2SnvbioABio2 = require("../models/TabRel2SnvbioABio2");
var _TabRel2SnvcpAg1 = require("../models/TabRel2SnvcpAg1");
var _TabRel2SnveveBio1 = require("../models/TabRel2SnveveBio1");
var _TabRel2SnveveVdfsn = require("../models/TabRel2SnveveVdfsn");
var _TabRel2SnvmpvAg1 = require("../models/TabRel2SnvmpvAg1");
var _TabRel2SnvnutDBio2 = require("../models/TabRel2SnvnutDBio2");
var _TabRel2SnvphpAg1 = require("../models/TabRel2SnvphpAg1");
var _TabRel2SnvpnaAg1 = require("../models/TabRel2SnvpnaAg1");
var _TabRel2SnvqPSBio2 = require("../models/TabRel2SnvqPSBio2");
var _TabRel2SnvtcagrAg1 = require("../models/TabRel2SnvtcagrAg1");
var _TabRel2SnvtcsaBio1 = require("../models/TabRel2SnvtcsaBio1");
var _TabRel2SnvtcsbBio1 = require("../models/TabRel2SnvtcsbBio1");
var _TabRel2StugeoAg1 = require("../models/TabRel2StugeoAg1");
var _TabRel2StUmhAg1 = require("../models/TabRel2StUmhAg1");
var _TabRel3Snv3EveBio1 = require("../models/TabRel3Snv3EveBio1");
var _TabRel3SnvaBABio1 = require("../models/TabRel3SnvaBABio1");
var _TabRel3SnvaNPBio1 = require("../models/TabRel3SnvaNPBio1");
var _TabRel3SnvmicBio1 = require("../models/TabRel3SnvmicBio1");
var _TabRel3SnvpAAg1 = require("../models/TabRel3SnvpAAg1");
var _TabRel3SnvpVAg1 = require("../models/TabRel3SnvpVAg1");
var _TabRel3SnvtPVAg1 = require("../models/TabRel3SnvtPVAg1");
var _TabRel3StugaAg1 = require("../models/TabRel3StugaAg1");
var _TabSem01SnvbioA2Bio2 = require("../models/TabSem01SnvbioA2Bio2");
var _TabSem01Snvtcsnv1Bio1 = require("../models/TabSem01Snvtcsnv1Bio1");
var _TabSem03SnvaBA5Bio1 = require("../models/TabSem03SnvaBA5Bio1");
var _TabSem03SnvpA5Ag1 = require("../models/TabSem03SnvpA5Ag1");
var _TabSem03SnvpV5Ag1 = require("../models/TabSem03SnvpV5Ag1");
var _TabSem03SnvpV6Ag1 = require("../models/TabSem03SnvpV6Ag1");
var _TabSem03Stuga6Ag1 = require("../models/TabSem03Stuga6Ag1");
var _TabSem11Snvbiot1Bio2 = require("../models/TabSem11Snvbiot1Bio2");
var _TabSem11Snvbiot2Bio2 = require("../models/TabSem11Snvbiot2Bio2");
var _TabSem11Snvbiot2Vdfsn = require("../models/TabSem11Snvbiot2Vdfsn");
var _TabSem11SnvbioA1Bio2 = require("../models/TabSem11SnvbioA1Bio2");
var _TabSem11SnvbioA2Bio2 = require("../models/TabSem11SnvbioA2Bio2");
var _TabSem11Snvcp1Ag1 = require("../models/TabSem11Snvcp1Ag1");
var _TabSem11Snvcp1Vdfsn = require("../models/TabSem11Snvcp1Vdfsn");
var _TabSem11Snvcp2Ag1 = require("../models/TabSem11Snvcp2Ag1");
var _TabSem11Snvcp2Vdfsn = require("../models/TabSem11Snvcp2Vdfsn");
var _TabSem11SnvnutD1Bio2 = require("../models/TabSem11SnvnutD1Bio2");
var _TabSem11SnvnutD2Bio2 = require("../models/TabSem11SnvnutD2Bio2");
var _TabSem11Snvphp1Ag1 = require("../models/TabSem11Snvphp1Ag1");
var _TabSem11Snvphp1Vdfsn = require("../models/TabSem11Snvphp1Vdfsn");
var _TabSem11Snvphp2Ag1 = require("../models/TabSem11Snvphp2Ag1");
var _TabSem11Snvpna1Ag1 = require("../models/TabSem11Snvpna1Ag1");
var _TabSem11Snvpna2Ag1 = require("../models/TabSem11Snvpna2Ag1");
var _TabSem11SnvqPS1Bio2 = require("../models/TabSem11SnvqPS1Bio2");
var _TabSem11SnvqPS1Vdfsn = require("../models/TabSem11SnvqPS1Vdfsn");
var _TabSem11SnvqPS2Bio2 = require("../models/TabSem11SnvqPS2Bio2");
var _TabSem11Snvtcsnv1Bio1 = require("../models/TabSem11Snvtcsnv1Bio1");
var _TabSem11Snvtcsnv1Vdfsn = require("../models/TabSem11Snvtcsnv1Vdfsn");
var _TabSem11Snvtcsnv2Bio1 = require("../models/TabSem11Snvtcsnv2Bio1");
var _TabSem11Snvtcsnv2Vdfsn = require("../models/TabSem11Snvtcsnv2Vdfsn");
var _TabSem11Stugeo1Ag1 = require("../models/TabSem11Stugeo1Ag1");
var _TabSem11Stugeo1Vdfsn = require("../models/TabSem11Stugeo1Vdfsn");
var _TabSem11Stugeo2Ag1 = require("../models/TabSem11Stugeo2Ag1");
var _TabSem11Stugeo2Vdfsn = require("../models/TabSem11Stugeo2Vdfsn");
var _TabSem11StUmh1Ag1 = require("../models/TabSem11StUmh1Ag1");
var _TabSem11StUmh1Vdfsn = require("../models/TabSem11StUmh1Vdfsn");
var _TabSem11StUmh2Ag1 = require("../models/TabSem11StUmh2Ag1");
var _TabSem12Snvbiot3Bio2 = require("../models/TabSem12Snvbiot3Bio2");
var _TabSem12Snvbiot4Bio2 = require("../models/TabSem12Snvbiot4Bio2");
var _TabSem12SnvbioA3Bio2 = require("../models/TabSem12SnvbioA3Bio2");
var _TabSem12SnvbioA4Bio2 = require("../models/TabSem12SnvbioA4Bio2");
var _TabSem12Snvcp3Ag1 = require("../models/TabSem12Snvcp3Ag1");
var _TabSem12Snvcp4Ag1 = require("../models/TabSem12Snvcp4Ag1");
var _TabSem12Snveve3Bio1 = require("../models/TabSem12Snveve3Bio1");
var _TabSem12Snveve4Bio1 = require("../models/TabSem12Snveve4Bio1");
var _TabSem12Snvmpv4Ag1 = require("../models/TabSem12Snvmpv4Ag1");
var _TabSem12SnvnutD3Bio2 = require("../models/TabSem12SnvnutD3Bio2");
var _TabSem12SnvnutD3Vdfsn = require("../models/TabSem12SnvnutD3Vdfsn");
var _TabSem12SnvnutD4Bio2 = require("../models/TabSem12SnvnutD4Bio2");
var _TabSem12Snvphp4Ag1 = require("../models/TabSem12Snvphp4Ag1");
var _TabSem12Snvpna3Ag1 = require("../models/TabSem12Snvpna3Ag1");
var _TabSem12Snvpna4Ag1 = require("../models/TabSem12Snvpna4Ag1");
var _TabSem12Snvpna4Vdfsn = require("../models/TabSem12Snvpna4Vdfsn");
var _TabSem12SnvqPS3Bio2 = require("../models/TabSem12SnvqPS3Bio2");
var _TabSem12SnvqPS3Vdfsn = require("../models/TabSem12SnvqPS3Vdfsn");
var _TabSem12SnvqPS4Bio2 = require("../models/TabSem12SnvqPS4Bio2");
var _TabSem12Snvtcagr3Ag1 = require("../models/TabSem12Snvtcagr3Ag1");
var _TabSem12Snvtcsa3Bio1 = require("../models/TabSem12Snvtcsa3Bio1");
var _TabSem12Snvtcsa3Vdfsn = require("../models/TabSem12Snvtcsa3Vdfsn");
var _TabSem12Snvtcsa4Bio1 = require("../models/TabSem12Snvtcsa4Bio1");
var _TabSem12Snvtcsa4Vdfsn = require("../models/TabSem12Snvtcsa4Vdfsn");
var _TabSem12Snvtcsb3Bio1 = require("../models/TabSem12Snvtcsb3Bio1");
var _TabSem12Snvtcsb4Bio1 = require("../models/TabSem12Snvtcsb4Bio1");
var _TabSem12Snvtcsb4Vdfsn = require("../models/TabSem12Snvtcsb4Vdfsn");
var _TabSem12Stugeo3Ag1 = require("../models/TabSem12Stugeo3Ag1");
var _TabSem12Stugeo3Vdfsn = require("../models/TabSem12Stugeo3Vdfsn");
var _TabSem12Stugeo4Ag1 = require("../models/TabSem12Stugeo4Ag1");
var _TabSem12Stugeo4Vdfsn = require("../models/TabSem12Stugeo4Vdfsn");
var _TabSem12StUmh4Ag1 = require("../models/TabSem12StUmh4Ag1");
var _TabSem13Snv3Eve5Bio1 = require("../models/TabSem13Snv3Eve5Bio1");
var _TabSem13Snv3Eve6Bio1 = require("../models/TabSem13Snv3Eve6Bio1");
var _TabSem13SnvaBA5Bio1 = require("../models/TabSem13SnvaBA5Bio1");
var _TabSem13SnvaBA6Bio1 = require("../models/TabSem13SnvaBA6Bio1");
var _TabSem13SnvaBA6Vdfsn = require("../models/TabSem13SnvaBA6Vdfsn");
var _TabSem13SnvaNP5Bio1 = require("../models/TabSem13SnvaNP5Bio1");
var _TabSem13SnvaNP6Bio1 = require("../models/TabSem13SnvaNP6Bio1");
var _TabSem13Snvmic5Bio1 = require("../models/TabSem13Snvmic5Bio1");
var _TabSem13Snvmic6Bio1 = require("../models/TabSem13Snvmic6Bio1");
var _TabSem13SnvpA5Ag1 = require("../models/TabSem13SnvpA5Ag1");
var _TabSem13SnvpA6Ag1 = require("../models/TabSem13SnvpA6Ag1");
var _TabSem13SnvpA6Vdfsn = require("../models/TabSem13SnvpA6Vdfsn");
var _TabSem13SnvpV5Ag1 = require("../models/TabSem13SnvpV5Ag1");
var _TabSem13SnvpV6Ag1 = require("../models/TabSem13SnvpV6Ag1");
var _TabSem13SnvtPV5Ag1 = require("../models/TabSem13SnvtPV5Ag1");
var _TabSem13SnvtPV5Vdfsn = require("../models/TabSem13SnvtPV5Vdfsn");
var _TabSem13SnvtPV6Ag1 = require("../models/TabSem13SnvtPV6Ag1");
var _TabSem13SnvtPV6Vdfsn = require("../models/TabSem13SnvtPV6Vdfsn");
var _TabSem13Stuga5Ag1 = require("../models/TabSem13Stuga5Ag1");
var _TabSem13Stuga5Vdfsn = require("../models/TabSem13Stuga5Vdfsn");
var _TabSem13Stuga6Ag1 = require("../models/TabSem13Stuga6Ag1");
var _TabSem13Stuga6Vdfsn = require("../models/TabSem13Stuga6Vdfsn");
var _TabSem21Snvbiot1Bio2 = require("../models/TabSem21Snvbiot1Bio2");
var _TabSem21Snvbiot1Vdfsn = require("../models/TabSem21Snvbiot1Vdfsn");
var _TabSem21Snvbiot2Bio2 = require("../models/TabSem21Snvbiot2Bio2");
var _TabSem21SnvbioA1Bio2 = require("../models/TabSem21SnvbioA1Bio2");
var _TabSem21SnvbioA1Vdfsn = require("../models/TabSem21SnvbioA1Vdfsn");
var _TabSem21SnvbioA2Bio2 = require("../models/TabSem21SnvbioA2Bio2");
var _TabSem21SnvbioA2Vdfsn = require("../models/TabSem21SnvbioA2Vdfsn");
var _TabSem21Snvcp1Ag1 = require("../models/TabSem21Snvcp1Ag1");
var _TabSem21Snvcp1Vdfsn = require("../models/TabSem21Snvcp1Vdfsn");
var _TabSem21Snvcp2Ag1 = require("../models/TabSem21Snvcp2Ag1");
var _TabSem21Snvcp2Vdfsn = require("../models/TabSem21Snvcp2Vdfsn");
var _TabSem21SnvnutD1Bio2 = require("../models/TabSem21SnvnutD1Bio2");
var _TabSem21SnvnutD1Vdfsn = require("../models/TabSem21SnvnutD1Vdfsn");
var _TabSem21SnvnutD2Bio2 = require("../models/TabSem21SnvnutD2Bio2");
var _TabSem21Snvphp1Ag1 = require("../models/TabSem21Snvphp1Ag1");
var _TabSem21Snvphp1Vdfsn = require("../models/TabSem21Snvphp1Vdfsn");
var _TabSem21Snvphp2Ag1 = require("../models/TabSem21Snvphp2Ag1");
var _TabSem21Snvphp2Vdfsn = require("../models/TabSem21Snvphp2Vdfsn");
var _TabSem21Snvpna1Ag1 = require("../models/TabSem21Snvpna1Ag1");
var _TabSem21Snvpna2Ag1 = require("../models/TabSem21Snvpna2Ag1");
var _TabSem21Snvpna2Vdfsn = require("../models/TabSem21Snvpna2Vdfsn");
var _TabSem21SnvqPS1Bio2 = require("../models/TabSem21SnvqPS1Bio2");
var _TabSem21SnvqPS1Vdfsn = require("../models/TabSem21SnvqPS1Vdfsn");
var _TabSem21SnvqPS2Bio2 = require("../models/TabSem21SnvqPS2Bio2");
var _TabSem21SnvqPS2Vdfsn = require("../models/TabSem21SnvqPS2Vdfsn");
var _TabSem21Snvtcsnv1Bio1 = require("../models/TabSem21Snvtcsnv1Bio1");
var _TabSem21Snvtcsnv1Vdfsn = require("../models/TabSem21Snvtcsnv1Vdfsn");
var _TabSem21Snvtcsnv2Bio1 = require("../models/TabSem21Snvtcsnv2Bio1");
var _TabSem21Snvtcsnv2Vdfsn = require("../models/TabSem21Snvtcsnv2Vdfsn");
var _TabSem21Stugeo1Ag1 = require("../models/TabSem21Stugeo1Ag1");
var _TabSem21Stugeo1Vdfsn = require("../models/TabSem21Stugeo1Vdfsn");
var _TabSem21Stugeo2Ag1 = require("../models/TabSem21Stugeo2Ag1");
var _TabSem21Stugeo2Vdfsn = require("../models/TabSem21Stugeo2Vdfsn");
var _TabSem21StUmh1Ag1 = require("../models/TabSem21StUmh1Ag1");
var _TabSem21StUmh1Vdfsn = require("../models/TabSem21StUmh1Vdfsn");
var _TabSem21StUmh2Ag1 = require("../models/TabSem21StUmh2Ag1");
var _TabSem21StUmh2Vdfsn = require("../models/TabSem21StUmh2Vdfsn");
var _TabSem22Snvbiot3Bio2 = require("../models/TabSem22Snvbiot3Bio2");
var _TabSem22Snvbiot4Bio2 = require("../models/TabSem22Snvbiot4Bio2");
var _TabSem22SnvbioA4Bio2 = require("../models/TabSem22SnvbioA4Bio2");
var _TabSem22Snvcp3Ag1 = require("../models/TabSem22Snvcp3Ag1");
var _TabSem22Snvcp4Ag1 = require("../models/TabSem22Snvcp4Ag1");
var _TabSem22Snveve3Bio1 = require("../models/TabSem22Snveve3Bio1");
var _TabSem22Snveve3Vdfsn = require("../models/TabSem22Snveve3Vdfsn");
var _TabSem22Snveve4Bio1 = require("../models/TabSem22Snveve4Bio1");
var _TabSem22Snveve4Vdfsn = require("../models/TabSem22Snveve4Vdfsn");
var _TabSem22Snvmpv3Ag1 = require("../models/TabSem22Snvmpv3Ag1");
var _TabSem22Snvmpv4Ag1 = require("../models/TabSem22Snvmpv4Ag1");
var _TabSem22SnvnutD3Bio2 = require("../models/TabSem22SnvnutD3Bio2");
var _TabSem22SnvnutD3Vdfsn = require("../models/TabSem22SnvnutD3Vdfsn");
var _TabSem22SnvnutD4Vdfsn = require("../models/TabSem22SnvnutD4Vdfsn");
var _TabSem22Snvphp3Ag1 = require("../models/TabSem22Snvphp3Ag1");
var _TabSem22Snvphp4Ag1 = require("../models/TabSem22Snvphp4Ag1");
var _TabSem22Snvphp4Vdfsn = require("../models/TabSem22Snvphp4Vdfsn");
var _TabSem22Snvpna3Ag1 = require("../models/TabSem22Snvpna3Ag1");
var _TabSem22Snvpna3Vdfsn = require("../models/TabSem22Snvpna3Vdfsn");
var _TabSem22Snvpna4Ag1 = require("../models/TabSem22Snvpna4Ag1");
var _TabSem22SnvqPS3Bio2 = require("../models/TabSem22SnvqPS3Bio2");
var _TabSem22SnvqPS3Vdfsn = require("../models/TabSem22SnvqPS3Vdfsn");
var _TabSem22Snvtcagr3Ag1 = require("../models/TabSem22Snvtcagr3Ag1");
var _TabSem22Snvtcagr3Vdfsn = require("../models/TabSem22Snvtcagr3Vdfsn");
var _TabSem22Snvtcagr4Ag1 = require("../models/TabSem22Snvtcagr4Ag1");
var _TabSem22Snvtcagr4Vdfsn = require("../models/TabSem22Snvtcagr4Vdfsn");
var _TabSem22Snvtcsa3Bio1 = require("../models/TabSem22Snvtcsa3Bio1");
var _TabSem22Snvtcsa3Vdfsn = require("../models/TabSem22Snvtcsa3Vdfsn");
var _TabSem22Snvtcsa4Bio1 = require("../models/TabSem22Snvtcsa4Bio1");
var _TabSem22Snvtcsa4Vdfsn = require("../models/TabSem22Snvtcsa4Vdfsn");
var _TabSem22Snvtcsb3Bio1 = require("../models/TabSem22Snvtcsb3Bio1");
var _TabSem22Snvtcsb3Vdfsn = require("../models/TabSem22Snvtcsb3Vdfsn");
var _TabSem22Snvtcsb4Bio1 = require("../models/TabSem22Snvtcsb4Bio1");
var _TabSem22Snvtcsb4Vdfsn = require("../models/TabSem22Snvtcsb4Vdfsn");
var _TabSem22Stugeo3Ag1 = require("../models/TabSem22Stugeo3Ag1");
var _TabSem22Stugeo3Vdfsn = require("../models/TabSem22Stugeo3Vdfsn");
var _TabSem22Stugeo4Ag1 = require("../models/TabSem22Stugeo4Ag1");
var _TabSem22Stugeo4Vdfsn = require("../models/TabSem22Stugeo4Vdfsn");
var _TabSem22StUmh3Ag1 = require("../models/TabSem22StUmh3Ag1");
var _TabSem22StUmh3Vdfsn = require("../models/TabSem22StUmh3Vdfsn");
var _TabSem22StUmh4Ag1 = require("../models/TabSem22StUmh4Ag1");
var _TabSem23Snv3Eve5Bio1 = require("../models/TabSem23Snv3Eve5Bio1");
var _TabSem23Snv3Eve5Vdfsn = require("../models/TabSem23Snv3Eve5Vdfsn");
var _TabSem23Snv3Eve6Bio1 = require("../models/TabSem23Snv3Eve6Bio1");
var _TabSem23Snv3Eve6Vdfsn = require("../models/TabSem23Snv3Eve6Vdfsn");
var _TabSem23SnvaBA5Bio1 = require("../models/TabSem23SnvaBA5Bio1");
var _TabSem23SnvaBA5Vdfsn = require("../models/TabSem23SnvaBA5Vdfsn");
var _TabSem23SnvaBA6Bio1 = require("../models/TabSem23SnvaBA6Bio1");
var _TabSem23SnvaBA6Vdfsn = require("../models/TabSem23SnvaBA6Vdfsn");
var _TabSem23SnvaNP5Bio1 = require("../models/TabSem23SnvaNP5Bio1");
var _TabSem23SnvaNP5Vdfsn = require("../models/TabSem23SnvaNP5Vdfsn");
var _TabSem23SnvaNP6Bio1 = require("../models/TabSem23SnvaNP6Bio1");
var _TabSem23SnvaNP6Vdfsn = require("../models/TabSem23SnvaNP6Vdfsn");
var _TabSem23Snvmic5Bio1 = require("../models/TabSem23Snvmic5Bio1");
var _TabSem23Snvmic5Vdfsn = require("../models/TabSem23Snvmic5Vdfsn");
var _TabSem23Snvmic6Bio1 = require("../models/TabSem23Snvmic6Bio1");
var _TabSem23Snvmic6Vdfsn = require("../models/TabSem23Snvmic6Vdfsn");
var _TabSem23SnvpA5Ag1 = require("../models/TabSem23SnvpA5Ag1");
var _TabSem23SnvpA5Vdfsn = require("../models/TabSem23SnvpA5Vdfsn");
var _TabSem23SnvpA6Ag1 = require("../models/TabSem23SnvpA6Ag1");
var _TabSem23SnvpA6Vdfsn = require("../models/TabSem23SnvpA6Vdfsn");
var _TabSem23SnvpV5Ag1 = require("../models/TabSem23SnvpV5Ag1");
var _TabSem23SnvpV5Vdfsn = require("../models/TabSem23SnvpV5Vdfsn");
var _TabSem23SnvpV6Ag1 = require("../models/TabSem23SnvpV6Ag1");
var _TabSem23SnvpV6Vdfsn = require("../models/TabSem23SnvpV6Vdfsn");
var _TabSem23SnvtPV5Ag1 = require("../models/TabSem23SnvtPV5Ag1");
var _TabSem23SnvtPV5Vdfsn = require("../models/TabSem23SnvtPV5Vdfsn");
var _TabSem23SnvtPV6Ag1 = require("../models/TabSem23SnvtPV6Ag1");
var _TabSem23SnvtPV6Vdfsn = require("../models/TabSem23SnvtPV6Vdfsn");
var _TabSem23Stuga5Ag1 = require("../models/TabSem23Stuga5Ag1");
var _TabSem23Stuga6Ag1 = require("../models/TabSem23Stuga6Ag1");
var _TabSem23Stuga6Vdfsn = require("../models/TabSem23Stuga6Vdfsn");
var _TableDesErreurs = require("../models/TableDesErreurs");
var _TableSemestre = require("../models/TableSemestre");
var _TableSoc = require("../models/TableSoc");
var _TableDeTravaille = require("../models/TableDeTravaille");
var _TableEpmloiDuTemps = require("../models/TableEpmloiDuTemps");
var _TypeEnseignant = require("../models/TypeEnseignant");
var _TypesInscription = require("../models/TypesInscription");
var _UniteEnseig = require("../models/UniteEnseig");
var _Universites = require("../models/Universites");
var _Wilayas = require("../models/Wilayas");
var _Commune = require("../models/Commune");
var _Connec = require("../models/Connec");
var _Delib = require("../models/Delib");
var _EtudUpd = require("../models/EtudUpd");
var _Inscrip = require("../models/Inscrip");
var _LogResExcel = require("../models/LogResExcel");
var _Reception = require("../models/Reception");
var _Utilisateur = require("../models/Utilisateur");
var _Sessions = require("../models/Sessions");


function initModels(sequelize) {
  var Affectations = _Affectations(sequelize, DataTypes);
  var AnnexeDiplome = _AnnexeDiplome(sequelize, DataTypes);
  var Annee = _Annee(sequelize, DataTypes);
  var AnneeCycle = _AnneeCycle(sequelize, DataTypes);
  var CongeAcademique = _CongeAcademique(sequelize, DataTypes);
  var Cours = _Cours(sequelize, DataTypes);
  var Daira = _Daira(sequelize, DataTypes);
  var Dossier = _Dossier(sequelize, DataTypes);
  var Departements = _Departements(sequelize, DataTypes);
  var Emplacements = _Emplacements(sequelize, DataTypes);
  var Enseignants = _Enseignants(sequelize, DataTypes);
  var Etudiants = _Etudiants(sequelize, DataTypes);
  var Facultes = _Facultes(sequelize, DataTypes);
  var Filieres = _Filieres(sequelize, DataTypes);
  var Fonctions = _Fonctions(sequelize, DataTypes);
  var Grades = _Grades(sequelize, DataTypes);
  var Historique = _Historique(sequelize, DataTypes);
  var HistoriqueUe = _HistoriqueUe(sequelize, DataTypes);
  var Jour = _Jour(sequelize, DataTypes);
  var OccupationSalles = _OccupationSalles(sequelize, DataTypes);
  var Options = _Options(sequelize, DataTypes);
  var ResultatsUe = _ResultatsUe(sequelize, DataTypes);
  var Resultats = _Resultats(sequelize, DataTypes);
  var Semestre = _Semestre(sequelize, DataTypes);
  var Sexes = _Sexes(sequelize, DataTypes);
  var Statistiques = _Statistiques(sequelize, DataTypes);
  var Series = _Series(sequelize, DataTypes);
  var Tabb = _Tabb(sequelize, DataTypes);
  var Tabb1 = _Tabb1(sequelize, DataTypes);
  var TabAnnexe2Snvbiot = _TabAnnexe2Snvbiot(sequelize, DataTypes);
  var TabAnnexe2SnvbioA = _TabAnnexe2SnvbioA(sequelize, DataTypes);
  var TabAnnexe2Snvcp = _TabAnnexe2Snvcp(sequelize, DataTypes);
  var TabAnnexe2Snvmpv = _TabAnnexe2Snvmpv(sequelize, DataTypes);
  var TabAnnexe2SnvnutD = _TabAnnexe2SnvnutD(sequelize, DataTypes);
  var TabAnnexe2Snvphp = _TabAnnexe2Snvphp(sequelize, DataTypes);
  var TabAnnexe2Snvpna = _TabAnnexe2Snvpna(sequelize, DataTypes);
  var TabAnnexe2SnvqPS = _TabAnnexe2SnvqPS(sequelize, DataTypes);
  var TabAnnexe2StUmh = _TabAnnexe2StUmh(sequelize, DataTypes);
  var TabAnnexe3Snv3Eve = _TabAnnexe3Snv3Eve(sequelize, DataTypes);
  var TabAnnexe3SnvaBA = _TabAnnexe3SnvaBA(sequelize, DataTypes);
  var TabAnnexe3SnvaNP = _TabAnnexe3SnvaNP(sequelize, DataTypes);
  var TabAnnexe3Snvmic = _TabAnnexe3Snvmic(sequelize, DataTypes);
  var TabAnnexe3SnvpA = _TabAnnexe3SnvpA(sequelize, DataTypes);
  var TabCurE2Snvbiot = _TabCurE2Snvbiot(sequelize, DataTypes);
  var TabCurE2Snvcp = _TabCurE2Snvcp(sequelize, DataTypes);
  var TabCurE2SnvnutD = _TabCurE2SnvnutD(sequelize, DataTypes);
  var TabCurE2Snvphp = _TabCurE2Snvphp(sequelize, DataTypes);
  var TabCurE2Snvpna = _TabCurE2Snvpna(sequelize, DataTypes);
  var TabCurE2Snvtcagr = _TabCurE2Snvtcagr(sequelize, DataTypes);
  var TabCurE2Snvtcsb = _TabCurE2Snvtcsb(sequelize, DataTypes);
  var TabCurE3Snv3Eve = _TabCurE3Snv3Eve(sequelize, DataTypes);
  var TabCurE3SnvaBA = _TabCurE3SnvaBA(sequelize, DataTypes);
  var TabCurE3SnvaNP = _TabCurE3SnvaNP(sequelize, DataTypes);
  var TabCurE3Snvmic = _TabCurE3Snvmic(sequelize, DataTypes);
  var TabCurE3SnvpV = _TabCurE3SnvpV(sequelize, DataTypes);
  var TabCurE3SnvtPV = _TabCurE3SnvtPV(sequelize, DataTypes);
  var TabCurE3Stuga = _TabCurE3Stuga(sequelize, DataTypes);
  var TabCur1Snvtcsnv1 = _TabCur1Snvtcsnv1(sequelize, DataTypes);
  var TabCur2Snvbiot0 = _TabCur2Snvbiot0(sequelize, DataTypes);
  var TabCur2Snvbiot1 = _TabCur2Snvbiot1(sequelize, DataTypes);
  var TabCur2SnvbioA0 = _TabCur2SnvbioA0(sequelize, DataTypes);
  var TabCur2SnvbioA1 = _TabCur2SnvbioA1(sequelize, DataTypes);
  var TabCur2Snvcp0 = _TabCur2Snvcp0(sequelize, DataTypes);
  var TabCur2Snvcp1 = _TabCur2Snvcp1(sequelize, DataTypes);
  var TabCur2Snvmpv0 = _TabCur2Snvmpv0(sequelize, DataTypes);
  var TabCur2Snvmpv1 = _TabCur2Snvmpv1(sequelize, DataTypes);
  var TabCur2SnvnutD0 = _TabCur2SnvnutD0(sequelize, DataTypes);
  var TabCur2SnvnutD1 = _TabCur2SnvnutD1(sequelize, DataTypes);
  var TabCur2Snvphp0 = _TabCur2Snvphp0(sequelize, DataTypes);
  var TabCur2Snvpna0 = _TabCur2Snvpna0(sequelize, DataTypes);
  var TabCur2Snvpna1 = _TabCur2Snvpna1(sequelize, DataTypes);
  var TabCur2SnvqPS0 = _TabCur2SnvqPS0(sequelize, DataTypes);
  var TabCur2SnvqPS1 = _TabCur2SnvqPS1(sequelize, DataTypes);
  var TabCur2StUmh0 = _TabCur2StUmh0(sequelize, DataTypes);
  var TabCur2StUmh1 = _TabCur2StUmh1(sequelize, DataTypes);
  var TabCur3Snv3Eve0 = _TabCur3Snv3Eve0(sequelize, DataTypes);
  var TabCur3Snv3Eve1 = _TabCur3Snv3Eve1(sequelize, DataTypes);
  var TabCur3SnvaBA0 = _TabCur3SnvaBA0(sequelize, DataTypes);
  var TabCur3SnvaBA1 = _TabCur3SnvaBA1(sequelize, DataTypes);
  var TabCur3SnvaNP0 = _TabCur3SnvaNP0(sequelize, DataTypes);
  var TabCur3SnvaNP1 = _TabCur3SnvaNP1(sequelize, DataTypes);
  var TabCur3Snvmic0 = _TabCur3Snvmic0(sequelize, DataTypes);
  var TabCur3Snvmic1 = _TabCur3Snvmic1(sequelize, DataTypes);
  var TabCur3SnvpA0 = _TabCur3SnvpA0(sequelize, DataTypes);
  var TabCur3SnvpA1 = _TabCur3SnvpA1(sequelize, DataTypes);
  var TabCur3SnvpV0 = _TabCur3SnvpV0(sequelize, DataTypes);
  var TabCur3SnvpV1 = _TabCur3SnvpV1(sequelize, DataTypes);
  var TabCur3SnvtPV0 = _TabCur3SnvtPV0(sequelize, DataTypes);
  var TabCur3SnvtPV1 = _TabCur3SnvtPV1(sequelize, DataTypes);
  var TabCur3Stuga0 = _TabCur3Stuga0(sequelize, DataTypes);
  var TabCur3Stuga1 = _TabCur3Stuga1(sequelize, DataTypes);
  var TabCursus = _TabCursus(sequelize, DataTypes);
  var TabDbRel = _TabDbRel(sequelize, DataTypes);
  var TabDbaData = _TabDbaData(sequelize, DataTypes);
  var TabRel1SnvbiotBio2 = _TabRel1SnvbiotBio2(sequelize, DataTypes);
  var TabRel1SnvbioABio2 = _TabRel1SnvbioABio2(sequelize, DataTypes);
  var TabRel1SnvcpAg1 = _TabRel1SnvcpAg1(sequelize, DataTypes);
  var TabRel1SnvnutDBio2 = _TabRel1SnvnutDBio2(sequelize, DataTypes);
  var TabRel1SnvphpAg1 = _TabRel1SnvphpAg1(sequelize, DataTypes);
  var TabRel1SnvpnaAg1 = _TabRel1SnvpnaAg1(sequelize, DataTypes);
  var TabRel1SnvqPSBio2 = _TabRel1SnvqPSBio2(sequelize, DataTypes);
  var TabRel1SnvtcsnvBio1 = _TabRel1SnvtcsnvBio1(sequelize, DataTypes);
  var TabRel1StugeoAg1 = _TabRel1StugeoAg1(sequelize, DataTypes);
  var TabRel1StUmhAg1 = _TabRel1StUmhAg1(sequelize, DataTypes);
  var TabRel2SnvbiotBio2 = _TabRel2SnvbiotBio2(sequelize, DataTypes);
  var TabRel2SnvbioABio2 = _TabRel2SnvbioABio2(sequelize, DataTypes);
  var TabRel2SnvcpAg1 = _TabRel2SnvcpAg1(sequelize, DataTypes);
  var TabRel2SnveveBio1 = _TabRel2SnveveBio1(sequelize, DataTypes);
  var TabRel2SnveveVdfsn = _TabRel2SnveveVdfsn(sequelize, DataTypes);
  var TabRel2SnvmpvAg1 = _TabRel2SnvmpvAg1(sequelize, DataTypes);
  var TabRel2SnvnutDBio2 = _TabRel2SnvnutDBio2(sequelize, DataTypes);
  var TabRel2SnvphpAg1 = _TabRel2SnvphpAg1(sequelize, DataTypes);
  var TabRel2SnvpnaAg1 = _TabRel2SnvpnaAg1(sequelize, DataTypes);
  var TabRel2SnvqPSBio2 = _TabRel2SnvqPSBio2(sequelize, DataTypes);
  var TabRel2SnvtcagrAg1 = _TabRel2SnvtcagrAg1(sequelize, DataTypes);
  var TabRel2SnvtcsaBio1 = _TabRel2SnvtcsaBio1(sequelize, DataTypes);
  var TabRel2SnvtcsbBio1 = _TabRel2SnvtcsbBio1(sequelize, DataTypes);
  var TabRel2StugeoAg1 = _TabRel2StugeoAg1(sequelize, DataTypes);
  var TabRel2StUmhAg1 = _TabRel2StUmhAg1(sequelize, DataTypes);
  var TabRel3Snv3EveBio1 = _TabRel3Snv3EveBio1(sequelize, DataTypes);
  var TabRel3SnvaBABio1 = _TabRel3SnvaBABio1(sequelize, DataTypes);
  var TabRel3SnvaNPBio1 = _TabRel3SnvaNPBio1(sequelize, DataTypes);
  var TabRel3SnvmicBio1 = _TabRel3SnvmicBio1(sequelize, DataTypes);
  var TabRel3SnvpAAg1 = _TabRel3SnvpAAg1(sequelize, DataTypes);
  var TabRel3SnvpVAg1 = _TabRel3SnvpVAg1(sequelize, DataTypes);
  var TabRel3SnvtPVAg1 = _TabRel3SnvtPVAg1(sequelize, DataTypes);
  var TabRel3StugaAg1 = _TabRel3StugaAg1(sequelize, DataTypes);
  var TabSem01SnvbioA2Bio2 = _TabSem01SnvbioA2Bio2(sequelize, DataTypes);
  var TabSem01Snvtcsnv1Bio1 = _TabSem01Snvtcsnv1Bio1(sequelize, DataTypes);
  var TabSem03SnvaBA5Bio1 = _TabSem03SnvaBA5Bio1(sequelize, DataTypes);
  var TabSem03SnvpA5Ag1 = _TabSem03SnvpA5Ag1(sequelize, DataTypes);
  var TabSem03SnvpV5Ag1 = _TabSem03SnvpV5Ag1(sequelize, DataTypes);
  var TabSem03SnvpV6Ag1 = _TabSem03SnvpV6Ag1(sequelize, DataTypes);
  var TabSem03Stuga6Ag1 = _TabSem03Stuga6Ag1(sequelize, DataTypes);
  var TabSem11Snvbiot1Bio2 = _TabSem11Snvbiot1Bio2(sequelize, DataTypes);
  var TabSem11Snvbiot2Bio2 = _TabSem11Snvbiot2Bio2(sequelize, DataTypes);
  var TabSem11Snvbiot2Vdfsn = _TabSem11Snvbiot2Vdfsn(sequelize, DataTypes);
  var TabSem11SnvbioA1Bio2 = _TabSem11SnvbioA1Bio2(sequelize, DataTypes);
  var TabSem11SnvbioA2Bio2 = _TabSem11SnvbioA2Bio2(sequelize, DataTypes);
  var TabSem11Snvcp1Ag1 = _TabSem11Snvcp1Ag1(sequelize, DataTypes);
  var TabSem11Snvcp1Vdfsn = _TabSem11Snvcp1Vdfsn(sequelize, DataTypes);
  var TabSem11Snvcp2Ag1 = _TabSem11Snvcp2Ag1(sequelize, DataTypes);
  var TabSem11Snvcp2Vdfsn = _TabSem11Snvcp2Vdfsn(sequelize, DataTypes);
  var TabSem11SnvnutD1Bio2 = _TabSem11SnvnutD1Bio2(sequelize, DataTypes);
  var TabSem11SnvnutD2Bio2 = _TabSem11SnvnutD2Bio2(sequelize, DataTypes);
  var TabSem11Snvphp1Ag1 = _TabSem11Snvphp1Ag1(sequelize, DataTypes);
  var TabSem11Snvphp1Vdfsn = _TabSem11Snvphp1Vdfsn(sequelize, DataTypes);
  var TabSem11Snvphp2Ag1 = _TabSem11Snvphp2Ag1(sequelize, DataTypes);
  var TabSem11Snvpna1Ag1 = _TabSem11Snvpna1Ag1(sequelize, DataTypes);
  var TabSem11Snvpna2Ag1 = _TabSem11Snvpna2Ag1(sequelize, DataTypes);
  var TabSem11SnvqPS1Bio2 = _TabSem11SnvqPS1Bio2(sequelize, DataTypes);
  var TabSem11SnvqPS1Vdfsn = _TabSem11SnvqPS1Vdfsn(sequelize, DataTypes);
  var TabSem11SnvqPS2Bio2 = _TabSem11SnvqPS2Bio2(sequelize, DataTypes);
  var TabSem11Snvtcsnv1Bio1 = _TabSem11Snvtcsnv1Bio1(sequelize, DataTypes);
  var TabSem11Snvtcsnv1Vdfsn = _TabSem11Snvtcsnv1Vdfsn(sequelize, DataTypes);
  var TabSem11Snvtcsnv2Bio1 = _TabSem11Snvtcsnv2Bio1(sequelize, DataTypes);
  var TabSem11Snvtcsnv2Vdfsn = _TabSem11Snvtcsnv2Vdfsn(sequelize, DataTypes);
  var TabSem11Stugeo1Ag1 = _TabSem11Stugeo1Ag1(sequelize, DataTypes);
  var TabSem11Stugeo1Vdfsn = _TabSem11Stugeo1Vdfsn(sequelize, DataTypes);
  var TabSem11Stugeo2Ag1 = _TabSem11Stugeo2Ag1(sequelize, DataTypes);
  var TabSem11Stugeo2Vdfsn = _TabSem11Stugeo2Vdfsn(sequelize, DataTypes);
  var TabSem11StUmh1Ag1 = _TabSem11StUmh1Ag1(sequelize, DataTypes);
  var TabSem11StUmh1Vdfsn = _TabSem11StUmh1Vdfsn(sequelize, DataTypes);
  var TabSem11StUmh2Ag1 = _TabSem11StUmh2Ag1(sequelize, DataTypes);
  var TabSem12Snvbiot3Bio2 = _TabSem12Snvbiot3Bio2(sequelize, DataTypes);
  var TabSem12Snvbiot4Bio2 = _TabSem12Snvbiot4Bio2(sequelize, DataTypes);
  var TabSem12SnvbioA3Bio2 = _TabSem12SnvbioA3Bio2(sequelize, DataTypes);
  var TabSem12SnvbioA4Bio2 = _TabSem12SnvbioA4Bio2(sequelize, DataTypes);
  var TabSem12Snvcp3Ag1 = _TabSem12Snvcp3Ag1(sequelize, DataTypes);
  var TabSem12Snvcp4Ag1 = _TabSem12Snvcp4Ag1(sequelize, DataTypes);
  var TabSem12Snveve3Bio1 = _TabSem12Snveve3Bio1(sequelize, DataTypes);
  var TabSem12Snveve4Bio1 = _TabSem12Snveve4Bio1(sequelize, DataTypes);
  var TabSem12Snvmpv4Ag1 = _TabSem12Snvmpv4Ag1(sequelize, DataTypes);
  var TabSem12SnvnutD3Bio2 = _TabSem12SnvnutD3Bio2(sequelize, DataTypes);
  var TabSem12SnvnutD3Vdfsn = _TabSem12SnvnutD3Vdfsn(sequelize, DataTypes);
  var TabSem12SnvnutD4Bio2 = _TabSem12SnvnutD4Bio2(sequelize, DataTypes);
  var TabSem12Snvphp4Ag1 = _TabSem12Snvphp4Ag1(sequelize, DataTypes);
  var TabSem12Snvpna3Ag1 = _TabSem12Snvpna3Ag1(sequelize, DataTypes);
  var TabSem12Snvpna4Ag1 = _TabSem12Snvpna4Ag1(sequelize, DataTypes);
  var TabSem12Snvpna4Vdfsn = _TabSem12Snvpna4Vdfsn(sequelize, DataTypes);
  var TabSem12SnvqPS3Bio2 = _TabSem12SnvqPS3Bio2(sequelize, DataTypes);
  var TabSem12SnvqPS3Vdfsn = _TabSem12SnvqPS3Vdfsn(sequelize, DataTypes);
  var TabSem12SnvqPS4Bio2 = _TabSem12SnvqPS4Bio2(sequelize, DataTypes);
  var TabSem12Snvtcagr3Ag1 = _TabSem12Snvtcagr3Ag1(sequelize, DataTypes);
  var TabSem12Snvtcsa3Bio1 = _TabSem12Snvtcsa3Bio1(sequelize, DataTypes);
  var TabSem12Snvtcsa3Vdfsn = _TabSem12Snvtcsa3Vdfsn(sequelize, DataTypes);
  var TabSem12Snvtcsa4Bio1 = _TabSem12Snvtcsa4Bio1(sequelize, DataTypes);
  var TabSem12Snvtcsa4Vdfsn = _TabSem12Snvtcsa4Vdfsn(sequelize, DataTypes);
  var TabSem12Snvtcsb3Bio1 = _TabSem12Snvtcsb3Bio1(sequelize, DataTypes);
  var TabSem12Snvtcsb4Bio1 = _TabSem12Snvtcsb4Bio1(sequelize, DataTypes);
  var TabSem12Snvtcsb4Vdfsn = _TabSem12Snvtcsb4Vdfsn(sequelize, DataTypes);
  var TabSem12Stugeo3Ag1 = _TabSem12Stugeo3Ag1(sequelize, DataTypes);
  var TabSem12Stugeo3Vdfsn = _TabSem12Stugeo3Vdfsn(sequelize, DataTypes);
  var TabSem12Stugeo4Ag1 = _TabSem12Stugeo4Ag1(sequelize, DataTypes);
  var TabSem12Stugeo4Vdfsn = _TabSem12Stugeo4Vdfsn(sequelize, DataTypes);
  var TabSem12StUmh4Ag1 = _TabSem12StUmh4Ag1(sequelize, DataTypes);
  var TabSem13Snv3Eve5Bio1 = _TabSem13Snv3Eve5Bio1(sequelize, DataTypes);
  var TabSem13Snv3Eve6Bio1 = _TabSem13Snv3Eve6Bio1(sequelize, DataTypes);
  var TabSem13SnvaBA5Bio1 = _TabSem13SnvaBA5Bio1(sequelize, DataTypes);
  var TabSem13SnvaBA6Bio1 = _TabSem13SnvaBA6Bio1(sequelize, DataTypes);
  var TabSem13SnvaBA6Vdfsn = _TabSem13SnvaBA6Vdfsn(sequelize, DataTypes);
  var TabSem13SnvaNP5Bio1 = _TabSem13SnvaNP5Bio1(sequelize, DataTypes);
  var TabSem13SnvaNP6Bio1 = _TabSem13SnvaNP6Bio1(sequelize, DataTypes);
  var TabSem13Snvmic5Bio1 = _TabSem13Snvmic5Bio1(sequelize, DataTypes);
  var TabSem13Snvmic6Bio1 = _TabSem13Snvmic6Bio1(sequelize, DataTypes);
  var TabSem13SnvpA5Ag1 = _TabSem13SnvpA5Ag1(sequelize, DataTypes);
  var TabSem13SnvpA6Ag1 = _TabSem13SnvpA6Ag1(sequelize, DataTypes);
  var TabSem13SnvpA6Vdfsn = _TabSem13SnvpA6Vdfsn(sequelize, DataTypes);
  var TabSem13SnvpV5Ag1 = _TabSem13SnvpV5Ag1(sequelize, DataTypes);
  var TabSem13SnvpV6Ag1 = _TabSem13SnvpV6Ag1(sequelize, DataTypes);
  var TabSem13SnvtPV5Ag1 = _TabSem13SnvtPV5Ag1(sequelize, DataTypes);
  var TabSem13SnvtPV5Vdfsn = _TabSem13SnvtPV5Vdfsn(sequelize, DataTypes);
  var TabSem13SnvtPV6Ag1 = _TabSem13SnvtPV6Ag1(sequelize, DataTypes);
  var TabSem13SnvtPV6Vdfsn = _TabSem13SnvtPV6Vdfsn(sequelize, DataTypes);
  var TabSem13Stuga5Ag1 = _TabSem13Stuga5Ag1(sequelize, DataTypes);
  var TabSem13Stuga5Vdfsn = _TabSem13Stuga5Vdfsn(sequelize, DataTypes);
  var TabSem13Stuga6Ag1 = _TabSem13Stuga6Ag1(sequelize, DataTypes);
  var TabSem13Stuga6Vdfsn = _TabSem13Stuga6Vdfsn(sequelize, DataTypes);
  var TabSem21Snvbiot1Bio2 = _TabSem21Snvbiot1Bio2(sequelize, DataTypes);
  var TabSem21Snvbiot1Vdfsn = _TabSem21Snvbiot1Vdfsn(sequelize, DataTypes);
  var TabSem21Snvbiot2Bio2 = _TabSem21Snvbiot2Bio2(sequelize, DataTypes);
  var TabSem21SnvbioA1Bio2 = _TabSem21SnvbioA1Bio2(sequelize, DataTypes);
  var TabSem21SnvbioA1Vdfsn = _TabSem21SnvbioA1Vdfsn(sequelize, DataTypes);
  var TabSem21SnvbioA2Bio2 = _TabSem21SnvbioA2Bio2(sequelize, DataTypes);
  var TabSem21SnvbioA2Vdfsn = _TabSem21SnvbioA2Vdfsn(sequelize, DataTypes);
  var TabSem21Snvcp1Ag1 = _TabSem21Snvcp1Ag1(sequelize, DataTypes);
  var TabSem21Snvcp1Vdfsn = _TabSem21Snvcp1Vdfsn(sequelize, DataTypes);
  var TabSem21Snvcp2Ag1 = _TabSem21Snvcp2Ag1(sequelize, DataTypes);
  var TabSem21Snvcp2Vdfsn = _TabSem21Snvcp2Vdfsn(sequelize, DataTypes);
  var TabSem21SnvnutD1Bio2 = _TabSem21SnvnutD1Bio2(sequelize, DataTypes);
  var TabSem21SnvnutD1Vdfsn = _TabSem21SnvnutD1Vdfsn(sequelize, DataTypes);
  var TabSem21SnvnutD2Bio2 = _TabSem21SnvnutD2Bio2(sequelize, DataTypes);
  var TabSem21Snvphp1Ag1 = _TabSem21Snvphp1Ag1(sequelize, DataTypes);
  var TabSem21Snvphp1Vdfsn = _TabSem21Snvphp1Vdfsn(sequelize, DataTypes);
  var TabSem21Snvphp2Ag1 = _TabSem21Snvphp2Ag1(sequelize, DataTypes);
  var TabSem21Snvphp2Vdfsn = _TabSem21Snvphp2Vdfsn(sequelize, DataTypes);
  var TabSem21Snvpna1Ag1 = _TabSem21Snvpna1Ag1(sequelize, DataTypes);
  var TabSem21Snvpna2Ag1 = _TabSem21Snvpna2Ag1(sequelize, DataTypes);
  var TabSem21Snvpna2Vdfsn = _TabSem21Snvpna2Vdfsn(sequelize, DataTypes);
  var TabSem21SnvqPS1Bio2 = _TabSem21SnvqPS1Bio2(sequelize, DataTypes);
  var TabSem21SnvqPS1Vdfsn = _TabSem21SnvqPS1Vdfsn(sequelize, DataTypes);
  var TabSem21SnvqPS2Bio2 = _TabSem21SnvqPS2Bio2(sequelize, DataTypes);
  var TabSem21SnvqPS2Vdfsn = _TabSem21SnvqPS2Vdfsn(sequelize, DataTypes);
  var TabSem21Snvtcsnv1Bio1 = _TabSem21Snvtcsnv1Bio1(sequelize, DataTypes);
  var TabSem21Snvtcsnv1Vdfsn = _TabSem21Snvtcsnv1Vdfsn(sequelize, DataTypes);
  var TabSem21Snvtcsnv2Bio1 = _TabSem21Snvtcsnv2Bio1(sequelize, DataTypes);
  var TabSem21Snvtcsnv2Vdfsn = _TabSem21Snvtcsnv2Vdfsn(sequelize, DataTypes);
  var TabSem21Stugeo1Ag1 = _TabSem21Stugeo1Ag1(sequelize, DataTypes);
  var TabSem21Stugeo1Vdfsn = _TabSem21Stugeo1Vdfsn(sequelize, DataTypes);
  var TabSem21Stugeo2Ag1 = _TabSem21Stugeo2Ag1(sequelize, DataTypes);
  var TabSem21Stugeo2Vdfsn = _TabSem21Stugeo2Vdfsn(sequelize, DataTypes);
  var TabSem21StUmh1Ag1 = _TabSem21StUmh1Ag1(sequelize, DataTypes);
  var TabSem21StUmh1Vdfsn = _TabSem21StUmh1Vdfsn(sequelize, DataTypes);
  var TabSem21StUmh2Ag1 = _TabSem21StUmh2Ag1(sequelize, DataTypes);
  var TabSem21StUmh2Vdfsn = _TabSem21StUmh2Vdfsn(sequelize, DataTypes);
  var TabSem22Snvbiot3Bio2 = _TabSem22Snvbiot3Bio2(sequelize, DataTypes);
  var TabSem22Snvbiot4Bio2 = _TabSem22Snvbiot4Bio2(sequelize, DataTypes);
  var TabSem22SnvbioA4Bio2 = _TabSem22SnvbioA4Bio2(sequelize, DataTypes);
  var TabSem22Snvcp3Ag1 = _TabSem22Snvcp3Ag1(sequelize, DataTypes);
  var TabSem22Snvcp4Ag1 = _TabSem22Snvcp4Ag1(sequelize, DataTypes);
  var TabSem22Snveve3Bio1 = _TabSem22Snveve3Bio1(sequelize, DataTypes);
  var TabSem22Snveve3Vdfsn = _TabSem22Snveve3Vdfsn(sequelize, DataTypes);
  var TabSem22Snveve4Bio1 = _TabSem22Snveve4Bio1(sequelize, DataTypes);
  var TabSem22Snveve4Vdfsn = _TabSem22Snveve4Vdfsn(sequelize, DataTypes);
  var TabSem22Snvmpv3Ag1 = _TabSem22Snvmpv3Ag1(sequelize, DataTypes);
  var TabSem22Snvmpv4Ag1 = _TabSem22Snvmpv4Ag1(sequelize, DataTypes);
  var TabSem22SnvnutD3Bio2 = _TabSem22SnvnutD3Bio2(sequelize, DataTypes);
  var TabSem22SnvnutD3Vdfsn = _TabSem22SnvnutD3Vdfsn(sequelize, DataTypes);
  var TabSem22SnvnutD4Vdfsn = _TabSem22SnvnutD4Vdfsn(sequelize, DataTypes);
  var TabSem22Snvphp3Ag1 = _TabSem22Snvphp3Ag1(sequelize, DataTypes);
  var TabSem22Snvphp4Ag1 = _TabSem22Snvphp4Ag1(sequelize, DataTypes);
  var TabSem22Snvphp4Vdfsn = _TabSem22Snvphp4Vdfsn(sequelize, DataTypes);
  var TabSem22Snvpna3Ag1 = _TabSem22Snvpna3Ag1(sequelize, DataTypes);
  var TabSem22Snvpna3Vdfsn = _TabSem22Snvpna3Vdfsn(sequelize, DataTypes);
  var TabSem22Snvpna4Ag1 = _TabSem22Snvpna4Ag1(sequelize, DataTypes);
  var TabSem22SnvqPS3Bio2 = _TabSem22SnvqPS3Bio2(sequelize, DataTypes);
  var TabSem22SnvqPS3Vdfsn = _TabSem22SnvqPS3Vdfsn(sequelize, DataTypes);
  var TabSem22Snvtcagr3Ag1 = _TabSem22Snvtcagr3Ag1(sequelize, DataTypes);
  var TabSem22Snvtcagr3Vdfsn = _TabSem22Snvtcagr3Vdfsn(sequelize, DataTypes);
  var TabSem22Snvtcagr4Ag1 = _TabSem22Snvtcagr4Ag1(sequelize, DataTypes);
  var TabSem22Snvtcagr4Vdfsn = _TabSem22Snvtcagr4Vdfsn(sequelize, DataTypes);
  var TabSem22Snvtcsa3Bio1 = _TabSem22Snvtcsa3Bio1(sequelize, DataTypes);
  var TabSem22Snvtcsa3Vdfsn = _TabSem22Snvtcsa3Vdfsn(sequelize, DataTypes);
  var TabSem22Snvtcsa4Bio1 = _TabSem22Snvtcsa4Bio1(sequelize, DataTypes);
  var TabSem22Snvtcsa4Vdfsn = _TabSem22Snvtcsa4Vdfsn(sequelize, DataTypes);
  var TabSem22Snvtcsb3Bio1 = _TabSem22Snvtcsb3Bio1(sequelize, DataTypes);
  var TabSem22Snvtcsb3Vdfsn = _TabSem22Snvtcsb3Vdfsn(sequelize, DataTypes);
  var TabSem22Snvtcsb4Bio1 = _TabSem22Snvtcsb4Bio1(sequelize, DataTypes);
  var TabSem22Snvtcsb4Vdfsn = _TabSem22Snvtcsb4Vdfsn(sequelize, DataTypes);
  var TabSem22Stugeo3Ag1 = _TabSem22Stugeo3Ag1(sequelize, DataTypes);
  var TabSem22Stugeo3Vdfsn = _TabSem22Stugeo3Vdfsn(sequelize, DataTypes);
  var TabSem22Stugeo4Ag1 = _TabSem22Stugeo4Ag1(sequelize, DataTypes);
  var TabSem22Stugeo4Vdfsn = _TabSem22Stugeo4Vdfsn(sequelize, DataTypes);
  var TabSem22StUmh3Ag1 = _TabSem22StUmh3Ag1(sequelize, DataTypes);
  var TabSem22StUmh3Vdfsn = _TabSem22StUmh3Vdfsn(sequelize, DataTypes);
  var TabSem22StUmh4Ag1 = _TabSem22StUmh4Ag1(sequelize, DataTypes);
  var TabSem23Snv3Eve5Bio1 = _TabSem23Snv3Eve5Bio1(sequelize, DataTypes);
  var TabSem23Snv3Eve5Vdfsn = _TabSem23Snv3Eve5Vdfsn(sequelize, DataTypes);
  var TabSem23Snv3Eve6Bio1 = _TabSem23Snv3Eve6Bio1(sequelize, DataTypes);
  var TabSem23Snv3Eve6Vdfsn = _TabSem23Snv3Eve6Vdfsn(sequelize, DataTypes);
  var TabSem23SnvaBA5Bio1 = _TabSem23SnvaBA5Bio1(sequelize, DataTypes);
  var TabSem23SnvaBA5Vdfsn = _TabSem23SnvaBA5Vdfsn(sequelize, DataTypes);
  var TabSem23SnvaBA6Bio1 = _TabSem23SnvaBA6Bio1(sequelize, DataTypes);
  var TabSem23SnvaBA6Vdfsn = _TabSem23SnvaBA6Vdfsn(sequelize, DataTypes);
  var TabSem23SnvaNP5Bio1 = _TabSem23SnvaNP5Bio1(sequelize, DataTypes);
  var TabSem23SnvaNP5Vdfsn = _TabSem23SnvaNP5Vdfsn(sequelize, DataTypes);
  var TabSem23SnvaNP6Bio1 = _TabSem23SnvaNP6Bio1(sequelize, DataTypes);
  var TabSem23SnvaNP6Vdfsn = _TabSem23SnvaNP6Vdfsn(sequelize, DataTypes);
  var TabSem23Snvmic5Bio1 = _TabSem23Snvmic5Bio1(sequelize, DataTypes);
  var TabSem23Snvmic5Vdfsn = _TabSem23Snvmic5Vdfsn(sequelize, DataTypes);
  var TabSem23Snvmic6Bio1 = _TabSem23Snvmic6Bio1(sequelize, DataTypes);
  var TabSem23Snvmic6Vdfsn = _TabSem23Snvmic6Vdfsn(sequelize, DataTypes);
  var TabSem23SnvpA5Ag1 = _TabSem23SnvpA5Ag1(sequelize, DataTypes);
  var TabSem23SnvpA5Vdfsn = _TabSem23SnvpA5Vdfsn(sequelize, DataTypes);
  var TabSem23SnvpA6Ag1 = _TabSem23SnvpA6Ag1(sequelize, DataTypes);
  var TabSem23SnvpA6Vdfsn = _TabSem23SnvpA6Vdfsn(sequelize, DataTypes);
  var TabSem23SnvpV5Ag1 = _TabSem23SnvpV5Ag1(sequelize, DataTypes);
  var TabSem23SnvpV5Vdfsn = _TabSem23SnvpV5Vdfsn(sequelize, DataTypes);
  var TabSem23SnvpV6Ag1 = _TabSem23SnvpV6Ag1(sequelize, DataTypes);
  var TabSem23SnvpV6Vdfsn = _TabSem23SnvpV6Vdfsn(sequelize, DataTypes);
  var TabSem23SnvtPV5Ag1 = _TabSem23SnvtPV5Ag1(sequelize, DataTypes);
  var TabSem23SnvtPV5Vdfsn = _TabSem23SnvtPV5Vdfsn(sequelize, DataTypes);
  var TabSem23SnvtPV6Ag1 = _TabSem23SnvtPV6Ag1(sequelize, DataTypes);
  var TabSem23SnvtPV6Vdfsn = _TabSem23SnvtPV6Vdfsn(sequelize, DataTypes);
  var TabSem23Stuga5Ag1 = _TabSem23Stuga5Ag1(sequelize, DataTypes);
  var TabSem23Stuga6Ag1 = _TabSem23Stuga6Ag1(sequelize, DataTypes);
  var TabSem23Stuga6Vdfsn = _TabSem23Stuga6Vdfsn(sequelize, DataTypes);
  var TableDesErreurs = _TableDesErreurs(sequelize, DataTypes);
  var TableSemestre = _TableSemestre(sequelize, DataTypes);
  var TableSoc = _TableSoc(sequelize, DataTypes);
  var TableDeTravaille = _TableDeTravaille(sequelize, DataTypes);
  var TableEpmloiDuTemps = _TableEpmloiDuTemps(sequelize, DataTypes);
  var TypeEnseignant = _TypeEnseignant(sequelize, DataTypes);
  var TypesInscription = _TypesInscription(sequelize, DataTypes);
  var UniteEnseig = _UniteEnseig(sequelize, DataTypes);
  var Universites = _Universites(sequelize, DataTypes);
  var Wilayas = _Wilayas(sequelize, DataTypes);
  var Commune = _Commune(sequelize, DataTypes);
  var Connec = _Connec(sequelize, DataTypes);
  var Delib = _Delib(sequelize, DataTypes);
  var EtudUpd = _EtudUpd(sequelize, DataTypes);
  var Inscrip = _Inscrip(sequelize, DataTypes);
  var LogResExcel = _LogResExcel(sequelize, DataTypes);
  var Reception = _Reception(sequelize, DataTypes);
  var Utilisateur = _Utilisateur(sequelize, DataTypes);

  // Added Models
  var Sessions = _Sessions(sequelize, DataTypes);


  Enseignants.belongsTo(Departements, { as: "refDepartementDepartement", foreignKey: "refDepartement"});
  Departements.hasMany(Enseignants, { as: "enseignants", foreignKey: "refDepartement"});
  Filieres.belongsTo(Departements, { as: "refDepartementDepartement", foreignKey: "refDepartement"});
  Departements.hasMany(Filieres, { as: "filieres", foreignKey: "refDepartement"});
  Departements.belongsTo(Facultes, { as: "refFaculteFaculte", foreignKey: "refFaculte"});
  Facultes.hasMany(Departements, { as: "departements", foreignKey: "refFaculte"});
  Enseignants.belongsTo(Fonctions, { as: "refFonctionFonction", foreignKey: "refFonction"});
  Fonctions.hasMany(Enseignants, { as: "enseignants", foreignKey: "refFonction"});
  Enseignants.belongsTo(Grades, { as: "refGradeGrade", foreignKey: "refGrade"});
  Grades.hasMany(Enseignants, { as: "enseignants", foreignKey: "refGrade"});
  Etudiants.belongsTo(Wilayas, { as: "codeWilayaWilaya", foreignKey: "codeWilaya"});
  Wilayas.hasMany(Etudiants, { as: "etudiants", foreignKey: "codeWilaya"});

  // Added Associations
  Sessions.belongsTo(Cours, { as: "class", foreignKey: "classId"});
  Cours.hasMany(Sessions, { as: "sessions", foreignKey: "classId"});
  Sessions.belongsTo(Enseignants, { as: "teacher", foreignKey: "teacherId"});
  Enseignants.hasMany(Sessions, { as: "sessions", foreignKey: "teacherId"});


  return {
    Affectations,
    AnnexeDiplome,
    Annee,
    AnneeCycle,
    CongeAcademique,
    Cours,
    Daira,
    Dossier,
    Departements,
    Emplacements,
    Enseignants,
    Etudiants,
    Facultes,
    Filieres,
    Fonctions,
    Grades,
    Historique,
    HistoriqueUe,
    Jour,
    OccupationSalles,
    Options,
    ResultatsUe,
    Resultats,
    Semestre,
    Sexes,
    Statistiques,
    Series,
    Tabb,
    Tabb1,
    TabAnnexe2Snvbiot,
    TabAnnexe2SnvbioA,
    TabAnnexe2Snvcp,
    TabAnnexe2Snvmpv,
    TabAnnexe2SnvnutD,
    TabAnnexe2Snvphp,
    TabAnnexe2Snvpna,
    TabAnnexe2SnvqPS,
    TabAnnexe2StUmh,
    TabAnnexe3Snv3Eve,
    TabAnnexe3SnvaBA,
    TabAnnexe3SnvaNP,
    TabAnnexe3Snvmic,
    TabAnnexe3SnvpA,
    TabCurE2Snvbiot,
    TabCurE2Snvcp,
    TabCurE2SnvnutD,
    TabCurE2Snvphp,
    TabCurE2Snvpna,
    TabCurE2Snvtcagr,
    TabCurE2Snvtcsb,
    TabCurE3Snv3Eve,
    TabCurE3SnvaBA,
    TabCurE3SnvaNP,
    TabCurE3Snvmic,
    TabCurE3SnvpV,
    TabCurE3SnvtPV,
    TabCurE3Stuga,
    TabCur1Snvtcsnv1,
    TabCur2Snvbiot0,
    TabCur2Snvbiot1,
    TabCur2SnvbioA0,
    TabCur2SnvbioA1,
    TabCur2Snvcp0,
    TabCur2Snvcp1,
    TabCur2Snvmpv0,
    TabCur2Snvmpv1,
    TabCur2SnvnutD0,
    TabCur2SnvnutD1,
    TabCur2Snvphp0,
    TabCur2Snvpna0,
    TabCur2Snvpna1,
    TabCur2SnvqPS0,
    TabCur2SnvqPS1,
    TabCur2StUmh0,
    TabCur2StUmh1,
    TabCur3Snv3Eve0,
    TabCur3Snv3Eve1,
    TabCur3SnvaBA0,
    TabCur3SnvaBA1,
    TabCur3SnvaNP0,
    TabCur3SnvaNP1,
    TabCur3Snvmic0,
    TabCur3Snvmic1,
    TabCur3SnvpA0,
    TabCur3SnvpA1,
    TabCur3SnvpV0,
    TabCur3SnvpV1,
    TabCur3SnvtPV0,
    TabCur3SnvtPV1,
    TabCur3Stuga0,
    TabCur3Stuga1,
    TabCursus,
    TabDbRel,
    TabDbaData,
    TabRel1SnvbiotBio2,
    TabRel1SnvbioABio2,
    TabRel1SnvcpAg1,
    TabRel1SnvnutDBio2,
    TabRel1SnvphpAg1,
    TabRel1SnvpnaAg1,
    TabRel1SnvqPSBio2,
    TabRel1SnvtcsnvBio1,
    TabRel1StugeoAg1,
    TabRel1StUmhAg1,
    TabRel2SnvbiotBio2,
    TabRel2SnvbioABio2,
    TabRel2SnvcpAg1,
    TabRel2SnveveBio1,
    TabRel2SnveveVdfsn,
    TabRel2SnvmpvAg1,
    TabRel2SnvnutDBio2,
    TabRel2SnvphpAg1,
    TabRel2SnvpnaAg1,
    TabRel2SnvqPSBio2,
    TabRel2SnvtcagrAg1,
    TabRel2SnvtcsaBio1,
    TabRel2SnvtcsbBio1,
    TabRel2StugeoAg1,
    TabRel2StUmhAg1,
    TabRel3Snv3EveBio1,
    TabRel3SnvaBABio1,
    TabRel3SnvaNPBio1,
    TabRel3SnvmicBio1,
    TabRel3SnvpAAg1,
    TabRel3SnvpVAg1,
    TabRel3SnvtPVAg1,
    TabRel3StugaAg1,
    TabSem01SnvbioA2Bio2,
    TabSem01Snvtcsnv1Bio1,
    TabSem03SnvaBA5Bio1,
    TabSem03SnvpA5Ag1,
    TabSem03SnvpV5Ag1,
    TabSem03SnvpV6Ag1,
    TabSem03Stuga6Ag1,
    TabSem11Snvbiot1Bio2,
    TabSem11Snvbiot2Bio2,
    TabSem11Snvbiot2Vdfsn,
    TabSem11SnvbioA1Bio2,
    TabSem11SnvbioA2Bio2,
    TabSem11Snvcp1Ag1,
    TabSem11Snvcp1Vdfsn,
    TabSem11Snvcp2Ag1,
    TabSem11Snvcp2Vdfsn,
    TabSem11SnvnutD1Bio2,
    TabSem11SnvnutD2Bio2,
    TabSem11Snvphp1Ag1,
    TabSem11Snvphp1Vdfsn,
    TabSem11Snvphp2Ag1,
    TabSem11Snvpna1Ag1,
    TabSem11Snvpna2Ag1,
    TabSem11SnvqPS1Bio2,
    TabSem11SnvqPS1Vdfsn,
    TabSem11SnvqPS2Bio2,
    TabSem11Snvtcsnv1Bio1,
    TabSem11Snvtcsnv1Vdfsn,
    TabSem11Snvtcsnv2Bio1,
    TabSem11Snvtcsnv2Vdfsn,
    TabSem11Stugeo1Ag1,
    TabSem11Stugeo1Vdfsn,
    TabSem11Stugeo2Ag1,
    TabSem11Stugeo2Vdfsn,
    TabSem11StUmh1Ag1,
    TabSem11StUmh1Vdfsn,
    TabSem11StUmh2Ag1,
    TabSem12Snvbiot3Bio2,
    TabSem12Snvbiot4Bio2,
    TabSem12SnvbioA3Bio2,
    TabSem12SnvbioA4Bio2,
    TabSem12Snvcp3Ag1,
    TabSem12Snvcp4Ag1,
    TabSem12Snveve3Bio1,
    TabSem12Snveve4Bio1,
    TabSem12Snvmpv4Ag1,
    TabSem12SnvnutD3Bio2,
    TabSem12SnvnutD3Vdfsn,
    TabSem12SnvnutD4Bio2,
    TabSem12Snvphp4Ag1,
    TabSem12Snvpna3Ag1,
    TabSem12Snvpna4Ag1,
    TabSem12Snvpna4Vdfsn,
    TabSem12SnvqPS3Bio2,
    TabSem12SnvqPS3Vdfsn,
    TabSem12SnvqPS4Bio2,
    TabSem12Snvtcagr3Ag1,
    TabSem12Snvtcsa3Bio1,
    TabSem12Snvtcsa3Vdfsn,
    TabSem12Snvtcsa4Bio1,
    TabSem12Snvtcsa4Vdfsn,
    TabSem12Snvtcsb3Bio1,
    TabSem12Snvtcsb4Bio1,
    TabSem12Snvtcsb4Vdfsn,
    TabSem12Stugeo3Ag1,
    TabSem12Stugeo3Vdfsn,
    TabSem12Stugeo4Ag1,
    TabSem12Stugeo4Vdfsn,
    TabSem12StUmh4Ag1,
    TabSem13Snv3Eve5Bio1,
    TabSem13Snv3Eve6Bio1,
    TabSem13SnvaBA5Bio1,
    TabSem13SnvaBA6Bio1,
    TabSem13SnvaBA6Vdfsn,
    TabSem13SnvaNP5Bio1,
    TabSem13SnvaNP6Bio1,
    TabSem13Snvmic5Bio1,
    TabSem13Snvmic6Bio1,
    TabSem13SnvpA5Ag1,
    TabSem13SnvpA6Ag1,
    TabSem13SnvpA6Vdfsn,
    TabSem13SnvpV5Ag1,
    TabSem13SnvpV6Ag1,
    TabSem13SnvtPV5Ag1,
    TabSem13SnvtPV5Vdfsn,
    TabSem13SnvtPV6Ag1,
    TabSem13SnvtPV6Vdfsn,
    TabSem13Stuga5Ag1,
    TabSem13Stuga5Vdfsn,
    TabSem13Stuga6Ag1,
    TabSem13Stuga6Vdfsn,
    TabSem21Snvbiot1Bio2,
    TabSem21Snvbiot1Vdfsn,
    TabSem21Snvbiot2Bio2,
    TabSem21SnvbioA1Bio2,
    TabSem21SnvbioA1Vdfsn,
    TabSem21SnvbioA2Bio2,
    TabSem21SnvbioA2Vdfsn,
    TabSem21Snvcp1Ag1,
    TabSem21Snvcp1Vdfsn,
    TabSem21Snvcp2Ag1,
    TabSem21Snvcp2Vdfsn,
    TabSem21SnvnutD1Bio2,
    TabSem21SnvnutD1Vdfsn,
    TabSem21SnvnutD2Bio2,
    TabSem21Snvphp1Ag1,
    TabSem21Snvphp1Vdfsn,
    TabSem21Snvphp2Ag1,
    TabSem21Snvphp2Vdfsn,
    TabSem21Snvpna1Ag1,
    TabSem21Snvpna2Ag1,
    TabSem21Snvpna2Vdfsn,
    TabSem21SnvqPS1Bio2,
    TabSem21SnvqPS1Vdfsn,
    TabSem21SnvqPS2Bio2,
    TabSem21SnvqPS2Vdfsn,
    TabSem21Snvtcsnv1Bio1,
    TabSem21Snvtcsnv1Vdfsn,
    TabSem21Snvtcsnv2Bio1,
    TabSem21Snvtcsnv2Vdfsn,
    TabSem21Stugeo1Ag1,
    TabSem21Stugeo1Vdfsn,
    TabSem21Stugeo2Ag1,
    TabSem21Stugeo2Vdfsn,
    TabSem21StUmh1Ag1,
    TabSem21StUmh1Vdfsn,
    TabSem21StUmh2Ag1,
    TabSem21StUmh2Vdfsn,
    TabSem22Snvbiot3Bio2,
    TabSem22Snvbiot4Bio2,
    TabSem22SnvbioA4Bio2,
    TabSem22Snvcp3Ag1,
    TabSem22Snvcp4Ag1,
    TabSem22Snveve3Bio1,
    TabSem22Snveve3Vdfsn,
    TabSem22Snveve4Bio1,
    TabSem22Snveve4Vdfsn,
    TabSem22Snvmpv3Ag1,
    TabSem22Snvmpv4Ag1,
    TabSem22SnvnutD3Bio2,
    TabSem22SnvnutD3Vdfsn,
    TabSem22SnvnutD4Vdfsn,
    TabSem22Snvphp3Ag1,
    TabSem22Snvphp4Ag1,
    TabSem22Snvphp4Vdfsn,
    TabSem22Snvpna3Ag1,
    TabSem22Snvpna3Vdfsn,
    TabSem22Snvpna4Ag1,
    TabSem22SnvqPS3Bio2,
    TabSem22SnvqPS3Vdfsn,
    TabSem22Snvtcagr3Ag1,
    TabSem22Snvtcagr3Vdfsn,
    TabSem22Snvtcagr4Ag1,
    TabSem22Snvtcagr4Vdfsn,
    TabSem22Snvtcsa3Bio1,
    TabSem22Snvtcsa3Vdfsn,
    TabSem22Snvtcsa4Bio1,
    TabSem22Snvtcsa4Vdfsn,
    TabSem22Snvtcsb3Bio1,
    TabSem22Snvtcsb3Vdfsn,
    TabSem22Snvtcsb4Bio1,
    TabSem22Snvtcsb4Vdfsn,
    TabSem22Stugeo3Ag1,
    TabSem22Stugeo3Vdfsn,
    TabSem22Stugeo4Ag1,
    TabSem22Stugeo4Vdfsn,
    TabSem22StUmh3Ag1,
    TabSem22StUmh3Vdfsn,
    TabSem22StUmh4Ag1,
    TabSem23Snv3Eve5Bio1,
    TabSem23Snv3Eve5Vdfsn,
    TabSem23Snv3Eve6Bio1,
    TabSem23Snv3Eve6Vdfsn,
    TabSem23SnvaBA5Bio1,
    TabSem23SnvaBA5Vdfsn,
    TabSem23SnvaBA6Bio1,
    TabSem23SnvaBA6Vdfsn,
    TabSem23SnvaNP5Bio1,
    TabSem23SnvaNP5Vdfsn,
    TabSem23SnvaNP6Bio1,
    TabSem23SnvaNP6Vdfsn,
    TabSem23Snvmic5Bio1,
    TabSem23Snvmic5Vdfsn,
    TabSem23Snvmic6Bio1,
    TabSem23Snvmic6Vdfsn,
    TabSem23SnvpA5Ag1,
    TabSem23SnvpA5Vdfsn,
    TabSem23SnvpA6Ag1,
    TabSem23SnvpA6Vdfsn,
    TabSem23SnvpV5Ag1,
    TabSem23SnvpV5Vdfsn,
    TabSem23SnvpV6Ag1,
    TabSem23SnvpV6Vdfsn,
    TabSem23SnvtPV5Ag1,
    TabSem23SnvtPV5Vdfsn,
    TabSem23SnvtPV6Ag1,
    TabSem23SnvtPV6Vdfsn,
    TabSem23Stuga5Ag1,
    TabSem23Stuga6Ag1,
    TabSem23Stuga6Vdfsn,
    TableDesErreurs,
    TableSemestre,
    TableSoc,
    TableDeTravaille,
    TableEpmloiDuTemps,
    TypeEnseignant,
    TypesInscription,
    UniteEnseig,
    Universites,
    Wilayas,
    Commune,
    Connec,
    Delib,
    EtudUpd,
    Inscrip,
    LogResExcel,
    Reception,
    Utilisateur,
    // Added
    Sessions
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
