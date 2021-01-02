// # Exercice 4 JavaScript -> Array

//     - ## Créer une variable qui reçois un array avec 3 éléments
let musique = ["rock", "blues", "soul"];

//     - ## Afficher les éléments de l'array
console.log(musique);

//     - ## Ajouter et afficher votre prenom a l'array
let prenom = musique.push('Zulma');
console.log(prenom);
//     - ## Remplacer et afficher un élément de l'array par autre chose
musique.splice(0, 1, 'funk');
console.log(musique);

//     - ## Effacer un élément de l'array
musique.shift('test');

//     - ## Afficher le contenu le d'array
console.log(musique);
