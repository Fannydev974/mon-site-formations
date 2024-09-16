// Interaction pour le bouton "Acheter"
document.getElementById('buyBtn')?.addEventListener('click', function () {
    alert('Merci pour votre achat !');
});

// Validation simple du formulaire de contact
document.getElementById('contactForm')?.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Merci pour votre message ! Nous reviendrons vers vous bientôt.');
});
