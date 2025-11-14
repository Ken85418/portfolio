<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    // (1) Get form fields safely
    $name    = htmlspecialchars(trim($_POST['name']));
    $email   = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    // (2) Email configuration
    $to = "kenerispe85@gmail.com";   // <-- change this to your email
    $subject = "New Contact Form Message";

    $body = "
    You received a new message:

    Name: $name
    Email: $email
    Message:
    $message
    ";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // (3) Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
} else {
    echo "Invalid request.";
}
?>
