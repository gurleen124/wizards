$(document).ready(function () {
    $("#error").hide();
    $("#stepTwo").hide();
    $("#stepThree").hide();
    $("#stepFour").hide();
    $("#thankyou").hide();

    //next back progress-bar
    $("#backTwo").click(function () {
        $(".progress-bar").css("width", "0%");
    });
    $("#backThree").click(function () {
        $(".progress-bar").css("width", "25%");
    });
    $("#backFour").click(function () {
        $(".progress-bar").css("width", "50%");
    });

    //active class in cards
    $(".card").click(function () {
        $(this).toggleClass("active");
        if ($(this).hasClass("active")) {
            $(this).css({ "background-color": "cornflowerblue" });
        } else {
            $(this).css({ "background-color": "white" });
        }
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

    $("#nextOne").click(function () {
        if ($(".level-one").hasClass("active")) {
            $("#error").hide();
            $("#stepTwo").fadeIn(1000);
            $("#stepOne").hide();
            $(".progress-bar").css("width", "25%");
        }
        else {
            $("#error").show();
        }
    });
    $("#nextTwo").click(function () {
        if ($(".level-two").hasClass("active")) {
            $("#error").hide();
            $("#stepThree").fadeIn(1000);
            $("#stepTwo").hide();
            $(".progress-bar").css("width", "50%");
        }
        else {
            $("#error").show();
        }
    });
    $("#nextThree").click(function () {
        if ($(".level-three").hasClass("active")) {
            $("#error").hide();
            $("#stepFour").fadeIn(1000);
            $("#stepThree").hide();
            $(".progress-bar").css("width", "75%");
        }
        else {
            $("#error").show();
        }
    });
    $("#submit").click(function (){
        $("#thankyou").fadeIn(1000);
        $("#stepFour").hide();
        $(".progress-bar").css("width", "100%");
    });
    $("#wizardButton").click(function (){
        location.reload(true);
    })
});