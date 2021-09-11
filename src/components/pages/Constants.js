
export const SERVICES = [
    { id: 1, icon: "images/arbre_abattage.jpg", titre: 'PERMIS', options: ['Demande en ligne', 'Traitement', 'Emission', 'Mise à disposition du permis'], backgroundColor: 'rgba(216, 82, 33, 0.849)' },
    { id: 2, icon: "images/lettre_de_voiture.png", titre: 'LETTRES DE VOITUTRE', options: ['Enregistrement', 'Soumission', 'Impression'], backgroundColor: 'rgba(128, 128, 128, 0.828)' },
    { id: 3, icon: "images/certifat_legalite.jpg", titre: 'CERTIFICAT DE LEGALITE', options: ['Demande en ligne', 'Traitement', 'Emission', 'Mise à disposition du certificat'], backgroundColor: 'rgb(245, 210, 10)' },
    { id: 4, icon: "images/bulletin_specification.jpg", titre: 'BULLETIN DE SPECIFICATION DES BOIS A L\'EXPORT', options: ['Demande en ligne', 'Traitement', 'Emission', 'Mise à disposition du bulletin'], backgroundColor: 'rgba(74, 74, 238, 0.931)' },
    { id: 5, icon: "images/attestation_conformite.jpg", titre: 'ATTESTATION DE CONFORMITE DES PRODUITS', options: ['Demande en ligne', 'Traitement', 'Emission', 'Mise à disposition de l\'attestation'], backgroundColor: 'rgba(32, 92, 32, 0.924)' },
    { id: 6, icon: "images/autorisation_flegt.png", titre: 'AUTORISATION FLEGT', options: ['Demande en ligne', 'Traitement', 'Emission', 'Mise à disposition de l\'autorisation'], backgroundColor: 'rgb(219, 87, 34)' },
]

export const MODULES = [
    { id: 1, icon: './dossiericon/ressources/icons/iconADMINISTRATION_128x128.png', titre: "ADMINISTRATION", texte: "Définir les niveaux d'accès et les différents utilisateurs appelés à interagir avec l'application. Moucharder les opérations effectuées dans le système" },
    { id: 2, icon: './dossiericon/ressources/icons/iconDONNEES_128x128.png', titre: "DONNEES DE REFERENCE", texte: "Mettre en place le données de base du SIGIF devant servir de socle pour les autres modules de l'application" },
    { id: 3, icon: './dossiericon/ressources/icons/iconSIG_64x64.png', titre: "SIG", texte: "Visualiser les titres foretsiers et les opérations d'inventaire enregistrés  dans le système" },
    { id: 4, icon: './dossiericon/ressources/icons/iconTITRES_64x64.png', titre: "TITRES FORESTIERS", texte: "Gérer tous les types titres, leur documentation associée, ainsi que les opérations pouvant être effectuées: suspension, retrait, abandon, etc..." },
    { id: 5, icon: './dossiericon/ressources/icons/iconCODEBARRE_128x128.png', titre: "CODES BARRES", texte: "Gérer et suivre le numéros de code-barres  utilisés pour les inventaires, les abattage, les grumes, les clois  et la sécurisation des documents" },
    { id: 6, icon: './dossiericon/ressources/icons/iconINVENTAIRE_128x128.png', titre: "INVENTAIRES", texte: "Gérer les opérations liées aux travauxx d'inventaire: tracking des limites, inventaire et vérification, catalogues de produits" },
    { id: 7, icon: './dossiericon/ressources/icons/iconPERMIS_128x128.png', titre: "PERMIS", texte: "Gérer le processus d 'obtention de permis, de la demande jusqu'à l'emission et l'activation du permis" },
    { id: 8, icon: './dossiericon/ressources/icons/iconABATTAGE_128x128.png', titre: "ABATTAGES", texte: "Permettre à chaque opérateur d'enregistrer ses opérations d'abattage" },
    { id: 9, icon: './dossiericon/ressources/icons/iconCEMAC_128x128.png', titre: "BOIS CEMAC", texte: "Enregistrer et suivre les produits en provenancedes pays de la CEMAC en transit/importation sur le territoiore Camerounais" },
    { id: 10, icon: './dossiericon/ressources/icons/iconOPEPARC_128x128.png', titre: "OPERATIONS DE PARC", texte: "Gérer les mouvements de grumes et colis de débités dans les parcs" },
    { id: 11, icon: './dossiericon/ressources/icons/iconTRANSFORMATION_128x128.png', titre: "TRANSFORMATION", texte: "Gérer tout les processus de transformation jusqu'à l'obtention des colis de débités" },
    { id: 12, icon: './dossiericon/ressources/icons/iconFISCALITE_128x128.png', titre: "FISCALITE FORESTIERE", texte: "Générer les différents taxes liées à l'activité forestières et suivre leur recouvrement" },
    { id: 13, icon: './dossiericon/ressources/icons/iconCONTENTIEUX_128x128.png', titre: "CONTENCIEUX", texte: "Gérer et suivre les contencieux liés à l'activité forestière et initiés par le MINFOF" },
    { id: 14, icon: './dossiericon/ressources/icons/iconCERTIFLEGALITE_128x128.png', titre: "CERTIFICAT DE LEGALITE", texte: "Gérer les processus d'obtention du certificat de légalité, de la demande jusqu'à l'emission et l'activation  du certificat" },
    { id: 15, icon: './dossiericon/ressources/icons/iconEXPORTATION_128x128.png', titre: "EXPORTATIONS", texte: "Gérer les différents opérations liées à l'exploition des produits forestiers jusqu'à l'obtention de l'autorisation FLEGT" },
    { id: 16, icon: './dossiericon/ressources/icons/iconTRACABILITE_128x128.png', titre: "TRACABILITE", texte: "Tracer les produits forestiers et les documents émis par le système à travers leurs numéros de code-barres" },
    { id: 17, icon: './dossiericon/ressources/icons/iconRAPPORT_128x128.png', titre: "RAPPORT", texte: "Enregistrer les différents contrôles effectués par l'Administration forestière, compiler les données collectées sur le terrainn et produire les rapports" },
    { id: 18, icon: './dossiericon/ressources/icons/iconCONTROLE_128x128.png', titre: "CONTROLE", texte: "Produire les rapportds d'analyse de l'activité forestière et ceux demandés par l'annexe 7 de l'APV" },
]

export const ACTUALITES = [
    { id: 1, ressource: "Actualité", link: "#", src: "./images/pexels-photo-1112186.jpeg", description: "A l'ombre de Quercus, rencontre avec le forestier et auteur Laurent Tillon" },
    { id: 2, ressource: "Vidéo", link: "#", src: "./images/images.jpg", description: "Agir pour la biodiversité : un engagement au quotidien à l'ONF, 7 actions concrètes" },
    { id: 3, ressource: "Vidéo", link: "#", src: "./images/images_1.jpg", description: "Rapport d'activité 2020 de l'ONF" },
    { id: 4, ressource: "Rapport", link: "#", src: "./images/bg.jpg", description: "“Nos équipes DFCI sont très mobilisées dans le sud de la France, et restent vigilantes dans les…" },
    { id: 5, ressource: "Interview", link: "#", src: "./images/images_2.jpg", description: "“Raconte-moi la forêt” : la page qui vous conte la forêt et ses secrets" },
    { id: 6, ressource: "Actualité", link: "#", src: "./images/images_4.jpg", description: "Concours photo : #DestinationForêt, à vos clichés !" },
]

export const CRITERES = [
    { id: 1, texte: 'Légalité de l\'entité forestière', icon: './dossiericon/ressources/icons/iconCONTROLE_128x128.png' },
    { id: 2, texte: 'Suivi national de l\'activité forestière', icon: './dossiericon/ressources/icons/iconRAPPORT_128x128.png' },
    { id: 3, texte: 'Contrôle national de l\'activité forestière', icon: './dossiericon/ressources/icons/iconCONTENTIEUX_128x128.png' },
    { id: 4, texte: 'Conformité de chaîne d\'approvisionnement', icon: './dossiericon/ressources/icons/iconOPEPARC_128x128.png' },
    { id: 5, texte: 'Emission des autorisations FLEGT', icon: './dossiericon/ressources/icons/iconCODEBARRE_128x128.png' },
]