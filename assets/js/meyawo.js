
// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
    
    $("#exampleText").typer({
        strings: [
            "I'm a Passionate PHP Developer",
            "I'm a Dedicated Web Developer",
            "I'm a Laravel Enthusiast",
            "I'm a Creative Problem Solver",
            "I'm a Future Full-Stack Developer",
        ],
        
        typeSpeed: 200,
        backspaceSpeed: 20,
        backspaceDelay: 800,
        repeatDelay: 1000,
        repeat: true,
        autoStart: true,
        startDelay: 100,
        opacity: 100,
    });


    // navbar toggle
    $('#nav-toggle').click(function(){
        $(this).toggleClass('is-active')
        $('ul.nav').toggleClass('show');
    });
    
    if ($('.abs').length == 1) {
        var typed_strings = $('.abs').text();
        var typed = new Typed('.abs', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }



});
