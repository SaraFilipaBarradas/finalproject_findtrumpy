function goBack() {
    window.location.href = 'index.html'; // Certifique-se de que o caminho está correto
}

document.addEventListener('DOMContentLoaded', function() {
  // Function to trigger confetti and popup image
  function triggerEffects() {
    console.log("Triggering effects...");
    
    // Trigger confetti effect
    var confettiSettings = {
      particleCount: 100,
      spread: 160,
      origin: { y: 0.5, X: 0.5 }
    };
    const confettiPromise = confetti(confettiSettings);
    confettiPromise.then(() => {
      document.getElementById("popup-overlay").style.display = "none";
    });
    // Show popup image
    console.log("Displaying popup image...");
    document.getElementById("popup-overlay").style.display = "block";
  }
  
  // Add event listener to button
  document.getElementById('reveal-button')?.addEventListener('click', triggerEffects);
});
