form.addEventListener("submit",function(event){
    event.preventDefault();

    const Name = nameInput("name").value.trim();

   const email= emailInput("email").value.trim();
    const password= passwordInput("password").value.trim();

    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const nameError = document.getElementById("nameError");

    emailError.textContent="";
    passwordError.textContent="";
     
    let isValid = true;

    if (email=== ""){
       textContent="Email is required";
        isValid= false;
    }
    else if(!email.include('@')){
        textCo
    }
