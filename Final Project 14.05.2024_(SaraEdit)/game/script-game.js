console.log("Hello World");

document.addEventListener("DOMContentLoaded", function() {
    const overlayTrump2 = document.getElementById("overlay-trumpy2");
    const audioSavanna = document.getElementById("trump-sound-savanna");

    console.log("Level 2 JavaScript loaded");
    // When Player Clicks on Savanna Trumpy -> Play audio
    overlayTrump2.addEventListener('click', function() {
        console.log("Level 2 Event Listener active");
        audioSavanna.play();

        //Wait for audio track to finish, then send to success page
        audioSavanna.addEventListener("ended", function() {
        window.location.href = "success.html";
        });
    });
});


    const overlayTrump = document.getElementById("overlay-trumpy");
    const audioSea = document.getElementById("trump-sound-sea");


    // When Player Clicks on Sea Trumpy -> Play audio
    overlayTrump.addEventListener('click', function() {
        console.log ("Hello Trumpy!");
        audioSea.play();

        //Wait for audio track to finish, then send to success page
        audioSea.addEventListener("ended", function() {
        window.location.href = "interim.html";
        });
    });

