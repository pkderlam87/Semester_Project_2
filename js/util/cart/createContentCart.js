export function createContentCart(target, purchaseProduct) {
    const purchaseContainer = document.querySelector(target);
    purchaseContainer.innerHTML += `<div class="product__purchased">
    <img src="${purchaseProduct.image}" alt="${purchaseProduct.alt}">
    <h5>${purchaseProduct.title}</h5>
    <h6>${purchaseProduct.price} Nok</h6>
    <a href="/product_detail.html?id=${purchaseProduct.id}" class = "link">Product view</a>
    </div>`;
}
