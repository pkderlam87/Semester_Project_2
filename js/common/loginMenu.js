import { getUsername } from "../components/saveTokenAndUser.js";

export function loginMenu() {
    const { pathname } = document.location;
    const loginIcon = document.querySelector(".login__icon");
    const username = getUsername();
    let authLink = `<a href ="/login.html" class = "${pathname === "/login.html" ? "active" : ""}"><i class="far fa-user-circle"></i></a>`;
    if (username) {
        authLink = `<p> Hi ${username}<i class="ri-user-shared-2-fill" id="logout"></i></p>`;
    }
    loginIcon.innerHTML = `${authLink}`;
    const logoutButton = document.querySelector("#logout");
    logoutButton.onclick = function doLogout() {
        const confirmMessage = confirm("Do you want to logout?");
        if (confirmMessage) {
            localStorage.removeItem("user");
            location.href = "/index.html";
        }
    }
}

