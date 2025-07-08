# Dikk’O Local

## Description

Dikk’O Local est une plateforme e-commerce dédiée à la vente de produits locaux, frais et bio, directement issus des champs sénégalais. Le site propose notamment des box de légumes familiales et premium, ainsi que des produits transformés locaux.

---

## Fonctionnalités principales

- Authentification des utilisateurs (inscription / connexion)
- Consultation des produits (box) avec détails, contenu et vidéo de présentation
- Ajout de produits au panier
- Navigation fluide entre pages (accueil, produits, détails, panier, profil)
- Design responsive et moderne

---

## Technologies utilisées

- Frontend : React, React Router, React Bootstrap
- Backend : Node.js, Express (si applicable)
- Gestion de l’état : Context API pour authentification et panier
- Gestion des styles : CSS personnalisé + Bootstrap

---

## Installation & lancement

1. Cloner le dépôt :

```bash
git clone <url-du-repo>
cd <nom-du-dossier>

npm install
npm start
Ouvrir le navigateur à l’adresse : http://localhost:3000

Structure du projet
bash
Copier
Modifier
/src
  /components    # Composants réutilisables (Navbar, Slider, Cards, etc.)
  /context       # Contexte Auth et Panier
  /pages         # Pages (Home, Login, Register, BoxDetail, Panier, Profil...)
  /styles       # Fichiers CSS
  App.jsx       # Point d’entrée React
/server          # Backend (si applicable)
Remarques
Ne pas oublier de configurer les variables d’environnement pour la connexion backend dans un fichier .env (non inclus dans le dépôt).

Les vidéos de présentation des box sont stockées localement dans /public/videos.

Auteur
Fatoumata Camara — Projet personnel certifié