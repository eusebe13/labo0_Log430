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

### CI/CD (GitHub Actions)
À chaque push sur main, la pipeline effectue :

Lint via ESLint
Tests unitaires
Build de l'image Docker
Push automatique sur Docker Hub :
https://hub.docker.com/r/eusebe13/react-app

Secrets requis :

```DOCKER_USERNAME```

```DOCKER_PASSWORD```

### Structure du projet
```java
.
├── public/
├── src/
│   ├── App.js
│   ├── App.test.js
│   └── ...
├── Dockerfile
├── docker-compose.yml
├── .eslintrc.json
├── .dockerignore
├── .gitignore
├── README.md
├── package.json
└── .github/workflows/ci.yml
```
### Publication
L’image est publiée automatiquement sur Docker Hub :
https://hub.docker.com/r/eusebe13/react-app

### Choix techniques
React est un framework JavaScript très facile à créer et à prendre en main grâce à sa structure claire et modulaire. Son architecture facilite l’automatisation des modifications sur le web en temps réel. De plus, ESLint est un outil populaire et simple à utiliser pour garantir la qualité du code JavaScript.
