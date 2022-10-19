$(document).ready(function () {
    
    $(window).scroll(function() {
        if ($("#menu").offset().top>56) {
            $("#menu").addClass("bg-trans");
        }else{
            $("#menu").removeClass("bg-trans");
        }
    });
    ScrollReveal().reveal('.headline',{ delay: 500 });

    $('#tra1').click(function (e) {
        e.preventDefault();
        $('.modal-dialog').load("./modal/portafolio.html", function () {
            $('#exampleModal').modal('show')
            $('.carousel').carousel({
                interval: 4000
              })
        });
       
    });

    $('#tra2').click(function (e) {
        e.preventDefault();
        $('.modal-dialog').load("./modal/todoList.html", function () {
            $('#exampleModal').modal('show')
            $('.carousel').carousel({
                interval: 4000
              })
        });
       
    });

    $('#tra3').click(function (e) {
        e.preventDefault();
        $('.modal-dialog').load("./modal/controlUsuario.html", function () {
            $('#exampleModal').modal('show')
            $('.carousel').carousel({
                interval: 4000
              })
        });
       
    });
});
