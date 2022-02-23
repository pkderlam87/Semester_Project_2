import { loginMenu } from "../../../common/loginMenu.js";
import { displayMessage } from "../../../common/displayMessage.js";
import { baseUrl } from "../../../components/api.js";
import { getToken } from "../../../components/saveTokenAndUser.js";
import { checkURL } from "./addProduct.js";

const container = document.querySelector(".container");

loginMenu();

(function editProduct() {
    const queryString = document.location.search;
    const params = new URLSearchParams(queryString);
    const id = params.get("id");

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
                    <h2>Here you can edit the ${editionInfo.title}</h2>
                        <h4>Product's title</h4>
                        <div class="form-floating mb-3">
                            <input type="title" class="form-control" id="floatingInput">  <label for="floatingInput">${editionInfo.title}</label>
                        </div>
                        <h4>Product's price</h4>
                        <div class="form-floating mb-3">
                            <input type="price" class="form-control" id="floatingInput">
                            <label for="floatingInput">${editionInfo.price} Nok</label>
                        </div>
                    <h4>Product's description</h4>
                    <div class="form-floating">
                            <textarea class="form-control" id="floatingTextarea2" style="height: 300px" type="description"></textarea>
                            <label for="floatingTextarea2">${editionInfo.description}</label>
                    </div>
                    <h4>Product's image</h4>
                    <div id="editImagePlace"></div>
                    <h4>Featured product</h4>
                    <div class="featured__place"></div>
                    <button class="btn btn-primary" type="submit" id="update">Save <i class="ri-edit-line"></i></button>
            </div>
            </form>`;
    const editImagePlace = document.querySelector("#editImagePlace");
    showImageToEdit(editImagePlace, editionInfo);
    const featuredPlace = document.querySelector(".featured__place");
    showBooleanFeatured(featuredPlace, editionInfo);
    const form = document.querySelector(".edit__form");
    form.addEventListener("submit", submitForm);
}

function showImageToEdit(place, editionInfo) {
    if (editionInfo.image_url === null || editionInfo.image_url.length === 0) {
        place.innerHTML = `<div class="form-floating mb-auto">
    <img src="${baseUrl}${editionInfo.image.formats.small.url}" alt = "${editionInfo.image.alternativeText}" class="edit__image">    
    <textarea class="form-control" id="floatingTextarea2" style="height: 200px" type="image"></textarea>
    </div>`;
    } else {
        place.innerHTML = `<div class="form-floating mb-auto">
    <img src="${editionInfo.image_url}" alt = "${editionInfo.title}" class="edit__image">    
    <textarea class="form-control imageUrlToCheck" id="floatingTextarea2" style="height: 200px" type="image"></textarea>
    </div>`;
    }
}
function showBooleanFeatured(place, editionInfo) {
    if (editionInfo.featured === false) {
        place.innerHTML = `<label for="featured">Featured</label>
        <input type="checkbox" value="featured" id="featuredProduct"/>`
    } else {
        place.innerHTML = `<label for="featured">Featured</label>
        <input type="checkbox" id="featuredProduct" checked/>`
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
    const featuredValue = event.target[4].value;

    console.log(event.target[4].checked);

}


/*        const imageUrlToCheck = document.querySelector(".imageUrlToCheck").value;
        console.log(imageUrlToCheck);
        //checkURL(imageUrlToCheck);*/