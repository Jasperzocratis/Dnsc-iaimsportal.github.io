document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Retrieve the values from the input fields
  var emailOrPhone = document.getElementById("emailOrPhone").value;
  var password = document.getElementById("password").value;

  // Validate the email/phone and password inputs
  if (validateEmailOrPhone(emailOrPhone) && validatePassword(password)) {
    // Both inputs are valid
    console.log("Login successful");
    // You can perform additional actions here, such as sending the form data to a server
    // or navigating to a different page
  } else {
    // Invalid inputs, display an error message or perform other error handling
    console.log("Invalid email/phone or password");
  }

  // Reset the form
  document.getElementById("loginForm").reset();
});

// Function to validate the email or phone format
function validateEmailOrPhone(emailOrPhone) {
  // You can implement your own validation logic here
  // This is a basic example to check if the input is not empty
  return emailOrPhone.trim() !== "";
}

// Function to validate the password format
function validatePassword(password) {
  // You can implement your own validation logic here
  // This is a basic example to check if the input is not empty
  return password.trim() !== "";
}
