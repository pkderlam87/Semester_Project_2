import { addProduct } from "./addProduct.js";
import { deleteProduct } from "./deleteProduct.js";

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
        <div class="container">
            <form id="formAdd">
                <div>
                    <label for =  "title">Product's title</label>
                    <input id="title" type= "text" required/>
                </div>
                <div>
                    <label for = "price">Price</label>
                    <input id="price" required/><p>Nok</p>
                </div>
                <div>
                    <label for = "description">Description</label>
                    <textarea id="description" required></textarea>
                </div>
                <div>
                    <label for = "image">Image Url</label>
                    <input id="image" required/>
                </div>
                <div>
                    <label for="featured">Featured</label>
                    <input type="checkbox" value="featured" id="featuredProduct"/>
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

/*function changeButton(buttonCard) {
    buttonCard.forEach(element => {
        element.innerHTML = `<div class="container justify-content-between"><i class="ri-delete-bin-2-fill btn btn-delete"></i> <a href="/edit.html"><i class="ri-edit-line btn"></i></a></div>`;
    });
    const deleteButton = document.querySelectorAll(".btn-delete");
    deleteButton.forEach(element => {
        element.addEventListener("click", deleteProduct);
    });
}*/