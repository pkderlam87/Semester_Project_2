import { getExistingPurchase } from "../../components/getExistingPurchase.js";
import { displayMessage } from "../../common/displayMessage.js";
import { createContentCart } from "./createContentCart.js";


const clearAll = document.querySelector(".clear__button")
const purchaseContainer = document.querySelector(".purchase__cart");
const cart = document.querySelector("#cart");
const total = document.querySelector(".total");
const line = document.querySelector(".line");
const purchaseCart = getExistingPurchase();

if (purchaseCart.length === 0) {
    line.style.display = "none";
    displayMessage("noResults", "Don't have any products yet", ".message__place");
}
if (purchaseCart.length > 0) {
    clearAll.innerHTML = `<button class="btn btn-primary--clear__cart" id="clearLocalStorage">Clear all <i class="far fa-trash-alt"></i></button>`;
    const clearLocalStorage = document.querySelector("#clearLocalStorage");
    clearLocalStorage.addEventListener("click", clearAllFromLocalStorage);
}

purchaseCart.forEach((product) => {
    createContentCart(".purchase__cart", product);
});

function clearAllFromLocalStorage() {
    localStorage.removeItem("purchase");
    purchaseContainer.innerHTML = "";
    clearLocalStorage.style.display = "none";
    total.style.display = "none";
    line.style.display = "none";
    cart.innerHTML = `<i class="ri-shopping-cart-2-line" title="Cart is empty"><div class = "circle__number__products">0</div></i>`;
    displayMessage("noResults", "Don't have more products", ".message__place");
}