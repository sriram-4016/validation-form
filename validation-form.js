document.getElementById("validation-form").addEventListener("submit", function(event) {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Username validation
    if (!/^[A-Z](?=.*\d)[A-Za-z0-9]*$/.test(username)) {
        alert("Username should start with a capital letter and contain only letters and digits.");
        event.preventDefault();
    }

    // Password validation
    if (!/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^.,;:])^. {8,}$/.test(password)) {
        alert("Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character (excluding . , ; :). Minimum length is 8 characters.");
        event.preventDefault();
    }
});
