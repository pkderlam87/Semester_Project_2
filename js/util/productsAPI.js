import { baseUrl } from "../components/api.js";
import { showProducts } from "./products.js";

const productsUrl = baseUrl + "/products";

(async function products() {
    try {
        const response = await fetch(productsUrl);
        const json = await response.json();
        showProducts(json);
    } catch (error) {
        console.log(error);
    }
})();