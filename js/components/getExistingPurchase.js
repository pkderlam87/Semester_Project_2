export function getExistingPurchase() {
    const purchase = localStorage.getItem("purchase");
    const cart = document.querySelector("#cart");
    if (!purchase) {
        return [];
    } else {
        cart.innerHTML = `<i class="ri-shopping-cart-2-fill" title="See your items"></i>`;
        return JSON.parse(purchase);
    }
}