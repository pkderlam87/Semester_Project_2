const instagram = document.querySelector(".fa-instagram");
const facebook = document.querySelector(".fa-facebook-square");
const pinterest = document.querySelector(".fa-pinterest-square");
const twiter = document.querySelector(".fa-twitter-square");
const youtube = document.querySelector(".fa-youtube");

function newWindowInsta() {
    window.open("https://www.instagram.com", instagram, "width=400,height=400");
}
instagram.addEventListener("click", newWindowInsta);
function newWindowfacebook() {
    window.open("https://www.facebook.com", facebook, "width=400,height=400");
}
facebook.addEventListener("click", newWindowfacebook);
function newWindowPinterest() {
    window.open("https://www.pinterest.com", pinterest, "width=400,height=400");
}
pinterest.addEventListener("click", newWindowPinterest);
function newWindowTwiter() {
    window.open("https://twitter.com", twiter, "width=400,height=400");
}
twiter.addEventListener("click", newWindowTwiter);
function newWindowYoutube() {
    window.open("https://www.youtube.com", youtube, "width=400,height=400");
}
youtube.addEventListener("click", newWindowYoutube);