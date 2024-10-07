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

/**Pour les onglets exercices pratiques */
function showModule(moduleNumber) {
    // Masquer tout le contenu des modules
    document.querySelectorAll('section[id^="module"]').forEach(function (section) {
        section.style.display = 'none';
    });

    // Afficher le contenu du module sélectionné
    document.getElementById('module' + moduleNumber + '-content').style.display = 'block';
}

// Gestion des onglets
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // Cacher tous les contenus d'onglet
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Supprimer la classe "active" de tous les boutons d'onglet
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Afficher le contenu de l'onglet sélectionné et ajouter la classe "active" au bouton
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
