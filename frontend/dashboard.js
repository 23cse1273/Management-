document.addEventListener("DOMContentLoaded", () => {

  const token = localStorage.getItem("token");

  // If no token → go to login
  if (!token) {
    window.location.href = "login.html";
    return;
  }

  // Fetch protected data
  fetch("http://127.0.0.1:5500/frontend/login.html", {
    method: "GET",
    headers: {
      "Authorization": "Bearer " + token
    }
  })
  .then(res => res.json())
  .then(data => {

    console.log("Dashboard Data:", data);

    const email = localStorage.getItem("userEmail");

    if (email) {
      const username = email.split("@")[0];

      document.getElementById("email").textContent =
        "Welcome to Dashboard: " + username;
    }

  })
  .catch(err => {
    console.error("Error:", err);
  });


  const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {

    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");

    window.location.href = "login.html";
  });
}
});