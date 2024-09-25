let cartLS = JSON.parse(localStorage.getItem("Cart"));
document.getElementById("cartCount").innerHTML = cartLS.length;