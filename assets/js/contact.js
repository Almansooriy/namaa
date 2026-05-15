// Select contact form
document.querySelector(".contact-form")

// Listen for form submit
.addEventListener("submit", function(e){
  // Prevent page refresh
  e.preventDefault();
  // Get success message element
  const msg = document.getElementById("successMessage");
  // Show success message
  msg.style.display = "block";
  // Reset form fields
  this.reset();
  // Focus on success message
  msg.focus();
  // Hide success message after 5 seconds
  setTimeout(() => {msg.style.display = "none";}, 5000);
});