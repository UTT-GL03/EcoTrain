# Réduction de l'impact environnemental des plateformes de réservation de trains

## Choix du sujet
On utilise presque tous le site ou l’application de la SNCF pour regarder un horaire ou acheter un billet. C’est devenu un réflexe du quotidien, un service que beaucoup considèrent comme indispensable, surtout quand on sait que 122 millions de voyageurs ont pris le TGV en 2023. On parle souvent du train comme d’un moyen de transport écologique, mais on oublie que tout commence en ligne. 
Est-ce que l’outil numérique qu’on utilise pour voyager est vraiment aussi « vert » qu’on le pense ? 
Même si tout paraît immatériel, chaque clic consomme de l’énergie. Notre objectif est donc simple : mesurer l’impact environnemental de l’application web de la SNCF, pour voir si la face numérique du train est aussi propre que ses rails.
  
## Utilité sociale
### Des transports longue distance
Les transports longue distance, comme ceux proposés par la SNCF, sont bien plus qu’un simple moyen de se déplacer : ils contribuent directement à une mobilité plus durable et accessible pour tous.

**Accès à l’emploi** : par exemple, un habitant de Romilly peut travailler à Troyes ou même à Paris grâce aux liaisons ferroviaires régulières. Sans ces trajets, certaines carrières seraient tout simplement impossibles.

**Accès aux services publics** : santé, éducation, administration… tout devient plus atteignable, même quand on vit loin des grandes villes.

**Lien entre les territoires** : le train connecte des régions parfois isolées, créant un sentiment d’appartenance nationale.

**Outil de décentralisation** : il rend moins nécessaire de vivre dans les grandes métropoles pour avoir les mêmes opportunités.

### Des applications (SNCF Connect)
Les applications ne sont pas nécessaires à l'emploi des solutions de transport. En revanche, elles contribuent fortement à la simplification des démarches :
- Planification simplifiée
- Visibilité des offres de réduction
- Accès aux informations (horaires)
- Achat des billets
- Meilleure compréhension et gain de temps

Ces applications permettent de favoriser l'accès à l'information. Dans le cas de SNCF connect par exemple, c'est également un parcours utilisateur qui a entièrement été repensé ces dernières années pour le simplifier, et améliorer l'aisance d'utilisation.

En somme, les applications permettent une plus forte fréquentation des services, grâce à la facilitation des démarches liées aux déplacements longue distance

## Effets de la numérisation
Les applications numériques de la SNCF remplacent en partie les billets papier achetés au guichet ainsi que les informations affichées en gare. Ces alternatives « physiques » existent toujours, mais elles sont désormais utilisées en solution de secours, plutôt qu’en premier réflexe.

Par exemple, de nombreuses gares ont réduit leurs horaires d’ouverture ou fermé certains guichets, obligeant les usagers à passer par l’application ou les bornes automatiques. Dans certaines petites gares, il n’y a même plus aucun personnel sur place : sans smartphone ou connexion Internet, acheter un billet devient un véritable parcours du combattant.

## Scénarios d'usage et impacts
Nous imaginons deux scénarios d'utilisation des applications de réservation de trains : l'achat d'un billet de train et la consultation de son billet. D'autres scénarios peuvent être envisagés, comme la consultation des horaires, mais ce scénario ressemble fortement au scénario de réservation de billet.

### Scénario 1 : "Achat d'un billet de train"
1. L'utilisateur renseigne ses gares de départ et de destination, ainsi que la date du voyage.
2. Ensuite, il sélectionne le voyage de son choix parmi ceux proposés.
3. Puis il sélectionne les options de son voyage (seconde ou première classe, option vélo, siège)
4. Enfin, il valide le voyage et passe au paiement

### Scénario 2 : "Consultation de billets de train"
1. L'utilisateur se connecte à son espace.
2. Il sélectionne le voyage à venir concerné.
3. Il accède au billet, et peut par exemple le télécharger.


## Impact de l'exécution du scénario auprès de différents services concurrents
L'EcoIndex d'une page (de A à G) est calculé (sources : EcoIndex, Octo, GreenIT) en fonction du positionnement de cette page parmi les pages mondiales concernant :
- le nombre de requêtes lancées,
- le poids des téléchargements,
- le nombre d'éléments du document.

Nous avons choisi de comparer l'impact des scénarios sur les plateformes de réservation de train de divers pays, appartenant à des compagnies ou non (SNCF Connect, Deutsche Bahn, 1.2.Train, Omio, Eurostar)

|Service|Score (sur 100)|Classe|Détail des mesures|
|---|---|---|---|
|SNCF Connect| 23  | F 🔴  | [...](https://github.com/UTT-GL03/EcoTrain/blob/main/benchmark/SNCF%20Connect/declaration-environnementale.md)  |
|DB| 32 | E 🟠 | [...](https://github.com/UTT-GL03/EcoTrain/blob/main/benchmark/Deutsche%20Bahn/declaration-environnementale.md)  | 
|1.2.Train|82|  A 🔵 | [...](https://github.com/UTT-GL03/EcoTrain/blob/main/benchmark/1.2.Train/declaration-environnementale.md)  | 
|Omio| 40  | D 🟡  | [...](https://github.com/UTT-GL03/EcoTrain/blob/main/benchmark/Omio/declaration-environnementale.md)  | 
|Eurostar| 15  | F 🔴 | [...](https://github.com/UTT-GL03/EcoTrain/blob/main/benchmark/Eurostar/declaration-environnementale.md)  | 

__Tab.1__ : Mesure de l'EcoIndex moyen de divers services de réservation de trains.

Les mesures de l'impact moyen de ces services (cf. Tab.1) révèlent des classes EcoIndex très faibles pour la plupart (D à F). Seule la solution 1.2.Train, indépendante des compagnies, se démarque avec un score élevé (A). Cela peut s'expliquer par la structure très simple du site.

## Modèle économique
Comme nous l'avons vu dans la section précédente, parmi les choix de conception ayant le plus d'impact environnemental, la plupart sont directement liés au modèle économique du service. C'est pourquoi il est nécessaire à ce stade d'analyser leur modèle économique et de définir notre propre modèle permettant une conception plus frugale.

|Service|Source de revenus|
|---|---|
|SNCF Connect|Vente de billets|
|DB|Vente de billets|
|1.2.Train|Commissions|
|Omio|Commissions|
|Eurostar|Vente de billets|

__Tab.2__ : Offre des services de réservation de billets de train.

Notre marché semble être structuré en oligopôle : il y a plusieurs offreurs pour acheter le même billet de train. Le billet vendu est le même sur les différentes plateformes mais ces plateformes ne sont pas entièrement identiques : fluidité, interface, expérience utilisateur. Les services de réservation sont substituables entre eux : si l'on ne souhaite pas acheter son billet de train sur SNCF Connect, on peut l'acheter sur 1.2.Train ou sur Omio.

1.2.Train dispose d'un modèle économique fragile qu'il serait pertinent de renforcer, mais le site web est déjà suffisamment sobre pour que l'on ne se penche pas sur ce cas dans le cadre de notre projet. Nous trvavaillerons donc sur SNCF Connect. Il n'y a pas de publicité sur la plateforme, qui semble uniquement se financer grâce aux revenus des ventes de billets de train (service annexe). Nous voyons donc peu d'autres modèles économiques pertinents, sachant que celui-ci semble largement viable.

|Source possible de revenus|Montant unitaire|Quantité nécessaire pour financer un salaire[^1]|
|---|---|---|
|Part sur les ventes de billets[^2]|0,90€|3966|

[^1]: Basé sur le coût total employeur du salaire médian 2025 soit 3569€ environ (source : [URSSAF](https://mon-entreprise.urssaf.fr/simulateurs/salaire-brut-net))
[^2]: Estimation sur la base de 2% des billets dédiée à la plateforme, les billets étant à 45€ en moyenne

## Maquette de l'interface et échantillon de données
Au vu des différents services comparés, des exigences environnementales exprimées plus haut et des scénarios retenus, nous avons défini pour notre prototype une maquette de l'interface et un échantillon de données réalistes.

Les ressources Web possédant une représentation sur notre application seront de deux types :
- Les résultats de recherche de voyage (avec une HTTP-URI ayant pour chemin /?depart={gare_depart}&arrivee={gare_arrivee}&date={date})
- Un voyage proposé (avec une HTTP-URI ayant pour chemin /{id})
  
<img src="./docs/mockup_search.JPG" alt="maquette de la page de recherche" height="500"/>   <img src="./docs/mockup_tripdetails.JPG" alt="maquette de la page de résultats" height="500"/>


__Fig.1__: Maquette de la page de recherche // __Fig.2__: Maquette de la page de résultats de recherche

Dans un objectif de sobriété environnementale, les résultats de recherche se limiterons à ceux du jour sélectionné.

Pour des raisons de respect des droits d'auteurs, nous utilisons des données générées (avec [dummy-json](https://dummyjson.com/)). Bien que fictives, ces données correspondent à la structure des services concurrents : les voyages comportent une gare de départ et d'arrivée, une date, une heure de départ et d'arrivée, et un ou plusieurs tarifs.

## Prototype n°1 : Fonctionnalités pour le scénario prioritaire avec données chargées de manière statique
Pour cette première version du prototype :
- l'échantillon de données est encore chargé dans le code de manière statique,
- les fonctionnalités implémentées ne sont que celles nécessaires pour suivre le scénario prioritaire ("Acheter un billet de train").

Ce scénario nécessite de pouvoir naviguer entre plusieurs pages : 
- la page de recherche de voyage, où il est possible de rechercher des trajets
- la page de résultats, où s'affichent les trajets correspondant aux critères
- la page de détails du trajet, une fois celui-ci sélectionné
- le panier, avant de passer au paiement du ou des billet(s)

### Page de recherche de voyage
La page d'accueil renvoie un formulaire permettant de renseigner ses critères de recherche de voyage.

<img src="./docs/searchpage_screenshot.png" alt="prototype de la page de recherche"/>

__Fig.3__ : Prototype de la page de recherche de voyage

Pour l'instant, nous avons choisi un framework de mise en page minimaliste (PicoCSS). Dans la suite du projet, nous verrons si l'impact environnemental du passage à un framework de mise en page plus puissant (comme Bootstrap) est acceptable.

Nous avons également fait le choix de ne pas inclure de photographies, celles-ci n'état pas nécessaires à la réservation d'un billet de train.

Dans l'état actuel du prototype, il est possible d'avoir une première idée de l'impact environnemental du frontend. Bien entendu, il manque encore le chargement dynamique des données, mais nous pouvons déjà évaluer l'impact de l'affichage des données et du framework (au sens large : React, PicoCSS). Cette évaluation de l'impact (cf. Tab.3) est déjà encourageante en mode "développement" mais encore plus en mode "pré-production". Nous mesurons ici l'effet positif de l'adoption d'outils de développement Web intégrant la ["minification"](https://fr.wikipedia.org/wiki/Minification) (cf. Wikipédia) du code et la concaténation du code d'une part et des feuilles de style d'autre part.

| |EcoIndex|GES (gCO2e)|Taille du DOM|Requêtes|Taille de la page (ko)|
|---|---|---|---|---|---|
|Mode "développement"|79 B 🟢 |1.42|81|29|1873|
|Mode "pré-production"|91 A 🔵|1.18|78|6|145|

__Tab.3__ Mesure de l'EcoIndex moyen de notre prototype, dans le cadre du scénario n°1

### Page de résultats de recherche

La page de résultats de recherche a pour HTTP-URI /trips, et affiche actuellement l'ensemble des données factices de façon statique. À plus long terme, une requête GET sera ajoutée à la suite de /trips afin d'afficher dynamiquement les résultats selon les informations renseignées dans le formulaire de la page précédente.

Depuis cette page, il est possible d'accéder aux détails de l'un des trajets afin de le réserver, ou bien de retourner à la page d'accueil en cliquant sur le titre de la page ("EcoTrain").

<img src="./docs/tripslist_screenshot.png" alt="prototype de la page de résultats de recherche"/>
__Fig.4__ Prototype de la page de résultats de recherche

### Page de détails du trajet

Les pages des voyages ont pour HTTP-URI /trips/{id}. Dans notre jeu de données, chaque voyage dispose d'un ID unique qui est réemployé dans l'URI.

De même que précédemment, nous avons tenté d'implémenter cette page (cf. Fig. 4) conformément à ce que prévoyait la maquette.

<img src="./docs/tripdetails_screenshot.png" alt="prototype de la page de détails sur le trajet sélectionné"/>
__Fig.5__ Prototype de la page de détails sur le trajet choisi

### Page du panier

<img src="./docs/cart_screenshot.png" alt="prototype de la page du panier"/>
__Fig.6__ : Prototype de la page du panier


### Impacts du scénario prioritaire

| |EcoIndex|GES (gCO2e)|Taille du DOM|Requêtes|Taille de la page (ko)|
|---|---|---|---|---|---|
|1. Renseigner les critères de recherche pour son trajet |91 A 🔵|1.18|78|6|145|
|2. Consulter les trajets disponibles, et sélectionner celui de son choix|75 B 🟢 |1.50|43|6|145|
|3. Consulter les détails d'un trajet et l'ajouter au panier|94 A 🔵|1.12|47|6|145|
|4. Consulter son panier et accéder au paiement|94 A 🔵|1.13|43|6|145|

__Tab.4__: Évaluation de l'impact du scénario "Achat d'un billet de train" dans le prototype n°1 (v1.0.0)

### Étape de prototypage : Données statiques chargées de manière dynamique

Pour cette nouvelle version du prototype (v1.0.1), identique du point de vue fonctionnel, les données (toujours statiques) sont désormais chargées par le frontend à travers le réseau immédiatement après un premier affichage à vide. Ce comportement, plus réaliste, n'a pour effet qu'une requête supplémentaire par page affichée.

Concernant l'évaluation de l'impact environnemental du scénario, par rapport au tableau précédent (cf. Tab.2), à l'exception du nombre de requêtes qui augmente légèrement, les résultats sont identiques.

| |EcoIndex|GES (gCO2e)|Taille du DOM|Requêtes|Taille de la page (ko)|
|---|---|---|---|---|---|
|1. Renseigner les critères de recherche pour son trajet |91 A 🔵 |1.18|81|6|146|
|2. Consulter les trajets disponibles, et sélectionner celui de son choix |75 B 🟢|1.51|501|9|146|
|3. Consulter les détails d'un trajet et l'ajouter au panier|93 A 🔵|1.14|47|9|146|
|4. Consulter son panier et accéder au paiement|93 A 🔵|1.14|43|10|146|

__Tab.5__: Évaluation de l'impact du scénario "Achat d'un billet de train", dans la version 1.0.1


## Mesures de la consommation énergétique lors du passage à l'échelle

Maintenant que notre prototype est réaliste en termes de nombre de requêtes, nous pouvons simuler les effets du "passage à l'échelle". 

Dans le cas des plateformes de trains et des fonctionnalités prévues (consultation des voyages, achat de billet), l'augmentation de la quantité des données à traiter pourrait provenir de la conservation de trajets passés dans la base de données, ainsi que des billets de voyages passés.
À raison de 15.000 trains circulant sur le réseau ferré chaque jour, si chacun d'eux effectue un seul trajet, cela augmenterait notre volumes de trajets de 15.000 par jour, soit 450.000 par mois.

Conserver ces données ne semble pas avoir une utilité suffisament importante pour justifier l'impact environnemental qui y serait associé. Ainsi, nous ferons le choix de supprimer automatiquement les trajets passés.

De la même façon, les billets relatifs aux trajets passés ne seront pas conservés.

### Évolution de l'EcoIndex lors du passage à l'échelle

Produites désormais de manière automatique lors de l'intégration continue, les mesures nécessaires à la production de l'EcoIndex, [avant](https://github.com/UTT-GL03/EcoTrain/actions/runs/19293859455/artifacts/4541500392) et [après](https://github.com/UTT-GL03/EcoTrain/actions/runs/19298418224/artifacts/4543202028) la simulation du passage à l'échelle retraduisent bien (cf. Tab.6) l'augmentation du poids des téléchargements, mais aussi de l'augmentation du nombre d'éléments de la page des titres.

|   | EcoIndex| GES (gCO2e) | Taille du DOM | Requêtes | Taille de la page (ko)
|---|--------:|------------:|--------------:|---------:|---------------------:
| 1. Renseigner les critères de recherche pour son trajet | 84 A 🔵 | 1,3 | 89 | <del>7</del><br/>6 | <del>430</del><br/>418
| 2. Consulter les trajets disponibles, et sélectionner celui de son choix | <del>87 A 🔵</del><br/>45 D 🟡 | <del>1,3</del><br/>2,1 | <del>122</del><br/>1771 | 1 | <del>10</del><br/>761
| 3. Consulter les détails d'un trajet et l'ajouter au panier | <del>90 A 🔵</del><br/>86 A 🔵 | <del>1,2</del><br/>1,3 | 57 | 1 | <del>10</del><br/>761
| 4. Consulter son panier et accéder au paiement | <del>91 A 🔵</del><br/>87 A 🔵 |  <del>1,2</del><br/>1,3 | 50 | 1 | <del>10</del><br/>761

__Tab.6__: Effet du passage à l'échelle sur l'impact du scénario "Achat d'un billet de train" dans le prototype v1.0.1.

On constate que la baisse de l'EcoIndex est la plus importante à l'affichage des résultats de recherche. Cela semble cohérent puisque c'est sur cette page qu'un grand nombre d'éléments (propositions de voyage de la base de données) va apparaître.

Pour évaluer plus précisément l'impact de la consultation des détails d'un trajet, nous utiliserons un autre outil de mesure : GreenFrame.
