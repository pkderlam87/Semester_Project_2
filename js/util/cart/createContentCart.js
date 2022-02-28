import { getToken } from "../../components/saveTokenAndUser.js";

export function createContentCart(target, purchaseProduct) {
    const purchaseContainer = document.querySelector(target);
    purchaseContainer.innerHTML += `<div class="product__purchased">
    <img src="${purchaseProduct.image}" alt="${purchaseProduct.alt}">
    <h5>${purchaseProduct.title}</h5>
    <h6>${purchaseProduct.price} Nok</h6>
    <a href="/product_detail.html?id=${purchaseProduct.id}" class = "link">View Product</a>
    </div>`;

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