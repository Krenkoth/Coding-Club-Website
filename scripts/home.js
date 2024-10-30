window.onload = function() {
    const emailSubmit = document.querySelector(".emailSubmit");
    emailSubmit.addEventListener("click", getEmail);
}






function getEmail() {
    const field = document.querySelector(".field");
    const emailDisplay = document.querySelector("#email")
    const userEmail = String(field.value);
    if (isValidEmail(userEmail)) {
        emailDisplay.textContent = `Email: ${userEmail}`;
        field.value = "";
    }
    
}

function isValidEmail(email) {
    return email.includes('@');
  }

