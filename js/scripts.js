//formulaire de contact et interactions utilisateurs

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Empêche l'envoi du formulaire par défaut

        // Validation basique
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            formMessage.textContent = "Veuillez remplir tous les champs.";
            formMessage.style.color = "red";
            formMessage.style.visibility = "visible";
        } else {
            // Préparation des données à envoyer
            const formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);
            formData.append('message', message);

            // Envoi des données via AJAX
            fetch('envoyer_email.php', {
                method: 'POST',
                body: formData
            })
                .then(response => response.text())
                .then(data => {
                    formMessage.textContent = data; // Afficher la réponse du serveur
                    formMessage.style.color = "green";
                    formMessage.style.visibility = "visible";

                    // Réinitialiser le formulaire après envoi
                    form.reset();
                })
                .catch(error => {
                    formMessage.textContent = "Erreur lors de l'envoi du message.";
                    formMessage.style.color = "red";
                    formMessage.style.visibility = "visible";
                });
        }
    });
});
