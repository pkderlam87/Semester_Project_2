export function savePurchase(purchase) {
    localStorage.setItem("purchase", JSON.stringify(purchase));
}