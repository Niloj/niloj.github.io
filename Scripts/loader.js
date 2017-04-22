$(window).on('load', function () {
    $(".pre-loader").fadeOut("slow");
});

$(window).on("load resize", function () {
    $(".fill-screen").css("height", window.innerHeight);
});