function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Function to create and apply the moving gradient background
function setMovingGradientBackground() {
  // Create a style element
  const style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = `
      @keyframes gradientAnimation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
      }
      
      body {
          background: linear-gradient(270deg, #7f00ff, #1a2a6c);
          background-size: 400% 400%;
          animation: gradientAnimation 15s ease infinite;
          height: 100vh;
          margin: 0;
      }
  `;

  // Append the style element to the head
  document.head.appendChild(style);
}

// Call the function to set the moving gradient background
setMovingGradientBackground();

// script.js

// Ensure that the body's overflow is set to auto or visible
document.body.style.overflow = 'auto';

// Remove any event listeners that might be preventing scrolling
document.removeEventListener('touchmove', preventDefault, false);
document.removeEventListener('wheel', preventDefault, false);

function preventDefault(e) {
  e.preventDefault();
}


