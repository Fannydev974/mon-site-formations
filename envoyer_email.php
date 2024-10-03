<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupération et validation des données
    $nom = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Validation des champs
    if (!empty($nom) && !empty($email) && !empty($message) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Adresse email de destination (remplace par ton email)
        $to = "tonemail@example.com";
        $subject = "Nouveau message de contact de " . $nom;
        $body = "Nom: " . $nom . "\nEmail: " . $email . "\n\nMessage:\n" . $message;
        $headers = "From: " . $email;

        // Envoi de l'email
        if (mail($to, $subject, $body, $headers)) {
            // Message de confirmation
            echo "<script>
                document.getElementById('formMessage').innerText = 'Merci, votre message a bien été envoyé !';
            </script>";
        } else {
            // Message d'erreur
            echo "<script>
                document.getElementById('formMessage').innerText = 'Erreur : le message n\'a pas pu être envoyé.';
            </script>";
        }
    } else {
        // Validation des champs incorrecte
        echo "<script>
            document.getElementById('formMessage').innerText = 'Veuillez remplir correctement tous les champs.';
        </script>";
    }
}
?>

