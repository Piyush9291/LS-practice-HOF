import navbar from "../Components/navbar.js";
let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar();

let cartLS = JSON.parse(localStorage.getItem("Cart"));
let productPrice = JSON.parse(localStorage.getItem("Price"));
 document.getElementById("price").innerHTML = productPrice;

let products = document.getElementById("cartProducts")
function renderCartData(data) {
    products.innerHTML = null;
    data.forEach((ele, index) => {
        let items = document.createElement("div")
        items.className = "items"
        let image = document.createElement("img")
        image.src = ele.img;
        // image.onclick = () =>{
        //   window.location.href = "productPage.html"
        //   localStorage.setItem("Product", JSON.stringify(ele));
        // }
        let brand = document.createElement("p")
        brand.innerText = ele.brand;

        let title = document.createElement("h2")
        title.innerText = ele.title;

        let price = document.createElement("b")
        price.innerText = `M.R.P: ₹${ele.price}`

        let deltBtn = document.createElement("button")
        deltBtn.innerText = "Delete"
        deltBtn.onclick = () => {
             remove(ele,index)
        }
        items.append(image, brand, title, price, deltBtn);
        products.append(items);
    });
}
renderCartData(cartLS);

const remove = (ele, index) => {
    cartLS.splice(index,1)
    localStorage.setItem("Cart", JSON.stringify(cartLS));
    productPrice -= Number(ele.price)
    localStorage.setItem("Price", JSON.stringify(productPrice));
    document.getElementById("price").innerHTML = productPrice
    document.getElementById("cartCount").innerHTML = cartLS.length
   renderCartData(cartLS);
}


var arr = [1, 2, 3, 4, 5, 6, 7]
var newArr = arr.splice(2, 1)

console.log(newArr) // [4]
