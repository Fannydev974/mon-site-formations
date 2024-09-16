<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Validation côté serveur
    if (!empty($nom) && !empty($email) && !empty($message) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $to = "tonemail@example.com";  // Remplace avec ton adresse email
        $subject = "Nouveau message de contact de " . $nom;
        $body = "Nom: " . $nom . "\nEmail: " . $email . "\n\nMessage:\n" . $message;
        $headers = "From: " . $email;

        // Envoi de l'email
        if (mail($to, $subject, $body, $headers)) {
            echo "Merci, votre message a bien été envoyé !";
        } else {
            echo "Erreur : le message n'a pas pu être envoyé.";
        }
    } else {
        echo "Veuillez remplir correctement tous les champs.";
    }
}
?>
