<?php

header("Access-Control-Allow-Origin: *");

$config['smtp_username'] = 'decorit@mmstudio.com.ua';  //Смените на адрес своего почтового ящика.
$config['smtp_port'] = '465'; // Порт работы.
$config['smtp_host'] =  'ssl://smtp.yandex.ru';  //сервер для отправки почты
$config['smtp_password'] = 'XeIBqr1mJS';  //Измените пароль
$config['smtp_debug'] = true;  //Если Вы хотите видеть сообщения ошибок, укажите true вместо false
$config['smtp_charset'] = 'utf-8';	//кодировка сообщений. (windows-1251 или utf-8, итд)
$config['smtp_from'] = 'DecorIT'; //Ваше имя - или имя Вашего сайта. Будет показывать при прочтении в поле "От кого"

function smtpmail($to='', $mail_to, $subject, $message, $headers='') {
    global $config;
    $SEND =	"Date: ".date("D, d M Y H:i:s") . " UT\r\n";
    $SEND .= 'Subject: =?'.$config['smtp_charset'].'?B?'.base64_encode($subject)."=?=\r\n";
    if ($headers) $SEND .= $headers."\r\n\r\n";
    else
    {
        $SEND .= "Reply-To: ".$config['smtp_username']."\r\n";
        $SEND .= "To: \"=?".$config['smtp_charset']."?B?".base64_encode($to)."=?=\" <$mail_to>\r\n";
        $SEND .= "MIME-Version: 1.0\r\n";
        $SEND .= "Content-Type: text/html; charset=\"".$config['smtp_charset']."\"\r\n";
        $SEND .= "Content-Transfer-Encoding: 8bit\r\n";
        $SEND .= "From: \"=?".$config['smtp_charset']."?B?".base64_encode($config['smtp_from'])."=?=\" <".$config['smtp_username'].">\r\n";
        $SEND .= "X-Priority: 3\r\n\r\n";
    }
    $SEND .=  $message."\r\n";
    if( !$socket = fsockopen($config['smtp_host'], $config['smtp_port'], $errno, $errstr, 30) ) {
        if ($config['smtp_debug']) echo $errno."<br>".$errstr;
        return false;
    }

    if (!server_parse($socket, "220", __LINE__)) return false;

    fputs($socket, "HELO " . $config['smtp_host'] . "\r\n");
    if (!server_parse($socket, "250", __LINE__)) {
        if ($config['smtp_debug']) echo '<p>Не могу отправить HELO!</p>';
        fclose($socket);
        return false;
    }
    fputs($socket, "AUTH LOGIN\r\n");
    if (!server_parse($socket, "334", __LINE__)) {
        if ($config['smtp_debug']) echo '<p>Не могу найти ответ на запрос авторизаци.</p>';
        fclose($socket);
        return false;
    }
    fputs($socket, base64_encode($config['smtp_username']) . "\r\n");
    if (!server_parse($socket, "334", __LINE__)) {
        if ($config['smtp_debug']) echo '<p>Логин авторизации не был принят сервером!</p>';
        fclose($socket);
        return false;
    }
    fputs($socket, base64_encode($config['smtp_password']) . "\r\n");
    if (!server_parse($socket, "235", __LINE__)) {
        if ($config['smtp_debug']) echo '<p>Пароль не был принят сервером как верный! Ошибка авторизации!</p>';
        fclose($socket);
        return false;
    }
    fputs($socket, "MAIL FROM: <".$config['smtp_username'].">\r\n");
    if (!server_parse($socket, "250", __LINE__)) {
        if ($config['smtp_debug']) echo '<p>Не могу отправить комманду MAIL FROM: </p>';
        fclose($socket);
        return false;
    }
    fputs($socket, "RCPT TO: <" . $mail_to . ">\r\n");

    if (!server_parse($socket, "250", __LINE__)) {
        if ($config['smtp_debug']) echo '<p>Не могу отправить комманду RCPT TO: </p>';
        fclose($socket);
        return false;
    }
    fputs($socket, "DATA\r\n");

    if (!server_parse($socket, "354", __LINE__)) {
        if ($config['smtp_debug']) echo '<p>Не могу отправить комманду DATA</p>';
        fclose($socket);
        return false;
    }
    fputs($socket, $SEND."\r\n.\r\n");

    if (!server_parse($socket, "250", __LINE__)) {
        if ($config['smtp_debug']) echo '<p>Не смог отправить тело письма. Письмо не было отправленно!</p>';
        fclose($socket);
        return false;
    }
    fputs($socket, "QUIT\r\n");
    fclose($socket);
    return TRUE;
}

function server_parse($socket, $response, $line = __LINE__) {
    global $config;
    while (@substr($server_response, 3, 1) != ' ') {
        if (!($server_response = fgets($socket, 256))) {
            if ($config['smtp_debug']) echo "<p>Проблемы с отправкой почты!</p>$response<br>$line<br>";
            return false;
        }
    }
    if (!(substr($server_response, 0, 3) == $response)) {
        if ($config['smtp_debug']) echo "<p>Проблемы с отправкой почты!</p>$response<br>$line<br>";
        return false;
    }
    return true;
}
?>

<?php

//$_POST['subject'] = "sdfsd";
//$_POST['text'] = "8894848";
//$_POST['email'] = "soad-90@mail.ru";

if ($_POST) { // eсли пeрeдaн мaссив POST
	$date=date("d.m.y"); // число.месяц.год
	$time=date("H:i"); // часы:минуты:секунды
	$adminemail = $_POST['email'];
	$adminname="Money Making Studio";
	$subject = htmlspecialchars($_POST["subject"]); // пишeм дaнныe в пeрeмeнныe и экрaнируeм спeцсимвoлы
	$email = htmlspecialchars($_POST["email"]);
	// $subject = htmlspecialchars($_POST["subject"]);
	$text = htmlspecialchars($_POST["text"]);
	$json = array(); // пoдгoтoвим мaссив oтвeтa
	if (!$subject or !$text) { // eсли хoть oднo пoлe oкaзaлoсь пустым
		$json['error'] = 'Вы зaпoлнили нe всe пoля!'; // пишeм oшибку в мaссив
		echo json_encode($json); // вывoдим мaссив oтвeтa
		die(); // умирaeм
	}
    if($email && !preg_match("|^[-0-9a-z_\.]+@[-0-9a-z_^\.]+\.[a-z]{2,6}$|i", $email)) { // прoвeрим email нa вaлиднoсть
		$json['error'] = 'Нe вeрный фoрмaт email!'; // пишeм oшибку в мaссив
		echo json_encode($json); // вывoдим мaссив oтвeтa
		die(); // умирaeм
	}

	$json['error'] = 0; // oшибoк нe былo

	echo json_encode($json); // вывoдим мaссив oтвeтa
} else { // eсли мaссив POST нe был пeрeдaн
	echo 'GET LOST!'; // высылaeм
}

$subject = $_POST['subject'];

$email=$_POST['email'];

$text = $_POST['text'];

/*$headers = 'From: webmaster@mmstudio.com.ua' . "\r\n" .
    'Reply-To: webmaster@mmstudio.com.ua' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();*/

//mail("$adminemail", "Заявка с заглушки от $name $email $tel", "Электронная почта: $email. Имя: $name. Телефон: $tel", $headers);

smtpmail('DecorIT', "$email", "$subject", "$text");


$f = fopen("message.txt", "a+");

fwrite($f," \n $date $time $text");

fwrite($f,"\n ---------------");

fclose($f);

?>
