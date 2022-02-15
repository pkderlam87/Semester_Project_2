export function doLogout() {
    const logoutButton = document.querySelector("#logout");
    if (logoutButton) {
        logoutButton.onclick = function () {
            const confirmMessage = confirm("Do you want to logout?");
            if (confirmMessage) {
                localStorage.removeItem("user");
                location.href = "/index.html";
            }
        }
    }
}