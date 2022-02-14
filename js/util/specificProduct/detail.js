import { displayMessage } from "../../common/displayMessage.js";
import { baseUrl } from "../../components/api.js";
import { createDetails } from "./createDetails.js";


const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if (!id) {
    document.location.href = "/";
}
const productURL = baseUrl + "/products/" + id;



(async function () {
    try {
        const response = await fetch(productURL);
        const details = await response.json();
        document.title = `Smoof shoes | ${details.title}`;
        createDetails(details);
    } catch {
        console.log(error);
        displayMessage("error", error, ".message__place");
    }
})();