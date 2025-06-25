document.getElementById("submitBtn").addEventListener("click", function () {
    const correctUsername = "admin";
    const correctPassword = "1234";

    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    const user = usernameInput.value;
    const pass = passwordInput.value;

    if (user === correctUsername && pass === correctPassword) {
        window.location.href = "test.html";
    } else {
        alert("Incorrect username or password");

        // Clear both fields
        usernameInput.value = "";
        passwordInput.value = "";
    }
});