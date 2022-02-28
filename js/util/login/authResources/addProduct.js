import { displayMessage } from "../../../common/displayMessage.js";
import { getToken } from "../../../components/saveTokenAndUser.js";
import { baseUrl } from "../../../components/api.js";
let myNewProductObject = {};

export function addProduct() {
    const form = document.querySelector("#formAdd");
    const title = document.querySelector("#title");
    const price = document.querySelector(".input__price");
    const description = document.querySelector("#description");
    const image = document.querySelector("#image");
    const featuredProduct = document.querySelector("#featuredProduct");
    const invalidFeedbackPrice = document.querySelector(".fail__price");
    const invalidFeedbackUrl = document.querySelector(".fail__url");
    form.addEventListener("submit", submitForm);
    function submitForm(event) {
        event.preventDefault();
        const titleValue = title.value.trim();
        const priceValue = parseFloat(price.value);
        console.log(price.value);
        const descriptionValue = description.value.trim();
        let imageValue = "";
        checkURL(image.value.trim());
        if (checkURL(image.value.trim())) {
            imageValue = image.value.trim();
            invalidFeedbackUrl.style.display = "none";
        } else {
            invalidFeedbackUrl.style.display = "block";
        };
        if (isNaN(priceValue)) {
            invalidFeedbackPrice.style.display = "block";
        } else {
            invalidFeedbackPrice.style.display = "none";
        };
        if (imageValue.length > 0 && priceValue) {
            addProductAPI(titleValue, priceValue, descriptionValue, imageValue, featuredProduct.checked, form);
        }

    }
}

async function addProductAPI(title, price, description, image, featured, form) {
    const url = baseUrl + "/products";

    myNewProductObject = {
        title: title,
        price: price,
        description: description,
        featured: featured,
        image_url: image,
    };
    const data = JSON.stringify(myNewProductObject);
    const token = getToken();
    const options = {
        method: "POST",
        body: data,
        headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
        }
    };
    try {
        const response = await fetch(url, options);
        const json = await response.json();
        if (json.created_at) {
            displayMessage("results", "Product created", ".message__form");
            form.style.display = "none";
            setTimeout(function () {
                location.href = "/products.html";
            }, 2000);
        }
        if (json.error) {
            displayMessage("noResults", json.message, ".message__form");
        }
        console.log(json);
    } catch (error) {
        console.log(error);
        displayMessage("error", "An error occurred, try later &#128522;", ".message__form");
    }
}
export function checkURL(image) {
    const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    let regex = new RegExp(expression);

    if (image.match(regex)) {
        return true;
    } else {
        return false;
    }
}