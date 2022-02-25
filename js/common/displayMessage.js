export function displayMessage(messageType, message = "Something went wrong", target) {
    const element = document.querySelector(target);
    element.style.display = "block";
    element.innerHTML = `<div class="message ${messageType}"><h2>${message}</h2></div>`;
}