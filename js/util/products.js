import { baseUrl } from "../components/api.js";
const products = document.querySelector(".products");


export function showProducts(json) {
    console.log(json);
    json.forEach(product => {
        products.innerHTML += `<a class = "product col" href = "/product_detail.html?=${product.id}">
        <div class="card" style="width: 18rem;">
            <img src="${baseUrl}${product.image.formats.small.url}" class="card-img-top" alt="${product.image.alternativeText}">
            <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <h5 class="card-text">${product.price} Nok</h5>
                <a href="/cart.html" class="btn btn-primary">Add to Cart</a>
            </div>
        </div>
        </a>`

    });

}