window.onload = function() {
    $(".container").fadeIn();
    /* Theme */
    let theme = "light";
    $("#settings_theme").on("click", () => {
        theme == "dark" ? light() : dark();
        function dark() {
            $("#settings_theme").html(`<i class="fas fa-moon"></i>`);
            $(":root").css("--background", "var(--dark-background)");
            $(":root").css("--text", "var(--dark-text)");
            $(":root").css("--message-div", "var(--dark-message-div)");
            $(":root").css("--message-time", "var(--dark-message-time)");
            theme = "dark";
        };
        function light() {
            $("#settings_theme").html(`<i class="fas fa-sun"></i>`);
            $(":root").css("--background", "var(--light-background)");
            $(":root").css("--text", "var(--light-text)");
            $(":root").css("--message-div", "var(--light-message-div)");
            $(":root").css("--message-time", "var(--light-message-time)");
            theme = "light";
        };
    });
    /* Text */
    $("#settings_text").keyup(function() {
        $("#message").html($("#settings_text").val() || "why you have control over my account :(");
    });
    /* Time */
    let date = new Date();
    var hrs = date.getHours();
    var min = date.getMinutes();
    $("#time").html(`${hrs < 10 ? "0" + hrs : hrs}:${min < 10 ? "0" + min : min}`)
}