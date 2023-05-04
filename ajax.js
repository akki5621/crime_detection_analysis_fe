// import { ApiUrl, port } from "./config.js";

//REQUEST AND RESPONSE



$(document).ready(function () {
    $("#submit").click(function () {
        var days = $("#days").val();
        console.log("days==== ", days)
        const button = document.getElementById("submit");

        button.disabled = true; // Disable the button
        button.innerHTML = "Loading... <span class='spinner'></span>"; // Show the loading spinner

        $.ajax({
            //   url: `${ApiUrl}:${port}/crime-prediction`,
            url: "http://127.0.0.1:5000/crime-prediction",
            method: "POST",
            data: { days: days },
            success: function (data) {
                //$("#heading").text(" Vulnerabilities");
                console.log(data.days);
                // $("#result").val(data.days);

                button.disabled = false; // Re-enable the button
                button.innerHTML = "Check!"; // Reset the button text
            },
            error: function (error) {
                button.disabled = false; // Re-enable the button
                button.innerHTML = "Click me"; // Reset the button text
                console.log(error);
            },
        });
    });
})