<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize input
    $user_email = filter_var($_POST['user_email'], FILTER_SANITIZE_EMAIL);
    $comments = htmlspecialchars($_POST['comments'], ENT_QUOTES, 'UTF-8');

    // Validate email
    if (!filter_var($user_email, FILTER_VALIDATE_EMAIL)) {
        // Redirect back to the website with an invalid email parameter
        header('Location: https://www.stefandodds.ie?sent=invalid_email');
        exit;
    }

    $to = 'stefan@stefandodds.ie';
    $subject = 'New Contact Form Submission';
    $message = "You have received a new message from the user $user_email.\n\n" .
               "Here is the message:\n$comments";
    $headers = 'From: no-reply@stefandodds.ie' . "\r\n" .
               'Reply-To: ' . $user_email . "\r\n" .
               'X-Mailer: PHP/' . phpversion();

    // Attempt to send the email
    if (mail($to, $subject, $message, $headers)) {
        // Redirect back to the website with a success parameter
        header('Location: https://www.stefandodds.ie?sent=success');
        exit;
    } else {
        // Redirect back to the website with an error parameter if the mail function fails
        header('Location: https://www.stefandodds.ie?sent=error');
        exit;
    }
}
?>
