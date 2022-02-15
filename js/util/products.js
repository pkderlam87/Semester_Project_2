import { baseUrl } from "../components/api.js";

export function showProducts(json) {
    const products = document.querySelector(".products");
    products.innerHTML = "";
    for (let i = 0; i < json.length; i++) {
        products.innerHTML += `
        <div class="card" style="width: 18rem;">
        <a class = "product" href = "/product_detail.html?id=${json[i].id}">
            <img src="${baseUrl}${json[i].image.formats.small.url}" class="card-img-top" alt="${json[i].image.alternativeText}">
            <div class="card-body">
                <h5 class="card-title">${json[i].title}</h5>
                <h5 class="card-text">${json[i].price} Nok</h5>
                <a href="/product_detail.html?id=${json[i].id}" class="btn btn-primary">View product</a>
            </div>
            </a>
            </div>`;
    }
}