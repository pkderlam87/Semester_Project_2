import { displayMessage } from "../../common/displayMessage.js";
import { doLogin } from "./doLogin.js";
import { loginMenu } from "../../common/loginMenu.js";

const form = document.querySelector("#login__form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");

loginMenu();

form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    if (usernameValue.length === 0 || passwordValue.length === 0) {
        return displayMessage("noResults", "Invalid values", ".message__place");
    }
    doLogin(usernameValue, passwordValue);
}