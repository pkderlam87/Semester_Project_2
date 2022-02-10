import { displayMessage } from "../../common/displayMessage.js";
import { baseUrl } from "../../components/api.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if (!id) {
    document.location.href = "/";
}
const productURL = baseUrl + "/products/" + id;

(async function () {
    try {
        const response = await fetch(productURL);
        const details = await response.json();
        document.title = `Smoof shoes | ${details.title}`;
        const container = document.querySelector(".product");
        container.innerHTML = `<div class ="container detail__products">
                                <div class ="row"
                                        <div class= "col">
                                        <img src="${baseUrl}${details.image.formats.small.url}" class="card-img-top" alt="${details.image.alternativeText}">
                                        </div>
                                    <div class= "col">
                                    <h1 class="details__text">${details.title}</h1>
                                    <h3 class="details__text">${details.price} Nok</h3>
                                    <p class="details__text">Description: ${details.description}</p>
                                        <div class="btn btn-primary--cart"><i class="ri-shopping-cart-2-line"></i>
                                        </div>
                                    </div>
                                </div>`;
    } catch {
        console.log(error);
        displayMessage("error", error, ".message__place");
    }
})();