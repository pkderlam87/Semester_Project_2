import { baseUrl } from "../components/api.js";

const banner = document.querySelector(".banner");

const homeUrl = baseUrl + "/banner";

(async function bannerHero() {
    try {
        const response = await fetch(homeUrl);
        const json = await response.json();

        // Access the image URL and alt text
        const imageUrl = json[0].image;
        const altText = json[0].alt || ""; // Optional, in case there's no alt text

        // Set the background image using the CSS url format
        banner.style.backgroundImage = `url(${imageUrl})`;
        // Optionally, you could set an aria-label or another attribute for accessibility
        banner.setAttribute("aria-label", altText);

    } catch (error) {
        console.log(error);
    }
})();