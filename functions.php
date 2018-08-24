<?php

const EMAIL         = "airomad7@gmail.com";
const EMAIL_HEADERS = 'From: webmaster@example.com' . "\r\n" .
                      'Reply-To: webmaster@example.com' . "\r\n" .
                      'X-Mailer: PHP/';

function send_email($subject, $text) {
    mail(EMAIL, $subject, $text, EMAIL_HEADERS);
}

send_email("subject", "text");

?>
