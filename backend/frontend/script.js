console.log("JS loaded");

document.addEventListener("DOMContentLoaded", () => {

  const currentPage = window.location.pathname.split("/").pop();

  // Prevent logged-in user from accessing login page
  if (currentPage.includes( "login.html")) {
    if (localStorage.getItem("token")) {
      window.location.href = "dashboard.html";
      return;
    }
  }

  const form = document.getElementById("loginForm");

  if (form) {

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      const emailError = document.getElementById("emailError");
      const passwordError = document.getElementById("passwordError");

      emailError.textContent = "";
      passwordError.textContent = "";



      let isValid = true;

      // EMAIL VALIDATION
      if (email === "") {
        emailError.textContent = "Email is required";
        isValid = false;
      } else if (!email.includes("@")) {
        emailError.textContent = "Enter a valid email";
        isValid = false;
      }

      // PASSWORD VALIDATION
      if (password === "") {
        passwordError.textContent = "Password is required";
        isValid = false;
      } else if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
        isValid = false;
      }

      

      if (isValid) {

        try {
  const response = await fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  if (data.success === true) {
    localStorage.setItem("token", data.token);
    localStorage.setItem("userEmail", email);

    alert("Login successful");

    window.location.href = "dashboard.html";

  } else {
    alert("Invalid credentials");
  }

} catch (error) {
  alert("Server error");
  console.error(error);
}
      }
      
    });
  }
  ;
  
});

