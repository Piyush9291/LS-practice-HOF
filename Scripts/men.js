import navbar from "../Components/navbar.js";
let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar();

// This Data comes from Components/data.js --> 
let menDataArr = productData.menClothingData;
console.log(menDataArr)

let cartLS = JSON.parse(localStorage.getItem("Cart")) || [];
let productPrice = JSON.parse(localStorage.getItem("Price")) || 0;

let menDataDiv = document.getElementById("menProducts");
function renderMenData(data) {

    menDataDiv.innerHTML = null;

    data.forEach((ele) => {
        let items = document.createElement("div");
        items.className = "items";

        let image = document.createElement("img");
        image.src = ele.img;
        image.onclick = () => {
            window.location.href = "productPage.html"
            localStorage.setItem("Product", JSON.stringify(ele));
        }

        let brand = document.createElement("p");
        brand.innerText = ele.brand;

        let title = document.createElement("h2");
        title.innerText = ele.title;

        let price = document.createElement("b");
        price.innerText = `Price: ₹${ele.price}`;
        let addBtn = document.createElement("button");
        addBtn.innerText = "Add to cart";
        addBtn.onclick = () => {
            cartLS.push(ele);
            addBtn.innerText = "Added to cart";
            document.getElementById("cartCount").innerText = cartLS.length
            localStorage.setItem("Cart", JSON.stringify(cartLS));
            productPrice += ele.price;
            localStorage.setItem("Price", JSON.stringify(productPrice));
        }

        items.append(image, brand, title, price, addBtn);
        menDataDiv.append(items);

    });
}
renderMenData(menDataArr);

document.getElementById("allProducts").addEventListener("click", () => {
    return renderMenData(menDataArr);
});

document.getElementById("sortLH").addEventListener("click", () => {
    let sorted = menDataArr.sort((a,b) => a.price - b.price);
    renderMenData(sorted);
});

document.getElementById("sortHL").addEventListener("click", () => {
    let sorted = menDataArr.sort((a,b) => b.price - a.price);
    renderMenData(sorted);
});



// let mendetarr = productData.menClothingData;
// console .log(mendetarr)

// let cartls = JSON.parse(localStorage.getItem("cart")) || []
// let productprice = JSON.parse(localStorage.getItem('price'))

// let mendetadiv = document.getElementById('menProducts')

// function rendermandeta(data){

//     data.forEach((ele) => {
        
//         let items = document.createElement('items')
//         items.className = "items"

//         let images = document.createElement('img')
//         images.src = ele.img;
//         images.onclick = () => {
//         window.location.href = "productpage.html"
//         localStorage.setItem("products", JSON.stringify(ele))
//         }

//         let brand = document.createElement('p')
//         brand.innerText = ele.brand

//         let title = document.createElement('h2')
//         title.innerText = ele.title

//         let price = document.createElement('price')
//         price.innerText = `price :₹${ele.price} `

//         let addbtn = document.createElement("button")
//         addbtn.innerText = "Add to card"
//         addbtn.onclick = () =>{
//         cartls.push(ele)
//         addbtn.innerText = "Added to cart"
//         document.getElementById("cartCount").innerText = cartls.length
//         productprice.price += ele.price
//         localStorage.setItem('price', JSON.stringify("productprice"))
//         }

//         items.append(images , brand , title , price , addbtn)
//         mendetadiv.append(items);
//     });
// }

// rendermandeta(mendetarr)

// document.getElementById('allProducts').addEventListener('click', () =>{
//      return rendermandeta(mendetarr)
// })

// document.getElementById('sortLH').addEventListener('click' , () =>{
//     let sorted = mendetarr((a,b) => a.price - b.price) 
//     rendermandeta(sorted)
// })

// document.getElementById('sortHL').addEventListener('click' , () =>{
//     let sorted = mendetarr((a,b) => b.price - a.price) 
//     rendermandeta(sorted)
// })