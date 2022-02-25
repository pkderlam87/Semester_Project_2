import { loginMenu } from "../../../common/loginMenu.js";
import { displayMessage } from "../../../common/displayMessage.js";
import { baseUrl } from "../../../components/api.js";
import { getToken } from "../../../components/saveTokenAndUser.js";
import { checkURL } from "./addProduct.js";

const container = document.querySelector(".container");
let form = "";
loginMenu();
let id = "";
(function editProduct() {
    const queryString = document.location.search;
    const params = new URLSearchParams(queryString);
    id = params.get("id");

    if (!id) {
        document.location.href = "/products.html";
    }
    const productURL = baseUrl + "/products/" + id;
    (async function edit() {
        try {
            const response = await fetch(productURL);
            const edition = await response.json();
            document.title = `Smoof shoes | Edit ${edition.title}`;
            createEditFields(edition);

        } catch {
            console.log(error);
            displayMessage("error", error, ".message__place");
        }
    })();
})();
function createEditFields(editionInfo) {
    console.log(editionInfo);
    container.innerHTML = "";
    container.innerHTML = `<form class="edit__form">
                    <div class="message-container"></div>
                    <h1>Here you can edit the ${editionInfo.title}</h1>
                        <h4 class="heading__title">Product's title</h4>
                        <div class="form-floating title">
                            <input type="title" class="form-control" id="floatingInput">
                            <label for="floatingInput">${editionInfo.title}</label>
                        </div>
                        <h4 class="heading__price">Product's price</h4>
                        <div class="form-floating price">
                            <input type="price" class="form-control" id="floatingInput">
                            <label for="floatingInput">${editionInfo.price} Nok</label>
                        </div>
                    <h4 class="heading__description">Product's description</h4>
                    <div class="form-floating description">
                            <textarea class="form-control" id="floatingTextarea2" style="height: 200px" type="description"></textarea>
                            <label for="floatingTextarea2">${editionInfo.description.substring(0, 30)}[...]</label>
                    </div>
                    <h4 class="heading__image">Product's image</h4>
                    <div id="editImagePlace"></div>
                    <div class = "featured">
                    <h4 class="heading__featured">Featured product</h4>
                    <div class="featured__place"></div>
                    </div>
                    <button class="btn btn-primary update" type="submit" id="update">Save <i class="ri-edit-line"></i></button>
            </div>
            </form>`;
    const editImagePlace = document.querySelector("#editImagePlace");
    showImage(editImagePlace, editionInfo);
    const featuredPlace = document.querySelector(".featured__place");
    showBooleanFeatured(featuredPlace, editionInfo);
    form = document.querySelector(".edit__form");
    form.addEventListener("submit", submitForm);
}

export function showImage(place, editionInfo) {
    if (editionInfo.image_url === null || editionInfo.image_url.length === 0) {
        place.innerHTML = `<div class="form-floating mb-auto image">
    <img src="${baseUrl}${editionInfo.image.formats.small.url}" alt = "${editionInfo.image.alternativeText}" class="edit__image">    
    <textarea class="form-control" id="floatingTextarea2" style="height: 150px" type="image"></textarea>
    </div>`;
    } else {
        place.innerHTML = `<div class="form-floating mb-auto image">
    <img src="${editionInfo.image_url}" alt = "${editionInfo.title}" class="edit__image">    
    <textarea class="form-control imageUrlToCheck" id="floatingTextarea2" style="height: 150px" type="image"></textarea>
    </div>`;
    }
}
function showBooleanFeatured(place, editionInfo) {
    if (editionInfo.featured === false) {
        place.innerHTML = `<input type="checkbox" value="featured" id="featuredProduct" class="form-check-input"/>`
    } else {
        place.innerHTML = `<input type="checkbox" id="featuredProduct" checked class="form-check-input"/>`
    }
}
function submitForm(event) {
    event.preventDefault();
    const titleValue = event.target[0].value.trim();
    const priceValue = parseFloat(event.target[1].value);
    const descriptionValue = event.target[2].value.trim();
    let imageValue = "";
    checkURL(event.target[3].value.trim());
    if (checkURL(event.target[3].value.trim())) {
        imageValue = event.target[3].value.trim();
    }
    const featuredValue = event.target[4].checked;
    if (titleValue.length === 0 || priceValue.length === 0 || isNaN(priceValue) || descriptionValue.length === 0 || !checkURL(event.target[3].value.trim())) {
        return displayMessage("noResults", "Please supply proper values", ".message__form");
    } else {
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


