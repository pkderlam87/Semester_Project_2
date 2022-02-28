import { addProduct } from "./addProduct.js";

export function newResources() {
    const productLink = document.querySelectorAll("#product");
    disableLink(productLink);

    const addNewProductContainer = document.querySelector(".auth__add__new__product");
    addNewProductContainer.innerHTML = `<div class="btn btn-primary--add">New product <i class="ri-add-circle-line"></i></div>`;
    const addButton = document.querySelector(".btn-primary--add");
    addButton.addEventListener("click", showFormAdd);
    function showFormAdd() {
        addNewProductContainer.innerHTML = `
        <h1>Add new Product</h1>
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
}


function disableLink(productLink) {
    for (let i = 0; i < productLink.length; i++) {
        productLink[i].classList.add("disabled");
    }
}
