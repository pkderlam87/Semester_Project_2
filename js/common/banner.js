import { baseUrl } from "../components/api.js";
const banner = document.querySelector(".banner");


const homeUrl = baseUrl + "/home";

(async function bannerHero() {
    try {
        const response = await fetch(homeUrl);
        const json = await response.json();
        banner.style.backgroundImage = `url("${baseUrl}${json.hero_banner.formats.medium.url}")`;
    } catch (error) {
        console.log(error);
    }
})();