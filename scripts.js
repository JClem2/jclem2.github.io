// Function to toggle dark mode on portfolio
function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

// Function to toggle mobile menu
  function toggleMenu() {
    const menu = document.querySelector('.nav-links');
    menu.classList.toggle('active');
}

// Function to toggle mobile project boxes
function toggleDetails(button) {
    const details = button.previousElementSibling; // Select the details section
    if (details.style.display === "block") {
        details.style.display = "none"; // Collapse
        button.textContent = "Read More";
    } else {
        details.style.display = "block"; // Expand
        button.textContent = "Read Less";
    }
}