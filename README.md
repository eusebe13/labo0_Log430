# React Hello App

Une application React simple avec un bouton et un champ de saisie pour dire "Hello [nom]".  
Le projet est entièrement conteneurisé avec Docker et automatisé avec GitHub Actions (CI/CD).

## Aperçu

- Champ de texte pour entrer un nom
- Bouton qui affiche `Hello [Nom]` dans le terminal
- Tests unitaires avec React Testing Library
- Dockerfile multi-stage pour une image optimisée
- Pipeline CI/CD : Lint, Test, Build, Push sur Docker Hub

---

## Installation locale

### Pré-requis

- Node.js (>=18 recommandé)
- npm
- Docker & Docker Compose

### Démarrage local

```bash
npm install
npm start
```

Application accessible sur : http://localhost:3000

### Tests
```bash
npm test
```

### Lint
```bash
npm run lint
```

## Docker

### Build manuel
```bash
docker build -t react-hello-app .
docker run -p 3000:80 react-hello-app
```

### Docker compose
```bash
docker-compose up --build
```
