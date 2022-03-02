import { addProduct } from "./addProduct.js";
import { showImage } from "./editProduct.js";
import { showBooleanFeatured } from "./editProduct.js";
import { submitForm } from "./editProduct.js";

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
    if (JSON.stringify(event) === "{}") {
        target.innerHTML = `
            <h1 class="form__title">Add new Product</h1>
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
                        <textarea id="image" style="height: 50px" required class="form-control"></textarea>
                        <p class="invalid-feedback fail__url">Please provide a valid url (e.g.: www.smoofshoes.com)</p>
                    </div>
                    <div class="form-check container">
                        <input type="checkbox" value="featured" id="featuredProduct" class="form-check-input"/>
                        <label for="featured" class="form-check-label">Featured</label>
                        </div>
                    <button class="btn btn-primary--add" type="submit">Add <i class="ri-add-circle-line"></i></button>
                </form>
            </div>`;
        addProduct();
    }
    if (JSON.stringify(event) !== "{}") {
        console.log(event);
        target.innerHTML = "";
        target.innerHTML = `<form class="edit__form">
                        <div class="message-container"></div>
                        <h1>Here you can edit the ${editionInfo.title}</h1>
                            <h4 class="heading__title">Product's title</h4>
                            <div class="form-floating title">
                                <input type="title" class="form-control" id="floatingInput" required>
                                <label for="floatingInput">${editionInfo.title}</label>
                            </div>
                            <h4 class="heading__price">Product's price</h4>
                            <div class="form-floating price">
                                <input type="price" class="form-control" id="floatingInput" required>
                                <label for="floatingInput">${editionInfo.price} Nok</label>
                                <p class="invalid-feedback fail__price">Please provide a valid price (use "." instead ",")</p>
                            </div>
                        <h4 class="heading__description">Product's description</h4>
                        <div class="form-floating description">
                                <textarea class="form-control" id="floatingTextarea2" style="height: 200px" type="description" required></textarea>
                                <label for="floatingTextarea2">${editionInfo.description.substring(0, 30)}[...]</label>
                        </div>
                        <h4 class="heading__image">Product image URL</h4>
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
}


function disableLink(productLink) {
    for (let i = 0; i < productLink.length; i++) {
        productLink[i].classList.add("disabled");
    }
}
