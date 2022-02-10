export function getExistingFavorite() {
    const favorites = localStorage.getItem("favorites");

    if (favorites === null) {
        return [];
    } else {
        return JSON.parse(favorites);
    }
}