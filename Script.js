function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("All fields must be filled out.");
        return false;
    }
    alert("Thank you for your submission!");
    return true;
}
