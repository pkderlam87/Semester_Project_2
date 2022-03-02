import { addProduct } from "./addProduct.js";
import { showImage } from "./editProduct.js";
import { showBooleanFeatured } from "./editProduct.js";
import { updateProduct } from "./editProduct.js";

export function newResources() {
    const emptyObject = {};
    const productLink = document.querySelectorAll("#product");
    disableLink(productLink);
    const newResourceProductContainer = document.querySelector(".auth__product");
    newResourceProductContainer.innerHTML = `<div class="btn btn-primary--add">New product <i class="ri-add-circle-line"></i></div>`;
    const addButton = document.querySelector(".btn-primary--add");
    addButton.addEventListener("click", showForm.bind(Event, emptyObject, newResourceProductContainer));
}
export function showForm(event, target) {
    console.log(target);
    target.innerHTML = `<h1 class="form__title"></h1>
    <div class = "message__form"></div>
            <div class="container justify-content-center">
                <form id="formAdd">
                    <div class="title">
                        <label for =  "title" class="form-label">Product's title</label>
                        <input id="title" type= "text" class="form-control" required/>
                    </div>
                    <div class="price">
                        <label for = "price" class="form-label">Price (Nok)</label>
                        <input id="validationCustom05" class="form-control input__price" required/>
                        <p class="invalid-feedback fail__price">Please provide a valid price (use "." instead ",")</p>
                    </div>
                    <div class="description">
                        <label for = "description" class="form-label">Description</label>
                        <textarea id="description" style="height: 150px" required class="form-control"></textarea>
                    </div>
                    <div class="image">
                        <label for = "image" class="form-label">Image Url</label>
                        <div id="editImagePlace"></div>
                        <textarea id="image" style="height: 50px" required class="form-control"></textarea>
                        <p class="invalid-feedback fail__url">Please provide a valid url (e.g.: www.smoofshoes.com)</p>
                    </div>
                    <div class="form-check container">
                    </div>
                        <div class="button"></div>
                </form>
            </div>`;
    if (JSON.stringify(event) === "{}") {
        addProduct();
    }
    if (JSON.stringify(event) !== "{}") {
        const editImagePlace = document.querySelector("#editImagePlace");
        showImage(editImagePlace, event);
        updateProduct();
        //form = document.querySelector("form");
        //form.addEventListener("submit", submitForm);
    }
    const formTitle = document.querySelector(".form__title");
    titleNewResource(event, formTitle);
    const inputTitle = document.querySelector("#title");
    inputTitleNewResource(event, inputTitle);
    const inputPrice = document.querySelector(".input__price");
    inputPriceNewResource(event, inputPrice);
    const textareaDescription = document.querySelector("#description");
    textareaDescriptionNewResource(event, textareaDescription);
    const textareaImage = document.querySelector("#image");
    textareaImageNewResource(event, textareaImage);
    const formCheck = document.querySelector(".form-check");
    formCheckNewResource(event, formCheck);
    const button = document.querySelector(".button");
    buttonNewResource(event, button);
}


function disableLink(productLink) {
    for (let i = 0; i < productLink.length; i++) {
        productLink[i].classList.add("disabled");
    }
}
function titleNewResource(event, formTitle) {
    if (JSON.stringify(event) === "{}") {
        formTitle.innerHTML = `Add new product`;
    } if (JSON.stringify(event) !== "{}") {
        formTitle.innerHTML = `Edit ${event.title}`;
    }
}
function inputTitleNewResource(event, inputTitle) {
    if (JSON.stringify(event) !== "{}") {
        inputTitle.value = `${event.title}`;
    }
}
function inputPriceNewResource(event, inputPrice) {
    if (JSON.stringify(event) !== "{}") {
        inputPrice.value = `${event.price}`;
    }
}
function textareaDescriptionNewResource(event, textareaDescription) {
    if (JSON.stringify(event) !== "{}") {
        textareaDescription.value = `${event.description}`;
    }
}
function textareaImageNewResource(event, textareaImage) {
    if (JSON.stringify(event) !== "{}") {
        textareaImage.value = `${event.image_url}`;
    }
}
function formCheckNewResource(event, formCheck) {
    if (JSON.stringify(event) === "{}") {
        formCheck.innerHTML = `<input type="checkbox" value="featured" id="featuredProduct" class="form-check-input"/>
        <label for="featured" class="form-check-label">Featured</label>`;
    } if (JSON.stringify(event) !== "{}") {
        formCheck.innerHTML = `<div class="featured__place"></div><label for="featured" class="form-check-label">Featured</label>`;
        const featuredPlace = document.querySelector(".featured__place");
        showBooleanFeatured(featuredPlace, event);
    }
}
function buttonNewResource(event, button) {
    if (JSON.stringify(event) === "{}") {
        button.innerHTML = `<button class="btn btn-primary--add" type="submit">Add <i class="ri-add-circle-line"></i></button>`;
    } if (JSON.stringify(event) !== "{}") {
        button.innerHTML = `<button class="btn btn-primary update" type="submit" id="update">Save <i class="ri-edit-line"></i></button>`;
    }
}