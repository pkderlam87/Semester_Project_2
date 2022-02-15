import { getExistingPurchase } from "../../components/getExistingPurchase.js";
import { displayMessage } from "../../common/displayMessage.js";
import { createContentCart } from "./createContentCart.js";
import { loginMenu } from "../../common/loginMenu.js";

const clearAll = document.querySelector(".clear__button")
const purchaseContainer = document.querySelector(".purchase__cart");

loginMenu();
const purchaseCart = getExistingPurchase();

if (purchaseCart.length === 0) {
    displayMessage("noResults", "Don't have any products yet", ".message__place");
}
if (purchaseCart.length > 0) {
    clearAll.innerHTML = `<button class="btn" id="clearLocalStorage">Clear all <i class="far fa-trash-alt"></i></button>`;
    const clearLocalStorage = document.querySelector("#clearLocalStorage");
    clearLocalStorage.addEventListener("click", clearAllFromLocalStorage);
}

purchaseCart.forEach((product) => {
    createContentCart(".ri-shopping-cart-2-fill", ".purchase__cart", product);
});

function clearAllFromLocalStorage() {
    localStorage.clear();
    purchaseContainer.innerHTML = "";
    displayMessage("noResults", "Don't have more products", ".message__place");
}