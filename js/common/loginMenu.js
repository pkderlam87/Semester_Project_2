import { getUsername } from "../components/saveTokenAndUser.js";
import { doLogout } from "./logoutMenu.js";

export function loginMenu(login) {
    const { pathname } = document.location;
    const username = getUsername();
    let authLink = `<a href ="/login.html" class = "${pathname === "/login.html" ? "active" : ""}"><i class="far fa-user-circle"></i></a>`;
    if (username) {
        authLink = `<div class= "user">
        <p class="greetings"> Hi ${username}</p>
        <i class="ri-user-shared-2-fill" id="logout" title="Logout"></i></div>`;

    }
    login.innerHTML = `${authLink}`;
    doLogout();
}

