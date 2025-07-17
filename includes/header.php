<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="css/media.css">
    <link rel="stylesheet" href="css/animations.min.css">
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css"/>
</head>
<body>

    <header id="header">
        <div class="header_holder">
            <div class="wrapper">
            <div class="header_con">
                <figure class="main_logo logo">
                    <a href="index.php"></a>
                    <?php include('includes/logo.php')?>
                </figure>
                <nav class="nav">
                    <div class="nav-menu-overlay" id="nav-menu-overlay"></div>
                    <button class="hamburger" id="hamburger"></button>
                    <ul class="nav-menu" id="nav-menu">
                        <li><a href="index.php">Home</a></li>
                        <li><a href="#about">About Me</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <div class="cv_down">
                    <a href="pdf/Ken-Joseph-Erispe-Resume.pdf" target="_blank" class="btn--style1">Download CV</a>
                </div>
            </div>
        </div>
        </div>
    </header>