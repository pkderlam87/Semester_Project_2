import { showProducts } from "./products.js";
import { displayMessage } from "../common/displayMessage.js";
const messagePlace = document.querySelector(".message__place");
export function searchProducts(json) {
    const search = document.querySelector("#search");
    search.onkeyup = event => {
        const searchValue = event.target.value.trim().toLowerCase();
        if (event.target.value === 0) {
            messagePlace.style.display = "none";
        }
        const filteredProducts = json.filter(function (product) {
            if (product.title.toLowerCase().includes(`${searchValue}`) || product.description.toLowerCase().includes(`${searchValue}`)) {
                return true;
            }
        });
        showProducts(filteredProducts);
        if (filteredProducts.length === 0) {
            displayMessage("noResults", "There is nothing with this title or description &#128533;", ".message__place");
        }
        else {
            displayMessage("results", `We found ${filteredProducts.length} results`, ".message__place");
        }
    }
}