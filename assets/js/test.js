$(document).ready(function () {
    // Cache selectors
    var $error = $("#error");
    var $steps = $(".step");
    var $errorCondition = $("#errorCondition");

    // Hide elements initially
    $error.hide();
    $steps.slice(1).hide();
    $errorCondition.hide();
    $("#thankyou").hide();

    // Click event for card selection
    $(".card").click(function () {
        $(this).toggleClass("active").css("background-color", $(this).hasClass("active") ? "cornflowerblue" : "white");
        $(this).parent().siblings().children(".card").removeClass("active").css("background-color", "white");
    });

    // Back button functionality
    $(".back").click(function () {
        var $currentStep = $(this).closest(".step");
        $currentStep.fadeOut(500);
        $currentStep.prev().fadeIn(1000);
        var $progressBar = $(".progress-bar");
        var $progress = $(".progress").width();
        var currentWidth = $progressBar.width();
        var decrease = parseInt(0.25 * $progress);
        var barWidth = currentWidth - decrease;
        $progressBar.width(barWidth);
    });

    // Next button functionality
    $(".next , #submit").click(function () {
        var $currentStep = $(this).closest(".step");
        var $nextStep = $currentStep.next();
        debugger;
        if ($(this).parent().siblings().find(".card").hasClass("active") || $(":checkbox:checked").length > 0) {
            $error.hide();
            $currentStep.fadeOut(500);
            $nextStep.fadeIn(1000);
            var $progressBar = $(".progress-bar");
            var $progress = $(".progress").width();
            var currentWidth = $progressBar.width();
            var increase = parseInt(0.25 * $progress);
            var newWidth = currentWidth + increase;
            $progressBar.width(newWidth);
        }
        else if ($(!":checkbox:checked").length > 0) {
            $errorCondition.fadeIn();
        }
        else {
            $error.show();
        }
    });

    // Reload functionality
    $("#wizardButton").click(function () {
        location.reload(true);
    });
});
