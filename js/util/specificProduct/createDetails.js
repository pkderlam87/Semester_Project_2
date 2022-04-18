import { handleClick } from "./handleClick.js";
import { baseUrl } from "../../components/api.js";
import { getExistingPurchase } from "../../components/getExistingPurchase.js";

const productPurchased = getExistingPurchase();

export function createDetails(details) {
    let cssClass = "ri-shopping-cart-2-line";
    const doesObjectExist = productPurchased.find(function (purchased) {
        return parseInt(purchased.id) === details.id;
    });
    if (doesObjectExist) {
        cssClass = "ri-shopping-cart-2-fill";
    }
    createContentDetails(cssClass, details);
    const shoppingCart = document.querySelectorAll(".btn-primary--cart");
    shoppingCart.forEach((button) => {
        button.addEventListener("click", handleClick);
    });
}
function createContentDetails(cssClass, item) {
    console.log(item.title, item.price, item.description, item.id, item.image_url);
    const container = document.querySelector(".product");
    container.innerHTML = `<div class ="container detail__products">
                                    <div class ="row no-gutters container align-items-center">
                                            <div class= "col-md-6 container justify-content-center image__place"></div>
                                        <div class= "col-md-6 wrap__details__text">
                                        <h1 class="details__text">${item.title}</h1>
                                        <h3 class="details__text">${item.price} Nok</h3>
                                        <p class="details__text">Description: ${item.description}</p>
                                        <div class = "shopping__button"></div>
                                        </div>
                                    </div>`;
    const imagePlace = document.querySelector(".image__place");
    const shoppingButton = document.querySelector(".shopping__button");
    showImageDetails(imagePlace, item, shoppingButton, cssClass);
    const emptyCartButton = document.querySelector(".btn-primary--cart");
    emptyCartButton.addEventListener("click", handleClick);
}
function showImageDetails(place, item, shoppingButton, cssClass) {
    if (item.image_url === null || item.image_url.length === 0) {
        place.innerHTML = `<img src="${item.image.formats.small.url}" alt = "${item.image.alternativeText}" class="image__file__details">`;
        shoppingButton.innerHTML = `<i class="${cssClass} btn btn-primary--cart" data-id="${item.id}" data-title="${item.title}" data-price="${item.price}" data-image="${item.image.formats.small.url}"
        data-alt="${item.image.alternativeText}"></i>`;
    } else {
        place.innerHTML = `<img src="${item.image_url}" alt = "${item.title}" class="image__url__details">`;
        shoppingButton.innerHTML = `<i class="${cssClass} btn btn-primary--cart" data-id="${item.id}" data-title="${item.title}" data-price="${item.price}" data-image="${item.image_url}" data-alt="${item.title}"></i>`;
    }
}