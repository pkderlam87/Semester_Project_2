import { baseUrl } from "../components/api.js";
import { showProducts } from "./products.js";

const featuredProductsUrl = baseUrl + "/products?featured=true";

(async function products() {
    try {
        const response = await fetch(featuredProductsUrl);
        const json = await response.json();
        showProducts(json);
    } catch (error) {
        console.log(error);
    }
})();









/*function carousel(json) {
   console.log(json);
   let a = 0;
   for (let i = 0; i < json.length; i++) {
       if (json[i].featured) {
           arrayFeaturedProducts[a++] += json[i];


           console.log(arrayFeaturedProducts);
           /*  carouselItem[i].innerHTML += `<img src="${baseUrl}${json[i].image.formats.small.url}" class="d-block w-100" alt="${json[i].image.alternativeText}">)`;*/
/* featuredProducts.innerHTML += `<a href = "/product_detail.html"><div class="card" style="width: 18rem;">
 <img src="${baseUrl}${json[i].image.formats.small.url}" class="card-img-top" alt="${json[i].image.alternativeText}">
 <div class="card-body">
   <h5 class="card-title">${json[i].title}</h5>
   <h5 class="card-text">${json[i].price} Nok</h5>
   <a href="/cart.html" class="btn btn-primary">Add to Cart</a>
 </div>
</div></a>`
}
}
}*/
