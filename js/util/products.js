import { baseUrl } from "../components/api.js";
import { getToken } from "../components/saveTokenAndUser.js";
import { deleteProduct } from "./login/authResources/deleteProduct.js";

export function showProducts(json) {
    const products = document.querySelector(".products");
    products.innerHTML = "";
    for (let i = 0; i < json.length; i++) {
        if (json[i].image_url === null || json[i].image_url.length === 0) {
            products.innerHTML += `
        <div>
        <a class = "product" id="product" href = "/product_detail.html?id=${json[i].id}">
        <div class="card" style="width: 18rem;">
            <img src="${baseUrl}${json[i].image.formats.small.url}" class="card-img-top" alt="${json[i].image.alternativeText}">
            <div class="card-body">
                <h5 class="card-title">${json[i].title}</h5>
                <h5 class="card-text">${json[i].price} Nok</h5>
                <div class = "button__card">
                <a href="/product_detail.html?id=${json[i].id}" class="btn btn-primary">View product</a>
                </div>
            </div>
            </div></a></div>`;
        } else {
            products.innerHTML += `
        <div>
        <a class = "product" id="product" href = "/product_detail.html?id=${json[i].id}">
        <div class="card" style="width: 18rem;">
            <img src="${json[i].image_url}" class="card-img-top" alt="${json[i].title}">
            <div class="card-body">
                <h5 class="card-title">${json[i].title}</h5>
                <h5 class="card-text">${json[i].price} Nok</h5>
                <div class = "button__card">
                <a href="/product_detail.html?id=${json[i].id}" class="btn btn-primary">View product</a>
                </div>
            </div>
            </div></a></div>`;
        }

    }
    const token = getToken();
    if (token) {
        const buttonCard = document.querySelectorAll(".button__card");
        changeButton(buttonCard, json);
    }
}
function changeButton(buttonCard, json) {
    console.log(json);
    for (let i = 0; i < buttonCard.length; i++) {
        buttonCard[i].innerHTML = `<div class="container justify-content-between"><i class="ri-delete-bin-2-fill btn btn-delete" data-id=${json[i].id}></i> <a href="/edit.html?id=${json[i].id}"><i class="ri-edit-line btn"></i></a></div>`;
    };
    const deleteButton = document.querySelectorAll(".btn-delete");
    deleteButton.forEach(element => {
        element.addEventListener("click", deleteProduct);
    });
}