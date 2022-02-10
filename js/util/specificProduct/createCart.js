export function createCart(json) {
    json.forEach(function (item) {
        let cssClass = "far";
        const doesObjectExist = favoritesArticles.find(function (favorites) {
            return parseInt(favorites.id) === item.id;
        });
        if (doesObjectExist) {
            cssClass = "fa";
        }
        createContentCard(cssClass, item);
        const favorites = document.querySelectorAll(".buttons i");
        favorites.forEach((button) => {
            button.addEventListener("click", handleClick);
        });
    })
}

function handleClick(button) {
    this.classList.toggle("fa");
    this.classList.toggle("far");

    const id = this.dataset.id;
    const title = this.dataset.article;
    const author = this.dataset.author;
    const summary = this.dataset.summary;
    const currentFavorites = getExistingFavorite();

    const articleExists = currentFavorites.find(function (favorite) {
        return favorite.id === id;
    });

    if (articleExists === undefined) {
        const article = { id: id, title: title, author: author, summary: summary };
        currentFavorites.push(article);
        saveFavorites(currentFavorites);
    } else {
        const newFavorite = currentFavorites.filter((favorite) => favorite.id !== id);
        saveFavorites(newFavorite);
    }
}