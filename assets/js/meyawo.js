
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
        "I'm a Creative Designer",
        "I'm a Web Designer",
        "I'm a Freelancer",
        "I'm an Artist",
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
