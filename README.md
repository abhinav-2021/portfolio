Welcome to the personal portfolio website repository of Abhinav Kourav. This website showcases my projects, skills, and contact details. Feel free to explore, and if you'd like to reach out, you can contact me directly through the contact form.

Table of Contents
About
Features
Technologies Used
How to Run Locally
Contact Form
License
About
This portfolio is built using HTML, CSS, and JavaScript, and is designed to reflect my skills, achievements, and areas of expertise. It includes sections like:

Hero Section showcasing a brief introduction.
About Me to highlight my experience and background.
Projects where my technical skills and personal projects are displayed.
Contact Section where visitors can get in touch with me directly through a contact form.
Features
Responsive Design: The website adapts to different screen sizes, ensuring a great experience across devices.
Contact Form: Allows users to send messages directly from the website.
Social Media Links: Easy access to my social media and professional profiles.
Smooth Animations: CSS animations to enhance the user experience.
Technologies Used
HTML5 for the structure and content of the page.
CSS3 for styling and creating a modern, clean layout.
JavaScript for interactivity, especially for the form submission and menu toggling.
EmailJS for handling contact form submissions directly to my email.
How to Run Locally
To run this project on your local machine:

Clone the repository:

bash
Copy code
git clone https://github.com/abhinav-2021/portfolio.git
Navigate to the project directory:

bash
Copy code
cd portfolio
Open the index.html file in your browser:

bash
Copy code
open index.html
Alternatively, you can open it using a local server if you have one set up, or use an IDE like Visual Studio Code and open it using the "Go Live" feature in vs code.

Contact Form
The contact form on this portfolio uses EmailJS to send messages directly to my email. To set this up for your own use:

Create an account on EmailJS.
Set up a service and template as per the instructions on EmailJS.
Replace the service_id, template_id, and user_id with your details in the app.js file.
js
Copy code
emailjs.sendForm('service_id', 'template_id', this, 'user_id');
License
This project is licensed under the MIT License.
