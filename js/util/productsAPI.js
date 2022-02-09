import { baseUrl } from "../components/api.js";
import { showProducts } from "./products.js";
import { searchProducts } from "./searchProducts.js";

const productsUrl = baseUrl + "/products";

(async function products() {
    try {
        const response = await fetch(productsUrl);
        const json = await response.json();
        showProducts(json);
        searchProducts(json);
    } catch (error) {
        displayMessage("error", `Something went wrong with the API call. ${error}`, ".message__place");
        console.log(error);
    }
})();