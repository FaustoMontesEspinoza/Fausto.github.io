$(window).scroll(function() {
    if ($("#menu").offset().top>56) {
        $("#menu").addClass("bg-trans");
    }else{
        $("#menu").removeClass("bg-trans");
    }
});