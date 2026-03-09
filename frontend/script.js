// const emailInput = document.getElementById("email");
// const passwordInput = document.getElementById("password");
// const form = document.getElementById("loginForm");

const { json } = require("body-parser");
const { application, response } = require("express");
const { error } = require("node:console");

// form.addEventListener("submit",function(event){
//     event.preventDefault();

//     const email= emailInput("email").value.trim();
//     const password= passwordInput("password").value.trim();

//     const emailError = document.getElementById("emailError");
//     const passwordError = document.getElementById("passwordError");

//     emailError.textContent="";
//     passwordError.textContent="";
     
//     let isValid = true;

//     if (email=== ""){
//         textContent="Email is required";
//         isValid= false;
//     }
//     else if(!email.include('@')){
//         textCo
//     }

//     console.log("Email:", email);
//     console.log("Password:", password);

// });
document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname;

  

  // Prevent logged-in user from accessing login page
  if (currentPage.includes("login.html")) {
    if (localStorage.getItem("isLoggedIn")) {
      window.location.href = "dashboard.html";
      return;
    }
  }

const form = document.getElementById("loginForm");
 if (window.location.pathname.includes("dashboard.html")) {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
      window.location.href = "login.html";
    }
  }

form.addEventListener("submit",async e=>{
    e.preventDefault();//stop page reload
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    try{
        response = await fetch("http://localhost:3000/login",{
            method :"POST",
            header:{
                "Content_Type":"application/json",
            },
            body : JSON.stringify({email,password}),
        }
        );
        const data = await response.json();
        if(data.sucess == true){
            // save login state
            localStorage.setItem("isloggedIn","true");
            localStorage.setItem("useremail",email);
            alert("Login Successful");
            window.location.href="dashboard.html";
        }
        else{
            alert("Invalid credential");
        }
        
    }
    catch (error){
        alert("Sever error");
        console.error(error);

        }
});
}
);