import React from 'react';
import { ModuleIcon } from './ModuleIcon';


const object = [
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
    { id: 14, icon: './dossiericon/ressources/icons/iconCERTIFLEGALITE_128x128.png', titre: "CERTIFICAT DE LAGALITE", texte: "Gérer les processus d'obtention du certificat de légalité, de la demande jusqu'à l'emission et l'activation  du certificat" },
    { id: 15, icon: './dossiericon/ressources/icons/iconEXPORTATION_128x128.png', titre: "EXPORTATIONS", texte: "Gérer les différents opérations liées à l'exploition des produits forestiers jusqu'à l'obtention de l'autorisation FLEGT" },
    { id: 16, icon: './dossiericon/ressources/icons/iconTRACABILITE_128x128.png', titre: "TRACABILITE", texte: "Tracer les produits forestiers et les documents émis par le système à travers leurs numéros de code-barres" },
    { id: 17, icon: './dossiericon/ressources/icons/iconRAPPORT_128x128.png', titre: "RAPPORT", texte: "Enregistrer les différents contrôles effectués par l'Administration forestière, compiler les données collectées sur le terrainn et produire les rapports" },
    { id: 18, icon: './dossiericon/ressources/icons/iconCONTROLE_128x128.png', titre: "CONTROLE", texte: "Produire les rapportds d'analyse de l'activité forestière et ceux demandés par l'annexe 7 de l'APV" },
]

export const Modules = () => {
    return (
        <div>
            {/* <div className="modules">

                {object.map(item => (
                    <div key={item.id} className="module">
                        <div className="block1">
                            <h4 className="titre">{item.titre}</h4>
                            <div className="icon"><img src={item.icon} alt="" /></div>
                        </div>
                        <div className="block2">
                            <p>{item.texte}</p>
                        </div>
                    </div>
                ))}
            </div> */}
            <div style={{width: "80%", margin: "50px auto"}}>
                <ModuleIcon object={object} />
            </div>
        </div>
    );
}
