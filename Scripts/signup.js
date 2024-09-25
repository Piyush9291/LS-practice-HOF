import navbar from "../Components/navbar.js";
let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar();


let signupForm = JSON.parse(localStorage.getItem("userdata")) || [];

let form = document.querySelector("form")

form.addEventListener("submit", (event) =>{
    event.preventDefault();

    let obj = {
        name : form.firstname.value,
        lastname : form.lastname.value,
        email : form.email.value,
        password : form.password.value
    }
    // console.log(obj)
    signupForm.push(obj);
    window.location.href = "login.html"
    localStorage.setItem("userdata" , JSON.stringify(signupForm));
})