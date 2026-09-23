# Exercices Animations GSAP

## Installation

1. Cloner le repository
2. Ouvrir le dossier avec Visual Studio Code
3. Ouvrir une fenêtre de terminal dans Visual Studio Code et entrer la commande suivante :

```bash
npm install
```

## Travail

Depuis le terminal, entrer la commande suivante :

```bash
npm run dev
```

## Consigne

### Exercice 1

La première série d'exercice se concentre sur les tweens GSAP (= simples animations). A chaque fois, la base théorique est rappelé en amont de l'exercice.

Vous devez uniquement écrire du JavaScript dans le fichier dédié `animations.js`.

### Exercice 2

La seconde série d'exercice se concentre sur les Timelines, c'est-à-dire l'enchaînement et la synchronisation de multiples animations entre elles.

Le code JavaScript doit être écrit dans le fichier dédié `timeline.js`.

### Exercice 3

La troisième série d'exercice se concentre sur les animations au scroll (ScrollTrigger).

En plus d'écrire le code JavaScript dans le fichier dédié `scroll-trigger.js`, il vous faut également importer le plugin `ScrollTrigger` en dessous de la ligne d'import de la librairie.

```js
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
```

## Installation de la librairie GSAP

### [GSAP](https://greensock.com/gsap/)

Installer le paquet avec NPM

```
npm install gsap
```

Inclure le JS depuis un fichier JS (à indiquer tout en haut du fichier)

```js
import { gsap } from "gsap";
```

Inclure les éventuels plugins

```js
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
```
