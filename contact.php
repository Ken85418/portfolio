<?php

if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $name = htmlspecialchars(trim($_POST["name"]));
  $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
  $message = htmlspecialchars(trim($_POST["message"]));

  if (!$name || !$email || !$message) {
    die("All fields are required.");
  }

  $to = "kenerispe85@gmail.com";
  $subject = "Portfolio Contact Form Message";
  $headers = "From: $name <$email>\r\nReply-To: $email\r\n";
  $body = "Name: $name\nEmail: $email\nMessage:\n$message";

  if (mail($to, $subject, $body, $headers)) {
    echo "Message sent!";
  } else {
    echo "Message failed to send.";
  }
}

?>