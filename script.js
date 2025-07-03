document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  form.addEventListener("submit", (event) => {
    // Example: Check if message is empty before submitting
    if (messageInput.value.trim() === "") {
      alert("Please enter a message before submitting.");
      messageInput.focus();
      event.preventDefault(); // Stop form submission
    } else {
      alert(`Thank you, ${nameInput.value}, your message has been submitted!`);
    }
  });

  // Optional: Real-time email validation feedback
  emailInput.addEventListener("input", () => {
    if (!emailInput.validity.valid) {
      emailInput.style.borderColor = "red";
    } else {
      emailInput.style.borderColor = "green";
    }
  });
});
