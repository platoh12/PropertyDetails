// JavaScript code for Property Details screen

document.addEventListener("DOMContentLoaded", function () {
 // Slideshow functionality
 let slideIndex = 1;
 showSlides(slideIndex);

 function plusSlides(n) {
   showSlides(slideIndex += n);
 }

 function showSlides(n) {
   const slides = document.getElementsByClassName("slide");
   if (n > slides.length) {
     slideIndex = 1;
   }
   if (n < 1) {
     slideIndex = slides.length;
   }
   for (let i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";
   }
   slides[slideIndex - 1].style.display = "block";
 }

 document.querySelector(".prev").addEventListener("click", function () {
   plusSlides(-1);
 });

 document.querySelector(".next").addEventListener("click", function () {
   plusSlides(1);
 });

 // View Complete Details button functionality
 document.querySelector(".btn-view-complete-details").addEventListener("click", function () {
   // Redirect to the complete details page or display a modal with full property information
   window.location.href = "complete_details.html"; // Replace "complete_details.html" with the actual page URL
 });

 // Save Property button functionality
 document.querySelector(".btn-save-property").addEventListener("click", function () {
   // Implement the logic to save the property to the user's account or database
   // You can use AJAX or any backend API calls to handle the saving process
   alert("Property saved successfully!"); // Temporary alert message for demonstration
 });

 // Contact Information Validation
 const phoneInput = document.querySelector("input[name='phone']");
 const emailInput = document.querySelector("input[name='email']");
 const contactForm = document.querySelector("#contact-form");

 contactForm.addEventListener("submit", function (event) {
   event.preventDefault();
   if (!validatePhone(phoneInput.value)) {
     showError("Please enter a valid phone number.");
   } else if (!validateEmail(emailInput.value)) {
     showError("Please enter a valid email address.");
   } else {
     // Contact information is valid, perform further actions like submitting the form or sending data to the backend
     // You can use AJAX or any backend API calls to handle form submission or data sending
     submitContactForm(); // Replace with your custom function to handle form submission
   }
 });

 function validatePhone(phone) {
   // Validate phone number using a regular expression
   // This example validates a 10-digit phone number
   return /^\d{10}$/.test(phone);
 }

 function validateEmail(email) {
   // Validate email using a regular expression
   // This example validates a basic email format
   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
 }

 function showError(errorMessage) {
   // Display the error message to the user
   alert(errorMessage);
 }

 function submitContactForm() {
   // Perform actions to submit the contact form
   // You can use AJAX or any backend API calls to handle form submission
   // Display a success message or redirect to a confirmation page
   alert("Contact information submitted successfully!"); // Temporary alert message for demonstration
   contactForm.reset(); // Reset the form after successful submission
 }

 // Property Availability Validation
 const availabilityInput = document.querySelector("input[name='availability']");
 const availabilityMessage = document.querySelector(".availability-message");

 availabilityInput.addEventListener("blur", function () {
   if (!validateAvailability(availabilityInput.value)) {
     availabilityMessage.textContent = "Property is not available";
     availabilityMessage.style.color = "red";
   } else {
     availabilityMessage.textContent = "Property is available";
     availabilityMessage.style.color = "green";
   }
 });

 function validateAvailability(availability) {
   // Validate property availability based on specific criteria
   // Example: Check if availability matches a predefined value like "available"
   return availability.toLowerCase() === "available";
 }
});
