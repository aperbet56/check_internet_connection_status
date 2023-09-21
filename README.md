## CHECK INTERNET CONNECTION STATUS

## Le challenge

Cette page web permet de facilement détecter le statut en ligne / hors ligne avec javascript à l'aide de l'API navigator.onLine. J'ai vérifié la connectivité Internet à l’aide de la propriété navigator.onLine.

- Pour pouvoir détecter si l'utilisateur est en ligne ou hors ligne j'ai utilisant la propriété onLine sur l'objet navigateur qui renvois un booléen : true signifie que l'utilisateur est en ligne et false signifiant hors ligne.

- De plus, des événements en ligne et hors ligne seront déclenchés si l'état de la connexion Internet de l'utilisateur change. J'ai donc ajouté un écouteur d'événements en ligne et hors ligne à la fenêtre et effectuer les actions respectives en fonction de l'état en ligne et hors ligne.

- Vous pouvez simuler le statut en ligne / hors ligne en utilisant par exemple les outils de développement Chrome.
