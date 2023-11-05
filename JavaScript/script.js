
//  Data for the shop items

let shop = document.getElementById("shop");


 //  Basket to hold all the selected items
 //  the getItem part is retrieving data from the local storage
 //  if local storage is blank, basket becomes an empty array


let basket = JSON.parse(localStorage.getItem("data")) || [];


//Generates the shop with product cards composed of
// images, title, price, buttons, description


let generateShop = () => {
    return (shop.innerHTML = shopItemsData
        .map((x) => {
            let { id, name, desc, img, price } = x;
            let search = basket.find((y) => y.id === id) || [];
            return `
    <div id=product-id-${id} class="item">
      <img width="220" src=${img} alt="">
      <div class="details">
        <h3>${name}</h3>
        <p>${desc}</p>
        <div class="price-quantity">
          <h2>$ ${price} </h2>
          <div class="buttons">
            <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
            <div id=${id} class="quantity">${
                search.item === undefined ? 0 : search.item
            }</div>
            <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
          </div>
        </div>
      </div>
  </div>
    `;
        })
        .join(""));
};

generateShop();


  // used to increase the selected product item quantity by 1


let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);

    if (search === undefined) {
        basket.push({
            id: selectedItem.id,
            item: 1,
        });
    } else {
        search.item += 1;
    }

    console.log(basket);
    update(selectedItem.id);
    localStorage.setItem("data", JSON.stringify(basket));
};


// used to decrease the selected product item quantity by 1


let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);

    if (search === undefined) return;
    else if (search.item === 0) return;
    else {
        search.item -= 1;
    }

    update(selectedItem.id);
    basket = basket.filter((x) => x.item !== 0);
    console.log(basket);
    localStorage.setItem("data", JSON.stringify(basket));
};


 // To update the digits of picked items on each item card


let update = (id) => {
    let search = basket.find((x) => x.id === id);
    document.getElementById(id).innerHTML = search.item;
    calculation();
};


//To calculate total amount of selected Items


let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();






//BANNER BANNER


let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("Slides");
    for (i = 0; i < slides.length; i++) {  // inc by 1

        slides[i].style.display = "none";}
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;}
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000);} // chagne img 2s
// Initialize an empty cart array if not stored
if (localStorage.getItem('cart') === null) {  // save across sessions
    localStorage.setItem('cart', JSON.stringify([]));
}
const myOffcanvas = new bootstrap.Offcanvas(document.getElementById('offcanvasWithBothOptions'));
document.addEventListener("DOMContentLoaded", function() {
    const myOffcanvas = new bootstrap.Offcanvas(document.getElementById('offcanvasWithBothOptions'));
});