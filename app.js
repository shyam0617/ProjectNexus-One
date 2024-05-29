document.getElementById("formpassword").addEventListener("submit", function(event) {
 // Prevent form submission
    validatePassword();
});

function validatePassword() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmpassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
    } else {
        alert("Passwords match! You may proceed.");
        // If passwords match, you can proceed with form submission or other actions
        // For example: document.getElementById("passwordForm").submit();
    }
}
  