import { getExistingPurchase } from "../../components/getExistingPurchase.js";
import { savePurchase } from "../../components/savePurchase.js";

export function handleClick() {

    this.classList.toggle("ri-shopping-cart-2-fill");
    this.classList.toggle("ri-shopping-cart-2-line");

    const id = this.dataset.id;
    const title = this.dataset.title;
    const price = this.dataset.price;
    const image = this.dataset.image;
    const alt = this.dataset.alt;

    const currentPurchase = getExistingPurchase();


    const purchaseExists = currentPurchase.find(function (purchase) {
        return purchase.id === id;
    });

    if (purchaseExists === undefined) {
        const purchase = { id: id, title: title, price: price, image: image, alt: alt };
        currentPurchase.push(purchase);
        savePurchase(currentPurchase);
    } else {
        const newPurchase = currentPurchase.filter((purchase) => purchase.id !== id);
        savePurchase(newPurchase);
    }
}
