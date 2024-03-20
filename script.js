function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<p><strong>Name:</strong> " + name + "</p>" +
                          "<p><strong>Email:</strong> " + email + "</p>" +
                          "<p><strong>Message:</strong> " + message + "</p>";
}
