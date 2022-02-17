import { displayMessage } from "../../../common/displayMessage.js";
import { getToken } from "../../../components/saveTokenAndUser.js";
import { baseUrl } from "../../../components/api.js";

let imageURL = "";
/*export function addProduct() {
    const form = document.querySelector("#formAdd");
    const title = document.querySelector("#title");
    const price = document.querySelector("#price");
    const description = document.querySelector("#description");
    const image = document.querySelector("#image");
    const featuredProduct = document.querySelector("#featuredProduct");

    form.addEventListener("submit", submitForm);
    /*function submitForm(event) {
        event.preventDefault();
        const titleValue = title.value.trim();
        const priceValue = parseFloat(price.value);
        const descriptionValue = description.value.trim();
        const imageValue = image.value.trim();
        if (titleValue.length === 0 || priceValue.length === 0 || isNaN(priceValue) || descriptionValue.length === 0 || !checkURL(imageValue)) {
            return displayMessage("noResults", "Please supply proper values", ".message__form");
        }
        if (checkURL(imageValue)) {
            imageURL = imageValue;
        }
        addProductAPI(titleValue, priceValue, descriptionValue, imageURL, featuredProduct.checked);
    }
}*/
/*async function addProductAPI(title, price, description, image, featured) {
    const url = baseUrl + "/products";
    const myNewProductObject = {
        title: title,
        price: price,
        description: description,
        image: {
            formats: {
                small: {
                    url: image,
                }
            }
        },
        featured: featured,
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
            form.reset();
        }
        if (json.error) {
            displayMessage("noResults", json.message, ".message__form");
        }
        console.log(json);
    } catch (error) {
        console.log(error);
        displayMessage("error", "An error occurred, try later &#128522;", ".message__form");
    }
}*/



/*function checkURL(imageValue) {
    const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    const regex = new RegExp(expression);
    if (imageValue.match(regex)) {
        return true;
    }
}*/