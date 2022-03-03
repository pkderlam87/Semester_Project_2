export function getExistingPurchase() {
    const purchase = localStorage.getItem("purchase");
    const cart = document.querySelector("#cart");
    if (!purchase) {
        return [];
    } else {
        cart.innerHTML = `<i class="ri-shopping-cart-2-fill" title="See your items"><div class = "circle__number__products">${JSON.parse(purchase).length}</div></i>`;
        return JSON.parse(purchase);
    }
}