//document.addEventListener('DOMContentLoaded', function () {
// Vérification de l'URL pour s'assurer que nous sommes sur la bonne page avant d'attacher l'événement
//  if (window.location.pathname.includes('contenu-html.html')) { // Change 'contenu-html.html' par le nom de la page
//     const buyBtn = document.getElementById('buyBtn');

//    if (buyBtn) {
// Si le bouton existe, on ajoute l'événement
//      buyBtn.addEventListener('click', function () {
//        window.location.href = 'https://www.google.com'; // Pour tester la redirection
// Redirection vers la page de formation
//  });
//} else {
// Ne fais rien ou ajoute un commentaire ici si besoin
// console.log('Le bouton "Accéder à la formation" est introuvable.');
//}
//}
//});

document.addEventListener('DOMContentLoaded', function () {
    const buyBtn = document.getElementById('buyBtn');

    console.log(buyBtn);  // Ceci devrait afficher l'élément dans la console s'il est trouvé

    if (buyBtn) {
        buyBtn.addEventListener('click', function () {
            window.location.href = 'contenu-html.html';  // Redirection vers la page de formation
        });
    } else {
        console.log('Le bouton "Accéder à la formation" est introuvable.');
    }
});
