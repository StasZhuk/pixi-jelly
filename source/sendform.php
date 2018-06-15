<?php
$from='Хочуремонт31.рф'; // откуда (обязателен обратный адрес с именем сервера!)
$subject='Заявка с сайта Хочуремонт31.рф';//тема письма
$to= '481137@mail.ru'; // кому отправить.
$test_form=0; // если 1, то тестирует тело письма в файл. иначе - отправляет на мыло.

$headers = 'From: '.$from."\r\n";
$headers .= "Content-Type: text/html; charset=utf-8\r\n";
$headers .=  'X-Mailer: PHP/' . phpversion();

$b='<html><head><meta charset="utf-8"></head>
<body><noscript><div><img src="https://mc.yandex.ru/watch/26686794" style="position:absolute; left:-9999px;" alt="" /></div></noscript> <!-- /Yandex.Metrika counter --><h1>Вам письмо с сайта</h1><br>'."\n";

$b.='<p>';
foreach ($_POST as $k => $v) {
    
switch ($k) {  
    case "name":
        $b.= "Имя: $v.<br>";
        break;
    case "tel":
        $b.= "Телефон: $v.<br>";
        break;       
    case "form":
        $b.= "Название формы: $v.<br>";
        break; 

    default:
        $b.= "$k : $v.\n<br>";
 
}}

$b.='</p></body></html>';


if ($test_form){
    ob_start();
    echo $b;
    $output = ob_get_clean();
    file_put_contents('mail.html', $output);
}

// со-но сама отправка мыла

$b = wordwrap($b, 70, "\r\n");

// временно отключим

if ($test_form==0) {
    if (mail($to, $subject, $b, $headers)) echo "success";
    else echo "error";
}
//или так то же мона.
//mail($to, $subject, $b, null,"-f$from");

?>
