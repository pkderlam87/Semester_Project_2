export function createContentCart(icon, target, purchaseProduct) {
    const purchaseContainer = document.querySelector(target);
    console.log(icon);
    purchaseContainer.innerHTML += `<div class="product__purchased">
    <i class= "${icon}"></i>
    <img src="${purchaseProduct.image}" alt="${purchaseProduct.alt}">
    <h4>${purchaseProduct.title}</h4>
    <h6>${purchaseProduct.price}</h6>
    <a href="/product_detail.html?id=${purchaseProduct.id}" class = "link">Product view</a>
    </div>`;
}
