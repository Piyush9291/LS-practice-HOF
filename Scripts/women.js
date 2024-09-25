import navbar from "../Components/navbar.js";
let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar();

let womenDataArr = productData.womenClothingData;

let cartLS = [];
let productPrice = 0;
// JSON.parse(localStorage.getItem('Price')) ||
console.log(typeof productPrice)

let products = document.getElementById("womenProducts")
function renderWomenData(data) {
  products.innerHTML = null;
  data.forEach((ele) => {
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

    let addBtn = document.createElement("button")
    addBtn.innerText = "Add to cart"
    addBtn.onclick = () => {
      cartLS.push(ele);
      addBtn.innerText = "Added to cart";
      document.getElementById("cartCount").innerHTML = cartLS.length;
      localStorage.setItem("Cart", JSON.stringify(cartLS));
      productPrice += Number(ele.price);
      localStorage.setItem("Price", JSON.stringify(productPrice));
    }
    items.append(image, brand, title, price, addBtn);
    products.append(items);
  });
}
renderWomenData(womenDataArr);

document.getElementById("allProducts").addEventListener("click", () => {
  return renderWomenData(womenDataArr);
})

document.getElementById("sortLH").addEventListener("click", () => {
  let sorted = womenDataArr.sort((a, b) => a.price - b.price);
  renderWomenData(sorted)
})

document.getElementById("sortHL").addEventListener("click", () => {
  let sorted = womenDataArr.sort((a, b) => b.price - a.price);
  renderWomenData(sorted)
})




