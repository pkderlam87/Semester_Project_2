export function saveFavorites(favorites) {
    localStorage.setItem("favorites", JSON.stringify(favorites));
}