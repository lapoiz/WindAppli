WindAppli
=========

Phonegap application connected to lapoiz-wind-server website for display wind prevision.


### Description de l'appli

* Concept

L'appli intérroge le serveur qui lui retourne un JSon à afficher à travers un Hightcharts
Les 2 Json actuel sont:
```
http://www.lapoiz.com/Wind/web/app.php/json/spot/data/1
http://www.lapoiz.com/Wind/web/app.php/json/spot/list
```


### Evolutions

* Améliorer l'affichage: par exemple: la page de graph n'est pas carrée en bas.

* Pouvoir modifier le serveur retournant le Json

* Afficher la date du relever des prévisions

* Enregistrer en local les JSon (je crois que ca ne fonctionne pas) afin d'afficher des données hors connexion.

* Choisir les spots à afficher dans la liste (si un seul -> directement sur le graph)

* Colorié les week-end afin que ce soit plus visible

* Ajouter d'autre site (Meteo France par exemple) -> c'est du coté WindServer et non sur l'appli que ce fait ce type d'évolution
