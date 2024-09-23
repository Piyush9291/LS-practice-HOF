import navbar from "../Components/navbar.js";
let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar();


let signupForm = JSON.parse(localStorage.getItem("userdata")) || [];

let form = document.querySelector("form")
form.addEventListener("submit" , (event) => {
    event.preventDefault()

    let obj = {
        email : form.email.value,
        password : form.password.value
    }
    
   
    signupForm.forEach((ele) => {
        
        if(ele.email != obj.email && ele.password != obj.password){
            alert("user not found")
        }
         
        if(ele.email != obj.email && ele.password == obj.password){
            alert("please check your email")
        }

        if(ele.email == obj.email && ele.password != obj.password){
            alert("wrong password")
        }

        if(ele.email == obj.email && ele.password == obj.password){
            alert("Login sucssfully")
            localStorage.setItem("Login", JSON.stringify(ele));
            window.location.href = "index.html"
        }
    });

});

