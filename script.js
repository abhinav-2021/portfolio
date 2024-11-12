const ham= document.querySelector('.humburger');
const navL= document.querySelector('.nav-links');
const links= document.querySelectorAll('.nav-links a');

//toogle menu

function togglemenu(){

    ham.classList.toggle('active');
    navL.classList.toggle('active')
}

//close menu

function closeMenu(){

    ham.classList.remove('active');
    navL.classList.remove('active');
}

document.addEventListener('click', (e) => {
    if (!navL.contains(e.target) && !ham.contains(e.target)) {
      closeMenu();
    }
  });

//event listnaer
ham.addEventListener('click', togglemenu);

  

// JavaScript for typing effect(new feature of website)
const words = ["Web Developer", "Programmer", "IITian", "Student"];
const colors = ["#3A86FF", "#8338EC", "#FF006E", "#FB5607"];
let currentColorIndex = 0;
let currentIndex = 0;
let charIndex = 0;
const typingDelay = 150; // Speed of typing each character
const erasingDelay = 100; // Speed of erasing each character
const newWordDelay = 1000; // Delay before moving to the next word

// Reference to the HTML element where the dynamic text should appear
const dynamicTextElement = document.querySelector(".dynamic-text"); // Ensure your HTML has a class "dynamic-text" for this

// Function to type each word character by character
function typeWord() {
  if (charIndex < words[currentIndex].length) {
    dynamicTextElement.textContent += words[currentIndex].charAt(charIndex);
    dynamicTextElement.style.color = colors[currentColorIndex];
    charIndex++;
    setTimeout(typeWord, typingDelay);
  } else {
    setTimeout(eraseWord, newWordDelay);
  }
}

// Function to erase each word character by character
function eraseWord() {
  if (charIndex > 0) {
    dynamicTextElement.textContent = words[currentIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseWord, erasingDelay);
  } else {
    currentIndex = (currentIndex + 1) % words.length;
    currentColorIndex = (currentColorIndex + 1) % colors.length; // Move to the next color
    setTimeout(typeWord, typingDelay);
  }
}

// Start the typing effect
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(typeWord, newWordDelay);
});

