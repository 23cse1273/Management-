document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("signup");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const nameError = document.getElementById("nameError");

    emailError.textContent = "";
    passwordError.textContent = "";
    nameError.textContent = "";

    let isValid = true;

    // Name validation
    if (name === "") {
      nameError.textContent = "Name is required";
      isValid = false;
    }

    // Email validation
    if (email === "") {
      emailError.textContent = "Email is required";
      isValid = false;
    } else if (!email.includes("@")) {
      emailError.textContent = "Enter valid email";
      isValid = false;
    }

    // Password validation
    if (password === "") {
      passwordError.textContent = "Password is required";
      isValid = false;
    } else if (password.length < 6) {
      passwordError.textContent = "Password must be at least 6 characters";
      isValid = false;
    }

   if (isValid) {
      try {
        const response = await fetch("http://localhost:3000/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ name, email, password })
        });

        const data = await response.json();

        if (data.success) {
          alert("Signup successful!");
          window.location.href = "login.html";
        } else {
          alert(data.message || "Signup failed");
        }

      } catch (error) {
        console.error(error);
        alert("Server error");
      }
    }
  });

});