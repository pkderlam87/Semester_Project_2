export function getExistingPurchase() {
    const purchase = localStorage.getItem("purchase");

    if (!purchase) {
        return [];
    } else {
        return JSON.parse(purchase);
    }
}