import { baseUrl } from "../components/api.js";
import { showProducts } from "./products.js";

const featuredProductsUrl = baseUrl + "/products?featured=true";

(async function products() {
    try {
        const response = await fetch(featuredProductsUrl);
        const json = await response.json();
        showProducts(json);
    } catch (error) {
        console.log(error);
    }
})();