    // Initialize EmailJS with your public key
    emailjs.init("1nHhaMAcfeGDaQBkV"); // Replace with your actual public key

    const loadingOverlay = document.getElementById("loading-overlay");
    const form = document.getElementById("contact-form");

    
   //form animation   
    document.addEventListener("DOMContentLoaded", () => {
      const formContainer = document.querySelector(".contact-form");
      const form = document.querySelector(".fade-in-form");
    
      const checkVisibility = () => {
        const containerRect = formContainer.getBoundingClientRect();
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    
        // Check visibility conditions based on form-container
        const isContainerVisible =
          containerRect.top < viewportHeight * 0.5 && // 80% of viewport height from top
          containerRect.bottom > viewportHeight * 0.1; // 20% of viewport height from bottom
    
        // Add or remove the "visible" class
        if (isContainerVisible) {
          form.classList.add("visible"); // Fade in when 20%-80% is visible
        } else {
          form.classList.remove("visible"); // Fade out when outside this range
        }
      };
    
      // Listen to scroll events
      window.addEventListener("scroll", checkVisibility);
    
      // Trigger once on page load
      checkVisibility();
    });
    

    // Form submission event
    document.getElementById("contact-form").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the form from refreshing the page
      loadingOverlay.style.display = 'flex'; // Show the loading overlay with blur


  // Send email using EmailJS
  emailjs.sendForm("service_bm43you", "template_zxuh5ws", this)
    .then(function(response) {
      console.log('SUCCESS!', response);
      // Show success message
      const messageDiv = document.getElementById("form-message");
      messageDiv.textContent = "Your message was sent successfully!";
      messageDiv.className = "form-message success";
      messageDiv.style.display = "block";
      loadingOverlay.style.display = 'none'; // Hide the loading overlay

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
      loadingOverlay.style.display = 'none'; // Hide the loading overlay
    });

    // Hide the message after 3 seconds
    // setTimeout(function() {
    //     message.style.display = 'none';
    //   }, 3000);
    });
