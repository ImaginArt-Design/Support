# PROJECT_MAP — Imagin'Art Hub Feedback & Support

> **Plateforme** : Hub de Support, Signalement de Bugs & Suggestions multi-produits (Imagin'Art Suite, Wlidi, Projets graphiques).  
> **Auteur & Conception** : Imagin'Art — Laabidi Abdelghani (laabidi.cloud@gmail.com | linktr.ee/imagin.art).  
> **Destination** : Intégration Linktree (`linktr.ee/imagin.art`) & GitHub Pages (`https://imaginart-design.github.io/Feedback/`).

---

## 1. TECH_STACK
- **Langages** : HTML5 sémantique, CSS3 moderne (Variables, Glassmorphism Studio, Grid/Flexbox), JavaScript ES6+ (Vanilla, 0 dépendance externe).
- **Moteur de Soumission** : Web3Forms API (Endpoint AJAX REST sans rechargement de page, transmission instantanée par e-mail vers `laabidi.cloud@gmail.com`, gestion des pièces jointes et des Reply-To).
- **Identité Visuelle Officielle** :
  - Emblème officiel vectoriel : `assets/logo_icon.svg`
  - Typographie officielle vectorielle : `assets/logo_text.svg`
  - Style : Dark Studio Glassmorphism épuré, zéro emoji, icônes vectorielles SVG techniques (1.75px stroke).
- **Internationalisation (i18n)** : Support bilingue natif Français / Arabe (RTL / LTR) avec bascule instantanée sans rechargement.
- **Typographie Web** : Google Fonts (`Outfit` pour le français, `Readex Pro` & `Tajawal` pour l'arabe).
- **Hébergement cible** : GitHub Pages (Statique, 100% gratuit, haute disponibilité, SSL natif).

---

## 2. SYSTEM_FLOW
```text
[Utilisateur depuis Linktree / Web]
             │
             ▼
  ┌──────────────────────────────────────────────┐
  │ 1. Choix du Produit (Suite, Wlidi, Autre)    │
  └──────────────────────┬───────────────────────┘
                         │
  ┌──────────────────────▼───────────────────────┐
  │ 2. Type de Message (Bug, Idée, Avis, Support)│
  └──────────────────────┬───────────────────────┘
                         │
  ┌──────────────────────▼───────────────────────┐
  │ 3. Formulaire Contextuel & Pièce Jointe      │
  │    (Champs obligatoires marqués d'un * rouge)│
  └──────────────────────┬───────────────────────┘
                         │
  ┌──────────────────────▼───────────────────────┐
  │ 4. Soumission AJAX Web3Forms vers Gmail      │
  └──────────────────────┬───────────────────────┘
                         │
                         ├─────────────────────────────────────────┐
                         ▼                                         ▼
            [E-mail structuré Gmail]                     [Écran Succès Épuré]
            (laabidi.cloud@gmail.com)                      (Confirmation UX)
```

---

## 3. ARCHITECTURE
```text
imaginart-feedback/
├── index.html                  # Interface bilingue, responsive & accessible
├── css/
│   └── style.css               # Design Studio Dark Glassmorphism, typographie officielle, RTL
├── js/
│   └── app.js                  # Logique interactive : validation avec surbrillance rouge, i18n, AJAX
├── assets/
│   ├── logo_icon.svg           # Emblème officiel Imagin'Art
│   ├── logo_text.svg           # Lettrage officiel vectoriel Imagin'Art
│   ├── logo_2.0.svg            # Logo vectoriel Imagin'Art Suite
│   ├── wlidi_icon.png          # Icône officielle Wlidi
│   ├── wlidi_header_logo.png   # Bannière Wlidi
│   └── icon.ico                # Favicon
├── README.md                   # Guide de déploiement et configuration
└── PROJECT_MAP.md              # Carte d'architecture et de suivi
```

---

## 4. ÉTAT DU PROJET
- [x] Remplacement du titre texte par le lettrage officiel vectoriel `logo_text.svg` dans l'en-tête.
- [x] Suppression totale de WhatsApp (champ et bouton) : canal unique e-mail direct vers Gmail.
- [x] Élimination complète de tous les emojis et clichés IA : remplacement par des icônes SVG minimalistes et professionnelles.
- [x] Affichage permanent et visible des astérisques rouges (`*`) sur tous les champs obligatoires (en français et en arabe).
- [x] Surbrillance rouge immédiate (`.input-error`) des champs non remplis lors de la tentative d'envoi.
- [x] Synchronisation miroir vers `D:\Save Antigravity\scratch\github_build\imaginart-feedback`.
