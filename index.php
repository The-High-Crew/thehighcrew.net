<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>TheHighCrew</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" type="image/png" href="misc/logo/Logo.png" />

    <!-- Internal Stylesheets -->
    <link
            class="theme"
            rel="stylesheet"
            type="text/css"
            href="css/themedark.css"
    />
    <link rel="stylesheet" type="text/css" href="css/main.css" />
    <link rel="stylesheet" type="text/css" href="css/nav.css" />
    <link rel="stylesheet" type="text/css" href="css/logo.css" />
    <link rel="stylesheet" type="text/css" href="css/toggle.css" />

    <!-- External Stylesheets -->
    <link rel="stylesheet" href="css/sb-custom.css" />

    <!-- External Scripts -->
    <script
            type="text/javascript"
            src="https://cdn.jsdelivr.net/npm/simplebar@3.1.3/dist/simplebar.js"
    ></script>
    <script type="text/javascript" src="external/anime/anime.min.js"></script>

    <!-- Internal Scripts -->
    <script type="text/javascript" defer src="js/index.js"></script>
</head>

<body data-simplebar>
<main>
    <header id="header">
        <div class="settings">
            <div class="settingsContent">
                <p>Dark Mode</p>
                <input
                        class="tgl tgl-skewed"
                        id="cbDarkMode"
                        type="checkbox"
                        checked
                />
                <label
                        class="tgl-btn"
                        data-tg-off="OFF"
                        data-tg-on="ON"
                        for="cbDarkMode"
                ></label>
            </div>
            <div class="settingsHandle"></div>
        </div>
        <div class="loading">
            <div class="loadingLogo">
                <div class="logoOuter">
                    <div class="logoOuterCircle">
                        <div class="logoInnerCutout"></div>
                    </div>
                    <div class="logoInner">
                        <div class="logoInnerCircle">
                            <div class="logoInnerMouth"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="loadingText">
            <h1>The High Crew</h1>
            <h2>Twitch support team</h2>
        </div>
        <span class="scrollInfo">Scroll for more Info!</span>
    </header>
    <nav>
        <div class="homeBar" style="transform: translateX(-100px)">
            <a href="#header" style="width: 100px">Home</a>
        </div>
        <div class="linkBox">
            <a href="#test1" class="test1" transform="5"
            >test 1</a
            >
            <a href="#test2" class="test2" transform="17"
            >test 2</a
            >
            <a href="#test3" class="test3" transform="29">Github</a>
        </div>
        <a
                class="currentSection"
                visibleElement="main"
                style="transform: translateY(30%);"
        >
            <h1 class="main"><img src="misc/logo/Logo.png" alt="" />TheHighCrew</h1>
            <h1 class="secondary">sion</h1>
            <h1 class="tertiary">discord</h1>
        </a>
        <div class="linkBox">
            <a href="#test4" class="test4" transform="63.5"
            >Development Tools</a
            >
            <a href="#test5" class="test5" transform="77"
            >Current Projects</a
            >
            <a href="#test6" class="test6" transform="88">Idea</a>
        </div>
    </nav>
    <section id="test1">
        <content>
            <h1>what do we do when the milk man comes</h1>
        </content>
    </section>
    <section id="test2">
        <content>
        <h1>we yell at death0328 to come collect</h1>
        </content>
    </section>
    <section id="test3">
        <content>
            <h1>and if he doesn't come we call for Jeremy</h1>
        </content>
    </section>
    <section id="test4">
        <content>
            <h1>if jeremy doesn't come then what</h1>
        </content>
    </section>
    <section id="test5">
        <content>
            <h1>we start running and screaming</h1>
        </content>
    </section>
    <section id="test6">
        <content>
            <h1>until the website is done.</h1>
        </content>
    </section>
</main>
</body>
</html>

