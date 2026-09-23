const timelineExercices = () => {
  if (document.querySelector("#exercice-timeline")) {
    /* -----------------------
    Importer GSAP dans ce fichier
    ----------------------- */
    /* -----------------------
    Exercice 1
   -----------------------
   Au chargement de la page, animez la boîte:
    1. Déplacement de 150px vers la droite (durée: 1s)
    2. Rotation de 180° (durée: 0.8s)
    3. Retour à la position et rotation d'origine (durée: 1.2s)
   ----------------------- */
    /* -----------------------
    Exercice 2
   -----------------------
    Au chargement de la page, animez la boîte avec des animations qui se chevauchent:
    1. Augmentation de l'échelle de 1 à 1.5 (durée: 1s)
    2. Changement de couleur vers le rouge (durée: 0.5s) - démarre 0.3s avant la fin de l'animation précédente
    3. Retour à la taille et couleur d'origine (durée: 0.8s)
   ----------------------- */
    /* -----------------------
    Exercice 3
   -----------------------
    Au chargement de la page, animez la boîte avec des animations labellisées:
    1. Label "debut" - Déplacement vers le bas de 100px (durée: 0.8s)
    2. Label "milieu" - Rotation de 360° (durée: 1s)
    3. Animation supplémentaire qui démarre au "milieu" + 0.5s : opacity de 1 à 0.3 puis retour à 1 (durée: 1s)
   ----------------------- */
  }
};

export default timelineExercices;
