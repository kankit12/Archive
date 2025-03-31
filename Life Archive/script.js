document.addEventListener("DOMContentLoaded", function() {
    function checkPassword() {
        const passwordInput = document.getElementById("password").value;
        const correctPassword = "darkside"; // Change this to your secret passphrase
        const errorMessage = document.getElementById("error-message");
        
        if (passwordInput.toLowerCase() === correctPassword) {
            document.getElementById("entry-screen").classList.add("hidden");
            document.getElementById("main-content").classList.remove("hidden");
        } else {
            errorMessage.classList.remove("hidden");
        }
    }
    
    window.checkPassword = checkPassword;
});