import { getToken } from "../../components/saveTokenAndUser.js";
let total = 0;
export function createContentCart(target, purchaseProduct) {
    const purchaseContainer = document.querySelector(target);
    purchaseContainer.innerHTML += `<div class="product__purchased">
    <img src="${purchaseProduct.image}" alt="${purchaseProduct.alt}">
    <h5>${purchaseProduct.title}</h5>
    <h6>${purchaseProduct.price} Nok</h6>
    <a href="/product_detail.html?id=${purchaseProduct.id}" class = "link">View Product</a>
    </div>`;
    total += parseFloat(purchaseProduct.price);
    showTotal(total);
    const token = getToken();
    if (token) {
        const specificProductLink = document.querySelectorAll(".link");
        disabledLink(specificProductLink);
    }
}
function disabledLink(link) {
    link.forEach(element => {
        element.classList.add("disabled");
    });
}
function showTotal(total) {
    const totalContainer = document.querySelector(".total");
    totalContainer.innerHTML = `<h1>Total:</h1> <h2>${total} Nok</h2>`;
}