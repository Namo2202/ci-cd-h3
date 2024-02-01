# Projet réseau social décentralisé

# Ce projet est le début d'un réseau social décentralisé dans lequel les données des utilisateurs ne sont pas partagées avec des organisations tierces.

## Les fonctionnalités à développer prochainement sont les suivantes :
-   Intégration de la technologie Blockchain : Permettre le partage transparent des informations entre les utilisateurs.
-   Système de Récompense en Cryptomonnaie : Les utilisateurs gagnent des cryptomonnaies en fonction de leur activité sur la plateforme. Plus ils sont actifs, plus ils en gagnent.
-   Authentification et Messagerie : Développer un système de login avec JWT (JSON Web Token) pour sécuriser l'accès des utilisateurs. Ensuite, mettre en place un système de messagerie pour permettre aux utilisateurs d'interagir entre eux.

## Stack Technologique :

Ce projet est réalisé avec le stack MERN (MongoDB, Express, React, Node).

## Configuration et Installation :

- Installation des Dépendances Backend :`npm i` pour installer les dépendances Back
- Configuration de MongoDB : Entrer son MONGO URI perso dans .env enfin de se connecter à sa base de donnée
- Installation des Dépendances Frontend : `cd frontend` puis `npm i` pour installer les dépendances Front

## Schéma de la Base de Données MongoDB : 

-   ![Alt text](<screenshots/schéma bdd.png>)
-   ![Alt text](screenshots/mongodb.png)

## Les routes pour les requêtes POST,GET,PUT,DELETE et PATCH :

-   GET "/" (getPosts) : Cette route permet de récupérer toutes les publications. Lorsqu'un utilisateur effectue une requête GET à la racine de l'API, la fonction getPosts du contrôleur est appelée pour renvoyer la liste des publications.

-   POST "/" (setPosts) : Cette route permet d'ajouter une nouvelle publication. Lorsqu'un utilisateur effectue une requête POST à la racine de l'API avec les données de la nouvelle publication, la fonction setPosts du contrôleur est appelée pour enregistrer cette publication dans la base de données.

-   PUT "/:id" (editPost) : Cette route permet de modifier une publication existante. L'utilisateur doit fournir l'identifiant de la publication qu'il souhaite modifier dans l'URL, et les nouvelles données de la publication dans le corps de la requête. La fonction editPost du contrôleur est alors appelée pour effectuer la modification.

-   DELETE "/:id" (deletePost) : Cette route permet de supprimer une publication existante. L'utilisateur doit fournir l'identifiant de la publication à supprimer dans l'URL. La fonction deletePost du contrôleur est appelée pour supprimer la publication correspondante de la base de données.

-   PATCH "/like-post/:id" (likePost) : Cette route permet à un utilisateur de "liker" une publication spécifique. L'utilisateur fournit l'identifiant de la publication à liker dans l'URL. La fonction likePost du contrôleur est appelée pour incrémenter le nombre de likes de la publication.

-   PATCH "/dislike-post/:id" (dislikePost) : Cette route permet à un utilisateur de "disliker" une publication spécifique. L'utilisateur fournit l'identifiant de la publication à disliker dans l'URL. La fonction dislikePost du contrôleur est appelée pour incrémenter le nombre de dislikes de la publication.

# Dockerisation :

### Frontend :

-   I. Build de l'image frontend :
    -   ![Alt text](<screenshots/Build image docker frontend.png>)
-   II. Push de l'image sur Docker hub :
    -   ![Alt text](<screenshots/Push image frontend sur dockerhub.png>)
    -   ![Alt text](<screenshots/Image frontend dockerhub.png>)
    -   Lien image frontend docker hub : https://hub.docker.com/repository/docker/nafise22/mern-project-namo/general
-   III. Création et lancement du container :
    -   ![Alt text](<screenshots/création container frontend.png>)
    -   ![Alt text](<screenshots/localhost frontend.png>)
    IV. Arrêt du conteneur :
    -   ![Alt text](<screenshots/Arrêt du container frontend.png>)
    -   ![Alt text](<screenshots/localhost après arrêt du container.png>)

### Backend :

-   I. Build de l'image backend:
    ![Alt text](<screenshots/Build image docker backend.png>)
-   II. Création et lancement du container :
    ![Alt text](screenshots/Backend_server_container.png)
    ![Alt text](<screenshots/Localhost 5000.png>)

## Docker Compose :

-   I.
      ![Alt text](<screenshots/Docker compose 1.png>)
      ![Alt text](<screenshots/Docker compose 2.png>)
-   II.
      ![Alt text](<screenshots/Localhost fonctionnel après docker compose.png>)
    II. Push des images frontend et backend:
      ![Alt text](<screenshots/push frontend et backend apres docker compose.png>)
      ![Alt text](<screenshots/Docker hub updated.png>)
    -   Lien du docker hub mise à jour : https://hub.docker.com/repository/docker/nafise22/mern-project-namo/tags?page=1&ordering=last_updated

### Docker HELTHCHECK : Test du bon fonctionnement des conteneurs

-   ![Alt text](<screenshots/Docker HEALTHCHECK.png>)

# Reverse proxy NGINX :

-   I. Démarrage du conteneur Nginx sans erreur:
    ![Alt text](<screenshots/container nginx démarrage sans erreur.png>)
-   II. Test avec Postman pour accéder à l'application via le proxy Nginx:
    ![Alt text](<screenshots/test requete GET postman backend.png>)
    ![Alt text](<screenshots/test requete GET postman frontend.png>)

# Test Unitaires : 

## Backend :

-   ![Alt text](<screenshots/Unit test backend.png>)

## Frontend :

-   ![Alt text](<screenshots/Unit test frontend.png>)

# Continus Integration/Deployment with github :

## Backend :

-   I. Build docker image backend server et push sur docker hub:
    [![Build and deploy backend docker image](https://github.com/Namo2202/ci-cd-h3/actions/workflows/build_backend.yml/badge.svg?branch=main)](https://github.com/Namo2202/ci-cd-h3/actions/workflows/build_backend.yml)
    ![Alt text](<screenshots/Build github Backend docker image.png>)
    ![Alt text](<screenshots/github push backend docker image.png>)
-   II. Run & test backend server :
    [![Frontend server TEST](https://github.com/Namo2202/ci-cd-h3/actions/workflows/test_frontend.yml/badge.svg?branch=main)](https://github.com/Namo2202/ci-cd-h3/actions/workflows/test_frontend.yml)
    ![Alt text](<screenshots/Run and test backend server.png>)

## Frontend :

-   I. Build docker image frontend server et push sur docker hub:
    [![Build and deploy frontend docker image](https://github.com/Namo2202/ci-cd-h3/actions/workflows/build_frontend.yml/badge.svg?branch=main)](https://github.com/Namo2202/ci-cd-h3/actions/workflows/build_frontend.yml)
    ![Alt text](<screenshots/Build github Frontend docker image.png>)
    ![Alt text](<screenshots/github push frontend docker image.png>)
-   II. Run & test frontend server :
    [![Backend server TEST](https://github.com/Namo2202/ci-cd-h3/actions/workflows/test_backend.yml/badge.svg?branch=main)](https://github.com/Namo2202/ci-cd-h3/actions/workflows/test_backend.yml)
    ![Alt text](<screenshots/Run and Test frontend server.png>)
