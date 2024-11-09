// Get the theme toggle button
const themeToggleButton = document.getElementById("theme-toggle");

// Set default theme based on system preference
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme:light)").matches
) {
  document.body.classList.add("light-mode");
  themeToggleButton.textContent = "☀️"; // Show moon icon by default in dark mode
}

// Toggle theme and change button content on click
themeToggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Update button text based on current theme
  if (document.body.classList.contains("dark-mode")) {
    themeToggleButton.textContent = "🌙"; // Moon icon for dark mode
  } else {
    themeToggleButton.textContent = "☀️"; // Sun icon for light mode
  }
});

var typeData = new Typed(".role", {
  strings: [
    "Full Stack Developer",
    "Web Developer",
    "UI-UX Designer",
    "Backend Developer",
    "Coder",
  ],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1000,
});

document.getElementById("submit").addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  // fetch('/contact', {
  //     method: 'POST',
  //     headers: {
  //         'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //     body: new URLSearchParams(formData).toString(),
  // }).then(response => response.json())
  // .then(data => {
  //     console.log(data);
  // }).catch(error => {
  //     console.error('Error:', error);
  // });
  document
    .getElementById("emailForm")
    .addEventListener("submit", async function (event) {
      event.preventDefault();
      const email = document.getElementById("recipientEmail").value;
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value;
      const statusMessage = document.getElementById("statusMessage");

      try {
        const response = await fetch("/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, subject, message }),
        });

        const result = await response.json();
        if (response.ok) {
          statusMessage.textContent = result.message;
          statusMessage.style.color = "green";
        } else {
          throw new Error(result.message);
        }
      } catch (error) {
        statusMessage.textContent = `Error: ${error.message}`;
        statusMessage.style.color = "red";
      }
    });
});
