<?php

$cardNumber1 = $_GET['card_number1'];
$cardNumber2 = $_GET['card_number2'];
$cardNumber3 = $_GET['card_number3'];
$cardNumber4 = $_GET['card_number4'];
$cardHolder = $_GET['card_holder'];
$cardMonth = $_GET['card_month'];
$cardYear = $_GET['card_year'];
$cardCcv = $_GET['card_ccv'];

echo 'Номер карты: '.$cardNumber1.$cardNumber2.$cardNumber3.$cardNumber4.
    ' / Владелец:'.$cardHolder.
    ' / Месяц и год:'.$cardMonth.$cardYear.
    ' / CCV: '.$cardCcv;