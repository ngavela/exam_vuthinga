$(function () {
    // Open and close mobile menu
    $("#openMenu").click(function () {
        $("#menuMobile").show();
        $("#openMenu").hide()
    });
    $("#closeMenu").click(function () {
        $("#menuMobile").hide();
        $("#openMenu").show()
    });


    $('.list-category').owlCarousel({
        loop: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    $('.list-menu').owlCarousel({
        loop: true,
        dots: true,
        margin: 0,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 2
            },
            1000: {
                items: 1
            }
        }
    })

});