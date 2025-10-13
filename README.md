# Réduction de l'impact environnemental des plateformes de réservation de billets de trains

## Choix du sujet
- On s'en sert régulièrement pour planifier nos déplacements en transports en commun et réserver nos billets
- Service d'utilité publique
- TGV français, 122 millions de voyageurs en 2023
  
## Utilité sociale
### Des transports longue distance
Les transports longue distance jouent un rôle clé pour favoriser la mobilité douce.
- Accès à l'emploi (exemple : habitant de Romilly qui travaille à Troyes ou Paris)
- Favorise l'accès aux services publics
- Crée des liens entre les territoires
- Favorise la décentralisation

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
Ces applications se substituent partiellement aux billets papier achetés en guichet, et aux informations papier affichées en gare. En effet, ces autres canaux sont toujours disponibles, mais utilisés en second temps.

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

Tab.1 : Mesure de l'EcoIndex moyen de divers services de réservation de trains.

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

Tab. 2 : Offre des services de réservation de billets de train.

Notre marché semble être structuré en oligopôle : il y a plusieurs offreurs pour acheter le même billet de train. Le billet vendu est le même sur les différentes plateformes mais ces plateformes ne sont pas entièrement identiques : fluidité, interface, expérience utilisateur. Les services de réservation sont substituables entre eux : si l'on ne souhaite pas acheter son billet de train sur SNCF Connect, on peut l'acheter sur 1.2.Train ou sur Omio.

1.2.Train dispose d'un modèle économique fragile qu'il serait pertinent de renforcer, mais le site web est déjà suffisamment sobre pour que l'on ne se penche pas sur ce cas dans le cadre de notre projet. Nous trvavaillerons donc sur SNCF Connect. Il n'y a pas de publicité sur la plateforme, qui semble uniquement se financer grâce aux revenus des ventes de billets de train (service annexe). Nous voyons donc peu d'autres modèles économiques pertinents, sachant que celui-ci semble largement viable.

|Source possible de revenus|Montant unitaire|Quantité nécessaire pour financer un salaire[^1]|
|---|---|---|
|Part sur les ventes de billets[^2]|0,90€|3966|

[^1]: Basé sur le coût total employeur du salaire médian 2025 soit 3569€ environ (source : [URSSAF](https://mon-entreprise.urssaf.fr/simulateurs/salaire-brut-net))
[^2]: Estimation sur la base de 2% des billets dédiée à la plateforme, les billets étant à 45€ en moyenne



