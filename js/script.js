const typedText = "To Know me More, Kindly Visit my LinkedIn";
const target = document.getElementById('typed-text');

// Typing config
let index = 0;
let typingTimeout;

// Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      restartTyping();
    }
  });
}, { threshold: 0.5 }); // Adjust threshold as per visibility %

observer.observe(document.querySelector('.counter-wrap')); // Or whichever container you want to trigger this

// Restart typing function
function restartTyping() {
  clearTimeout(typingTimeout); 
  target.textContent = "";
  index = 0;
  typeNextChar();
}

// Type next character
function typeNextChar() {
  if (index < typedText.length) {
    target.textContent += typedText.charAt(index++);
    typingTimeout = setTimeout(typeNextChar, 50); // speed
  }
}
