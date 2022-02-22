import { displayMessage } from "../../common/displayMessage.js";
import { saveToken, saveUser } from "../../components/saveTokenAndUser.js";
import { baseUrl } from "../../components/api.js";


export async function doLogin(username, password) {
    const url = baseUrl + "/auth/local";
    const data = JSON.stringify({ identifier: username, password: password });
    const options = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
        },
    };
    try {
        const response = await fetch(url, options);
        const json = await response.json();

        if (json.user) {
            saveToken(json.jwt);
            saveUser(json.user);
            location.href = "/products.html";
        }
        if (json.error) {
            displayMessage("noResults", "Invalid login details", ".message__place");
        }
    } catch (error) {
        console.log(error);
    }
}