const menu = document.querySelector(".wrap_nav_favorite_cart_login");
(function showMenu(menu) {
    menu.innerHTML += `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
<div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <a href="/index.html"><img src="/images/Logo-white.png" alt="The Smoof Shoes logo"
                        class="logo"></a>
                <a href="/index.html" class="nav-link home">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link active" href="/products.html">Products</a>
            </li>
        </ul>
    </div>
</div>
</nav>
<div class="favorite_cart_login">
<a href="/index.html"><img src="/images/Logo-white.png" alt="The Smoof Shoes logo"
        class="favorite_cart_login--logo"></a>
<a href="/cart.html" id="cart"><i class="ri-shopping-cart-2-line" title="Cart is empty"></i></a>
<div class="login__icon"></div>
</div>`})();