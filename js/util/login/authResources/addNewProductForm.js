//import { addProduct } from "./addProduct.js";

export function addNewProductForm() {
    const addNewProductContainer = document.querySelector(".auth__add__new__product");
    addNewProductContainer.innerHTML = `<div class="btn btn-primary--add">New product <i class="ri-add-circle-line"></i></div>`;
    const addButton = document.querySelector(".btn-primary--add");
    addButton.addEventListener("click", showForm);
    function showForm() {
        addNewProductContainer.innerHTML = `
        <h1>Add new Product</h1>
        <div class = "message__form"></div>
        <div class="container">
    <form id="formAdd">
    <div>
        <label for =  "title">Product's title</label>
        <input id="title" type= "text"/>
    </div>
    <div>
        <label for = "price">Price</label>
        <input id="price"/><p>Nok</p>
    </div>
    <div>
        <label for = "description">Description</label>
        <textarea id="description"></textarea>
    </div>
    <div>
        <label for = "image">Image URL</label>
        <input id="image" type="text" placeholder="https://www.nike.com/no/">
    </div>
    <div>
    <label for="featured">Featured</label>
    <input type="checkbox" value="featured" id="featuredProduct"/>
    </div>
    <button class="btn btn-primary--add" type="submit">Add <i class="ri-add-circle-line"></i></button>
    </form>
    </div>`;
        //addProduct();
    }
}