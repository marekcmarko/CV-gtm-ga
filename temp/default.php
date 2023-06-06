<?
header('Content-Type: text/html; charset=utf-8');
$host = $_SERVER['HTTP_HOST'];
setlocale(LC_TIME, "sk_SK.utf8");
date_default_timezone_set('Europe/Bratislava');
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <title>Vitajte na <? print $host; ?>!</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link href="https://cdn.rawgit.com/hostinger/banners/master/hostinger_welcome/css/site.css" media="screen" rel="stylesheet" type="text/css" />
</head>
<body>
<div id="main">
    <div id="content">
        <div class="header">
            <a id="logo" href="http://www.hostinger.sk/"><img src="http://www.hostinger.sk/images/logo-sk.png" alt="Web hosting" /></a>
        </div>
        <div class="content">
            <h1>Váš účet bol úspešne vytvorený!</h1>
            <p>Webstránka <b><? print $host; ?></b> bola úspešne nainštalovaná na servery! Prosím odstráňte súbor <b>default.php</b> z priečinka public_html a potom uploadnite svoju webstránku použitím FTP alebo Správcu súborov.</p>
            <div class="clear"></div>
        </div>
        <div class="footer"></div>
        <div class="clear"></div>
    </div>
    <div id="footer">
        <div class="links">
            <a href="http://www.hostinger.sk/web-hosting" target="_blank">Web Hosting</a>
            <span class="pipe">|</span>
            <a href="http://www.hostinger.sk/free-hosting" target="_blank">Hosting Zdarma</a>
            <span class="pipe">|</span>
            <a href="http://www.hostinger.sk/forum" target="_blank">Podpora</a>
            <span class="pipe">|</span>
            <a href="http://cpanel.hostinger.sk/" target="_blank">Prihlásenie</a>
        </div>
        <div class="copyright">Hostinger &copy; <? print date('Y'); ?>. All rights reserved</div>
        <div class="social-icons">
            <a href="http://www.facebook.com/Hostinger.sk"><img src="https://raw.githubusercontent.com/hostinger/banners/master/hostinger_welcome/images/fb.gif" /></a>
            <a href="https://twitter.com/HostingerCOM"><img src="https://raw.githubusercontent.com/hostinger/banners/master/hostinger_welcome/images/twitter.gif" /></a>
        </div>
    </div>
</div>
</body>
</html>