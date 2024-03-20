$(document).ready(function () {
    $("#error").hide();
    $("#stepTwo").hide();
    $("#stepThree").hide();
    $("#stepFour").hide();

    //next back progress-bar
    $("#nextOne").click(function () {
        $(".progress-bar").css("width", "25%");
    });
    $("#backTwo").click(function () {
        $(".progress-bar").css("width", "0%");
    });
    $("#nextTwo").click(function () {
        $(".progress-bar").css("width", "50%");
    });
    $("#backThree").click(function () {
        $(".progress-bar").css("width", "25%");
    });
    $("#nextThree").click(function () {
        $(".progress-bar").css("width", "75%");
    });
    $("#backFour").click(function () {
        $(".progress-bar").css("width", "50%");
    });

    $(".card").click(function () {
        $(this).toggleClass("active");
        if ($(this).hasClass("active")) {
            $(this).css({ "background-color": "cornflowerblue" });
        } else {
            $(this).css({ "background-color": "white" });
        }
    });
    //next button
    $("#nextOne").click(function () {
        $("#stepTwo").fadeIn(1000);
        $("#stepOne").hide();
    });
    $("#nextTwo").click(function () {
        $("#stepThree").fadeIn(1000);
        $("#stepTwo").hide();
    });
    $("#nextThree").click(function () {
        $("#stepFour").fadeIn(1000);
        $("#stepThree").hide();
    });
    //back button
    $("#backTwo").click(function () {
        $("#stepTwo").fadeOut();
        $("#stepOne").show(1000);
    });
    $("#backThree").click(function () {
        $("#stepThree").fadeOut();
        $("#stepTwo").show(1000);
    });
    $("#backFour").click(function () {
        $("#stepFour").fadeOut();
        $("#stepThree").show(1000);
    });
});