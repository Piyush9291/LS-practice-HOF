import navbar from "../Components/navbar.js";
let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar();

let womanDataArry = productData.womenClothingData;

let carLSs = JSON.parse(localStorage.getItem("cart")) || [];
let productprice = JSON.parse(localStorage.getItem('price')) || 0;

let womandatadiv = document.getElementById("womenProducts")

function renderwomanData(data){

      data.forEach((ele) => {
        

        let items = document.createElement("div")
        items.className = "items"

        let image = document.createElement("img")
        image.src = ele.img;
        image.onclick = () =>{
          window.location.href = "productPage.html"
          localStorage.setItem("Product", JSON.stringify(ele));
        }

        let brand = document.createElement("p")
        brand.innerText = ele.brand;

        let title = document.createElement("h2")
        title.innerText = ele.title;

        let price = document.createElement("b")
        price.innerText = `price: ₹${ele.price}`

        let addbtn = document.createElement("button")
        addbtn.innerText = "Add to cart"
        addbtn.onclick = () => {
        carLSs.push(ele)
        addbtn.innerText = "Added to cart"
        document.getElementById("cartCount").innerHTML = carLSs.length
        localStorage.setItem("cart" , JSON.stringify(carLSs));
        productprice += ele.price;
        localStorage.setItem("price" , JSON.stringify(productprice));
        }
        items.append(image, brand, title, price, addbtn);
        womandatadiv.append(items);
});
 
}
renderwomanData(womanDataArry);


// document.getElementById("allProducts").addEventListener("click" = () =>{
//   return renderwomanData(womanDataArry);
// })

// document.getElementById("sortLH").addEventListener("click" = () =>{
//  let stored = womanDataArry.sort((a,b) => a.price - b.price);
//   renderwomanData(stored)
// })

// document.getElementById("sortHL").addEventListener("click" = () =>{
//  let stored = womanDataArry.sort((a,b) => b.price - a.price);
//   renderwomanData(stored)
// })




