export function displayMessage(messageType, message = "Something went wrong", target) {
    const element = document.querySelector(target);
    element.style.display = "block";
    element.innerHTML = `<div class="message ${messageType}"><h4>${message}</h4></div>`;
}