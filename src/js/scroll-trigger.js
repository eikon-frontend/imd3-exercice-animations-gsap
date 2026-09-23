const scrollTriggerFunc = () => {
  if (document.querySelector("#exercice-scroll-trigger")) {
    /* ----------------------------------------------
    Exercices JavaScript : animations au scroll
    avec GSAP et le plugin ScrollTrigger
   ----------------------------------------------
    Importer GSAP et ScrollTrigger en haut du fichier.
    Attention: n'oubliez pas d'enregistrer (register) ScrollTrigger à GSAP.
    
    Utiliser les 'markers' pour visualiser les points
    de contact.
   ---------------------------------------------- */
    /* -----------------------
    Exercice 1
   -----------------------
    Changer l'opacité des boîtes [1], [2] et [3]
    à 100% lorsque :
    [1] est complètement dans l'écran (son bord bas
    atteint le bord bas du viewport)
    [2] est au milieu de l'écran (son milieu atteint
    le milieu du viewport)
    [3] est en haut de l'écran (son bord haut atteint
    le bord haut du viewport)
   ----------------------- */
    /* -----------------------
    Exercice 2
   -----------------------
    Changer l'opacité de la boîte [4] à 100%
    lorsque :
    [4] atteint 60% de l'écran (son bord haut
    atteint 60% du viewport)
   ----------------------- */
    /* -----------------------
    Exercice 3
   -----------------------
    Créer un effet de déplacement parallax Y entre
    les boîtes [5] et [6] lorsque :
    [5] et [6] apparaissent sur l'écran (leur bord haut
    atteint le bord bas du viewport)
    
    Note: un effet parallax signifie que les boîtes se déplacent
    à des vitesses différentes
   ----------------------- */
    /* -----------------------
    Exercice 4
   -----------------------
    Effectuer une rotation pas-à-pas à 360° de la boîte [7]
    en employant la propriété 'scrubs', lorsque :
    [7] atteint 40% de l'écran (son bord haut
    atteint 40% du viewport)
    
    puis, conclure l'animation lorsque :
    300px ont été scrollés depuis le début de l'animation
   ----------------------- */
    /* -----------------------
    🔥 Exercice 5 🔥
   -----------------------
    Grâce à Timeline,
    déplacer la boîte [8] de 100px vers la gauche
    puis la boîte [9] de 100px vers la droite
    puis changer l'opacité des boîtes [9] et [10] à 100% simultanément
    lorsque :
    [8] et [9] apparaissent complètement sur l'écran
    (leur bord bas atteint le bord bas du viewport)
    
    puis, conclure l'animation lorsque :
    [8] et [9] sont en haut de l'écran (leur bord haut
    atteint le bord haut du viewport)
   ----------------------- */
    /* -----------------------
    Exercice 6
   -----------------------
    Ajouter une class 'highlight' à la boîte [10]
    lorsque :
    [10] est au milieu de l'écran (son milieu atteint
    le milieu du viewport)
   ----------------------- */
    /* -----------------------
    🔥🔥 Exercice 7 🔥🔥
   -----------------------
    Punaiser (pin) la boîte [11] à l'écran
    en employant la propriété 'pin', lorsque :
    le parent de [11] est au milieu de l'écran (son milieu atteint
    le milieu du viewport)
    
    puis, "libérer" la boîte lorsque :
    le bas du conteneur de [11] est au milieu de l'écran -20%
    (son bord bas -20% atteint le centre du viewport)
    
    Cet exercice n'a pas besoin d'animation to/from/fromTo, et peut
    utiliser la version standalone de ScrollTrigger
   ----------------------- */
  }
};

export default scrollTriggerFunc;
