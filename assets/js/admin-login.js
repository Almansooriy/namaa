/*Get HTML Elements*/
const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");
const loginForm = document.getElementById("loginForm");
/* Hide Error While Typing */
emailInput.addEventListener("input", function(){
    /* Remove error message */
    emailError.textContent = "";
});
/* Form Validation */
loginForm.addEventListener("submit", function(e){
    /* Get email value */
    const email = emailInput.value;
    /* Email validation pattern */
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    /* Clear old error */
    emailError.textContent = "";
    /* Check if email is invalid */
    if(!emailPattern.test(email)){
        /* Prevent form submission */
        e.preventDefault();
        /* Show error message */
        emailError.textContent ="Please enter a valid email address";
    }
});