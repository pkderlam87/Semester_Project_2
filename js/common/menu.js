import { getExistingPurchase } from "../components/getExistingPurchase.js";
import { loginMenu } from "./loginMenu.js";

const menu = document.querySelector(".wrap_nav_favorite_cart_login");
(function showMenu() {
    menu.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a href="/index.html"><img src="/images/Logo.png" alt="The Smoof Shoes logo"
                        class="logo"></a>
                    <a href="/index.html" class="nav-link active home">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active product__navbar" href="/products.html">Products</a>
                </li>
            </ul>
        </div>
    </div>
    </nav>
    <div class="favorite_cart_login">
    <a href="/index.html"><img src="/images/Logo.png" alt="The Smoof Shoes logo"
        class="favorite_cart_login--logo"></a>
    <a href="/cart.html" id="cart"><i class="ri-shopping-cart-2-line" title="Cart is empty"></i></a>
    <div class="login__icon"></div>
    </div>`;
    const cart = document.querySelector("#cart");
    changeIconCart(cart);
    const login = document.querySelector(".login__icon");
    loginMenu(login);
    const homeClass = document.querySelector(".home");
    const productClass = document.querySelector(".product__navbar");
    breadcrumb(homeClass, productClass);
})();
function changeIconCart(cart) {
    const purchaseCart = getExistingPurchase();
    if (purchaseCart.length === 0) {
        cart.innerHTML = `<i class="ri-shopping-cart-2-line" title="Cart is empty"><div class = "circle__number__products">0</div></i>`;
    }
    if (purchaseCart.length > 0) {
        cart.innerHTML = `<i class="ri-shopping-cart-2-fill" title="See your items"><div class = "circle__number__products">${purchaseCart.length}</div></i>`;
    }
}
function breadcrumb(home, product) {
    let page = document.location.href;
    if (page.includes("index")) {
        home.style.textDecoration = "underline";
    } if (page.includes("product")) {
        product.style.textDecoration = "underline";
    }
}
