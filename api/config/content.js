// ============================================================
//  CONFIG — coaching-studi
//  C'est LE SEUL fichier à modifier pour faire évoluer l'outil.
//  Après chaque modification : commit sur GitHub → Vercel redéploie
//  automatiquement en ~30 secondes.
// ============================================================

window.CONFIG = {

  // ---- MARCHÉS -----------------------------------------------
  marches: [
    { id: 'LLL', label: 'LLL — CPF / Plan formation', color: 'blue'   },
    { id: 'ALT', label: 'ALT — Alternance',           color: 'orange' },
    { id: 'CPF', label: 'CPF — Monétaire',            color: 'yellow' },
  ],

  // ---- PROFILS PROSPECTS -------------------------------------
  profils: [
    { id: 'reconversion', label: 'En reconversion',     prompt: 'prospect en reconversion professionnelle' },
    { id: 'demandeur',    label: 'Demandeur d\'emploi', prompt: 'demandeur d\'emploi France Travail' },
    { id: 'salarie_cpf',  label: 'Salarié CPF',         prompt: 'salarié qui veut utiliser son CPF' },
    { id: 'jeune_alt',    label: 'Jeune — alternance',  prompt: 'jeune cherchant une alternance' },
    { id: 'entreprise',   label: 'Entreprise / DRH',    prompt: 'DRH ou responsable formation en entreprise' },
  ],

  // ---- STADES DE L'APPEL ------------------------------------
  stades: [
    { id: 'hook',          label: 'Hook / accroche', prompt: 'phase d\'accroche (5 premières secondes)' },
    { id: 'decouverte',    label: 'Découverte',      prompt: 'phase découverte / qualification' },
    { id: 'argumentation', label: 'Argumentation',   prompt: 'phase argumentation' },
    { id: 'closing',       label: 'Closing',         prompt: 'phase closing (décision imminente)' },
    { id: 'relance',       label: 'Relance J+1',     prompt: 'relance J+1 ou J+2' },
  ],

  // ---- OBJECTIONS PRÉ-CÂBLÉES --------------------------------
  // Pour AJOUTER : copier un bloc { icon, label } et l'insérer ici.
  // Pour SUPPRIMER : effacer le bloc.
  // Icons : https://tabler.io/icons (chercher le nom, préfixer "ti-")
  objections: [
    { icon: 'ti-brain',           label: 'Je veux réfléchir'                  },
    { icon: 'ti-coin',            label: 'C\'est trop cher'                    },
    { icon: 'ti-clock',           label: 'Je n\'ai pas le temps'               },
    { icon: 'ti-wallet',          label: 'Mon CPF ne suffit pas'               },
    { icon: 'ti-building-school', label: 'Je regarde d\'autres écoles'         },
    { icon: 'ti-mail',            label: 'Envoyez-moi un mail'                 },
    { icon: 'ti-certificate',     label: 'Doute sur le diplôme / Qualiopi'     },
    { icon: 'ti-phone-off',       label: 'Rappelez-moi plus tard'              },
    { icon: 'ti-calendar',        label: 'Je n\'ai pas mon agenda'             },
    { icon: 'ti-clock-hour-4',    label: 'Formation trop longue'               },
    { icon: 'ti-mood-smile',      label: 'Satisfait de ma situation actuelle'  },
    { icon: 'ti-users',           label: 'Je dois en parler à ma famille'      },
    { icon: 'ti-building',        label: 'L\'entreprise ne veut pas'           },
    { icon: 'ti-device-laptop',   label: 'Peur du 100% distanciel'             },
  ],

  // ---- KPIs DE RÉFÉRENCE (onglet Scoring) --------------------
  kpis: [
    { label: 'VJR cible',       cible: '0.80',   min: '0.50',  unite: ''        },
    { label: 'Cash/CF',         cible: '8 000',  min: '—',     unite: '€/mois'  },
    { label: 'Discount max',    cible: '20%',    min: '27%',   unite: ''        },
    { label: 'Panier moyen',    cible: '3 400',  min: '3 600', unite: '€'       },
    { label: 'Transfo globale', cible: '3.7%',   min: '3.0%',  unite: ''        },
    { label: 'Appels/jour',     cible: '100',    min: '75',    unite: '/CF'     },
    { label: 'Abandon 24h',     cible: '<22%',   min: '—',     unite: ''        },
  ],

  // ---- CROYANCES À DÉTRUIRE (onglet Mindset) ----------------
  // Pour AJOUTER : copier un bloc { title, body }.
  croyances: [
    {
      title: '"Je dérange le prospect en appelant"',
      body:  'Il a rempli un formulaire — il a tapé à la porte. Ce n\'est pas un appel à froid, c\'est un appel de prescription. Comme un ami qui recommande un kiné quand tu as mal au dos.'
    },
    {
      title: '"Il faut demander la permission avant de parler"',
      body:  'Celui qui dirige la conversation crée la confiance. Chaque "vous avez 2 minutes ?" signale que tu n\'es pas sûr de toi. Et si toi tu n\'y crois pas, pourquoi le prospect le ferait ?'
    },
    {
      title: '"Il faut être au service du prospect"',
      body:  'Tu n\'es pas leur assistant. Tu es leur guide. Un guide de montagne ne demande pas si t\'as envie de monter. Il dit : "Mets tes chaussures, on y va." Prescripteur, pas serveur.'
    },
    {
      title: '"Un refus, c\'est un refus"',
      body:  'Un "non" c\'est souvent un test. Les prospects testent ta posture — ils veulent voir si tu crois à ce que tu proposes. Si tu fuis au premier "non", ils se disent : il n\'y croyait pas lui-même.'
    },
    {
      title: '"Je n\'ai pas le temps" c\'est vrai',
      body:  'Presque toujours un symptôme, pas une cause. Le vrai problème : peur, procrastination, flou. Ton rôle n\'est pas d\'accepter ça en surface, c\'est de creuser le besoin caché derrière.'
    },
    {
      title: '"Les prospects rappellent s\'ils sont intéressés"',
      body:  'S\'ils ne prennent pas RDV maintenant, ils ne reviendront pas. "Je reviens vers vous" = manière douce de décliner. Un prospect vraiment motivé trouve toujours 30 min dans son agenda.'
    },
    {
      title: '"Un oui au RDV, c\'est gagné"',
      body:  'Un "oui" peut être un écran de fumée. Sans lien créé, blocages identifiés, besoin ancré — il dira "oui" pour se débarrasser de toi et plantera le RDV avec une excuse bidon.'
    },
  ],

  // ---- PROMPT SYSTÈME IA ------------------------------------
  // Modifier ici pour changer le ton, ajouter des règles métier,
  // intégrer de nouveaux arguments spécifiques Studi/Academee.
  systemPrompt: `Tu es expert en vente EdTech pour Studi et Academee (formations 100% en ligne).
Studi : leader EdTech français, CPF/alternance/France Travail, CAP au Bac+5.
Academee : école Groupe M6, métiers-passion (beauté, coiffure, cuisine, immobilier).

Le CF (Conseiller Formation) applique le framework RRR :
- R1 Reconnaître : empathie courte et sincère, pas condescendante
- R2 Relier : preuve sociale, ancrage dans la réalité d'autres apprenants similaires
- R3 Rebondir : question directe qui force un micro-engagement ou une prise de RDV

Règles absolues :
- Jamais donner le prix — c'est le rôle du closer
- Ton confiant, posture de guide pas de serveur
- 5 à 7 phrases max, prose fluide, pas de listes à puces
- Commencer directement par R1 sans preamble ni "bien sûr"`,

};
