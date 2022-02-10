import { getExistingFavorite } from "../js/components/getExistFavorite.js";
import { displayMessage } from "../js/utils/displayMessage.js";
import { createContentCard } from "./common/createContentCard.js";
const articlesContainer = document.querySelector(".articles");
const clearButton = document.querySelector(".message-container");

const favorites = getExistingFavorite();

if (favorites.length === 0) {
    displayMessage("noResults", "Don't have favorite articles yet", ".message-container");
}
if (favorites.length > 0) {
    clearButton.innerHTML = `<button class="btn" id="clearLocalStorage">Clear all <i class="far fa-trash-alt"></i></button>`;
    const clearLocalStorage = document.querySelector("#clearLocalStorage");
    clearLocalStorage.addEventListener("click", clearAllFromLocalStorage);
}
articlesContainer.innerHTML = "";
favorites.forEach((favorite) => {
    createContentCard("fas", favorite);
});

function clearAllFromLocalStorage() {
    localStorage.clear();
    articlesContainer.innerHTML = "";
    displayMessage("noResults", "Don't have more favorite articles", ".message-container");
}