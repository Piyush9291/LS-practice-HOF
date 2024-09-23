import navbar from "../Components/navbar.js";
let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar();

let womanData = productData.womenClothingData;

let carls = JSON.parse(localStorage.getItem('cart')) || 0;
let productprice = JSON.parse(localStorage.getItem('price') || 0)


let womandatadiv = document.getElementById("womenProducts")

function renderwomanData(data){

      data.forEach((ele) => {
        
        let items = document.createElement("div")
        items.className = "items"

        let image = document.createElement("img")
        image.src = ele.img;
        onclick = () =>{
             window.location.href = "productPage.html"
             localStorage.setItem("Product" , JSON.stringify(ele));
        }

        let brand = document.createElement("p")
        brand.innerText = ele.brand;

        let title = document.createElement("h2")
        title.innerText = ele.title;

        let price = document.createElement("b")
        price.innerText = `price: ₹${ele.price}`

        let addbtn = document.createElement("button")
        addbtn.innerHTML = "Add to cart"
        addbtn.onclick = () =>{
          carls.push(ele);
          addbtn.innerText = "added to cart"
          document.getElementById("cartCount").innerText = carls.length;
          localStorage.setItem("cart" , JSON.stringify(carls));
          productprice += ele.price;
          localStorage.setItem("price" , JSON.stringify(productprice));
        }
        items.append(image, brand, title, price, addbtn)
        womandatadiv.append(items);
      });
}
renderwomanData(womanData);
