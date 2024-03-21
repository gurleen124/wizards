$(document).ready(function () {
    $("#error").hide();
    $("#stepTwo").hide();
    $("#stepThree").hide();
    $("#stepFour").hide();
    $("#thankyou").hide();
    $("#errorCondition").hide();

    //active class in cards
    $(".card").click(function () {
        $(this).toggleClass("active");
        $(this).parent(".col-lg-3").siblings().children(".card").removeClass("active").css({ "background-color": "white" });
        if ($(".card").hasClass("active")) {
            $(this).css({ "background-color": "cornflowerblue" });
        } else {
            $(this).css({ "background-color": "white" })
        }
    });

    //back button
    $("#backTwo").click(function () {
        $("#stepTwo").fadeOut();
        $("#stepOne").show(1000);
        $(".progress-bar").css("width", "0%");
        $("li.level-one").removeClass("text-primary");
    });
    $("#backThree").click(function () {
        $("#stepThree").fadeOut();
        $("#stepTwo").show(1000);
        $(".progress-bar").css("width", "25%");
        $("li.level-two").removeClass("text-primary");
    });
    $("#backFour").click(function () {
        $("#stepFour").fadeOut();
        $("#stepThree").show(1000);
        $(".progress-bar").css("width", "50%");
        $("li.level-three").removeClass("text-primary");
    });

    //step one next button functionality
    $("#nextOne").click(function () {
        if ($(".level-one").hasClass("active")) {
            $("#error").hide();
            $("#stepTwo").fadeIn(1000);
            $("#stepOne").hide();
            $(".progress-bar").css("width", "25%");
            $("li.level-one").addClass("text-primary")
        }
        else {
            $("#error").show();
        }
    });

    //step two next button functionality
    $("#nextTwo").click(function () {
        if ($(".level-two").hasClass("active")) {
            $("#error").hide();
            $("#stepThree").fadeIn(1000);
            $("#stepTwo").hide();
            $(".progress-bar").css("width", "50%");
            $("li.level-two").addClass("text-primary")
        }
        else {
            $("#error").show();
        }
    });

    //step three next button functionality
    $("#nextThree").click(function () {
        if ($(".level-three").hasClass("active")) {
            $("#error").hide();
            $("#stepFour").fadeIn(1000);
            $("#stepThree").hide();
            $(".progress-bar").css("width", "75%");
            $("li.level-three").addClass("text-primary")
        }
        else {
            $("#error").show();
        }
    });

    //step four submit button functionality
    $("#submit").click(function () {
        if ($(":checkbox:checked").length > 0) {
            $("#thankyou").fadeIn(1000);
            $("#stepFour").hide();
            $(".progress-bar").css("width", "100%");
            $("li.level-four").addClass("text-primary")
        }
        else {
            $("#errorCondition").fadeIn();
        }
    });

    //back to wizard form button functionality
    $("#wizardButton").click(function () {
        location.reload(true);
    })
});