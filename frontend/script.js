// const emailInput = document.getElementById("email");
// const passwordInput = document.getElementById("password");
// const form = document.getElementById("loginForm");

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
const form = document.getElementById("loginForm");

form.addEventListener("submit",async e=>{
    e.preventDefault();//stop page reload
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    try{
        response = await fetch()
    }
})
)