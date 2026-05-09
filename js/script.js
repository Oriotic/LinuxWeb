// Selects the "Start Learning" button from the hero section on index.html
const button = document.querySelector(".hero-btn");
if (button) {
  // Displays welcome popup on click
  button.addEventListener("click", () => {
    alert("Welcome to LinuxWeb!");
  });
}

// ========== commands.html ==========
// Receives a description string and injects it into the info box
function showCommandInfo(text) {
  // Finds the info box paragraph by its ID and updates its content
  document.getElementById("command-info").innerHTML = text;
}

// ========== contact.html ==========
// Selects the contact form element by its ID
const form = document.getElementById("contactForm");
if (form) {
  // Listens for the form submit event
  form.addEventListener("submit", function(event) {
    // Prevents the default browser behavior of refreshing/redirecting the page on submit
    event.preventDefault();
    // Displays a success message popup to the user after form submission
    alert("Message sent successfully!");
  });
}