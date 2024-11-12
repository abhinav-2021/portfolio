    // Initialize EmailJS with your public key
    emailjs.init("1nHhaMAcfeGDaQBkV"); // Replace with your actual public key
  
    // Form submission event
    document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from refreshing the page

  // Send email using EmailJS
  emailjs.sendForm("service_bm43you", "template_zxuh5ws", this)
    .then(function(response) {
      console.log('SUCCESS!', response);
      // Show success message
      const messageDiv = document.getElementById("form-message");
      messageDiv.textContent = "Your message was sent successfully!";
      messageDiv.className = "form-message success";
      messageDiv.style.display = "block";

      // Hide the message after 3 seconds
      // setTimeout(function() {
      //   message.style.display = 'none';
      // }, 3000);


      // Reset the form after submission
      document.getElementById("contact-form").reset();
    }, function(error) {
      console.log('FAILED...', error);
      // Show error message
      const messageDiv = document.getElementById("form-message");
      messageDiv.textContent = "There was an error sending your message. Please try again.";
      messageDiv.className = "form-message error";
      messageDiv.style.display = "block";
    });

    // Hide the message after 3 seconds
    // setTimeout(function() {
    //     message.style.display = 'none';
    //   }, 3000);
    });