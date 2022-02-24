export function savePurchase(purchase) {
    localStorage.setItem("purchase", JSON.stringify(purchase));
    const cart = document.querySelector("#cart");
    cart.innerHTML = `<i class="ri-shopping-cart-2-fill" title="See your items"></i>`;
}