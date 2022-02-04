import { baseUrl } from "../components/api.js";
const carouselItem = document.querySelectorAll(".carousel-item");

const productsFeaturedUrl = baseUrl + "/products?featured=true";

(async function carousel() {
    try {
        const response = await fetch(productsFeaturedUrl);
        const json = await response.json();
        for (let i = 0; i < json.length; i++) {
            console.log(json[i].image.alternativeText);
            console.log(baseUrl + json[i].image.formats.medium.url);
            carouselItem[i].innerHTML = `<img src="${baseUrl}${json[i].image.formats.medium.url}" class="d-block w-100" alt="${json[i].image.alternativeText}">)`;
        }
    } catch (error) {
        console.log(error);
    }
})();