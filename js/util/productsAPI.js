import { baseUrl } from "../components/api.js";
import { showProducts } from "./products.js";
import { searchProducts } from "./searchProducts.js";
import { loginMenu } from "../common/loginMenu.js";
import { displayMessage } from "../common/displayMessage.js";
import { addNewProductForm } from "../util/login/authResources/addNewProductForm.js";

const productsUrl = baseUrl + "/products";
loginMenu();
(async function products() {
    try {
        const response = await fetch(productsUrl);
        const json = await response.json();
        showProducts(json);
        searchProducts(json);
        const logoutButton = document.querySelector("#logout");
        if (logoutButton) {
            addNewProductForm();
        }
    } catch (error) {
        displayMessage("error", `Something went wrong with the API call. ${error}`, ".message__place");
        console.log(error);
    }
})();