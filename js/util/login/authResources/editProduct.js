import { displayMessage } from "../../../common/displayMessage.js";
import { baseUrl } from "../../../components/api.js";
import { getToken } from "../../../components/saveTokenAndUser.js";
import { checkURL } from "./addProduct.js";
import { showForm } from "./newResources.js";

const newResourceProductContainer = document.querySelector(".edit__product");
let form = "";
export async function editProduct(event) {
    console.log(event.target.dataset.id);
    const id = this.dataset.id;
    const productURL = baseUrl + "/products/" + id;
    console.log(productURL);
    try {
        const response = await fetch(productURL);
        const edition = await response.json();
        document.title = `Smoof shoes | Edit ${edition.title}`;
        //showForm(edition, newResourceProductContainer);

    } catch (error) {
        console.log(error);
        displayMessage("error", error, ".message__place");
    }
}

export function showImage(place, editionInfo) {
    if (editionInfo.image_url === null || editionInfo.image_url.length === 0) {
        place.innerHTML = `<div class="form-floating mb-auto image">
    <img src="${baseUrl}${editionInfo.image.formats.small.url}" alt = "${editionInfo.image.alternativeText}" class="edit__image">    
    <textarea class="form-control" id="floatingTextarea2" style="height: 150px" type="image" required></textarea>
    </div>
    <p class="invalid-feedback fail__url">Please provide a valid url (e.g.: www.smoofshoes.com)</p>`;
    } else {
        place.innerHTML = `<div class="form-floating mb-auto image">
    <img src="${editionInfo.image_url}" alt = "${editionInfo.title}" class="edit__image">    
    <textarea class="form-control imageUrlToCheck" id="floatingTextarea2" style="height: 150px" type="image" required></textarea>
    </div>
    <p class="invalid-feedback fail__url">Please provide a valid url (e.g.: www.smoofshoes.com)</p>`;
    }
}
export function showBooleanFeatured(place, editionInfo) {
    if (editionInfo.featured === false) {
        place.innerHTML = `<input type="checkbox" value="featured" id="featuredProduct" class="form-check-input"/>`
    } else {
        place.innerHTML = `<input type="checkbox" id="featuredProduct" checked class="form-check-input"/>`
    }
}
export function submitForm(event) {
    event.preventDefault();
    const titleValue = event.target[0].value.trim();
    const priceValue = parseFloat(event.target[1].value);
    const descriptionValue = event.target[2].value.trim();
    const invalidFeedbackPrice = document.querySelector(".fail__price");
    const invalidFeedbackUrl = document.querySelector(".fail__url");
    let imageValue = "";
    checkURL(event.target[3].value.trim());
    if (checkURL(event.target[3].value.trim())) {
        imageValue = event.target[3].value.trim();
        invalidFeedbackUrl.style.display = "none";
    } else {
        invalidFeedbackUrl.style.display = "block";
    }
    const featuredValue = event.target[4].checked;
    if (isNaN(priceValue)) {
        invalidFeedbackPrice.style.display = "block";
    } else {
        invalidFeedbackPrice.style.display = "none";
    };
    if (priceValue && imageValue.length > 0) {
        saveProductAPI(titleValue, priceValue, descriptionValue, imageValue, featuredValue, form);
    }
}
async function saveProductAPI(title, price, description, image, featured, form) {
    const url = baseUrl + "/products/" + id;
    const data = JSON.stringify({
        title: title,
        price: price,
        description: description,
        featured: featured,
        image_url: image,
    })
    const token = getToken();
    const options = {
        method: "PUT",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
    };
    try {
        const response = await fetch(url, options);
        const json = await response.json();
        console.log(json);
        if (json.updated_at) {
            displayMessage("results", "Product updated", ".message__place");
            form.style.display = "none";
        }
        if (json.error) {
            displayMessage("noResults", json.message, ".message__place");
        }
    } catch (error) {
        console.log(error);
        displayMessage("error", error, ".message__place");
    }
}


