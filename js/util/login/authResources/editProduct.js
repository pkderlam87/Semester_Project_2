import { loginMenu } from "../../../common/loginMenu.js";
import { displayMessage } from "../../../common/displayMessage.js";
import { baseUrl } from "../../../components/api.js";

const container = document.querySelector(".container");

loginMenu();

(function editProduct() {
    const queryString = document.location.search;
    const params = new URLSearchParams(queryString);
    const id = params.get("id");

    if (!id) {
        document.location.href = "/";
    }
    const productURL = baseUrl + "/products/" + id;
    if (!id) {
        document.location.href = "/products.html";
    }
    (async function edit() {
        try {
            const response = await fetch(productURL);
            const edition = await response.json();
            console.log(edition);
            document.title = `Smoof shoes | Edit ${edition.title}`;
            createEditFields(edition);

        } catch {
            console.log(error);
            displayMessage("error", error, ".message__place");
        }
    })();
})();
function createEditFields(editionInfo) {
    console.log(editionInfo);
    container.innerHTML = "";
    container.innerHTML = `<form class="edit__form">
                    <div class="message-container"></div>
                        <h4>Product's title</h4>
                        <div class="form-floating mb-3">
                            <input type="title" class="form-control" id="floatingInput">  <label for="floatingInput">${editionInfo.title}</label>
                        </div>
                        <h4>Product's price</h4>
                        <div class="form-floating mb-3">
                            <input type="price" class="form-control" id="floatingInput">
                            <label for="floatingInput">${editionInfo.price} Nok</label>
                        </div>
                    <h4>Product's description</h4>
                    <div class="form-floating">
                            <textarea class="form-control" id="floatingTextarea2" style="height: 100px"></textarea>
                            <label for="floatingTextarea2">${editionInfo.description}</label>
                    </div>
                    <h4>Product's image</h4>
                    <div class="form-floating mb-auto">
                        <img src="${editionInfo.image_url}" alt = "${editionInfo.title}">    
                        <textarea class="form-control" id="floatingTextarea2" style="height: 100px"></textarea>
                    </div>
                    <h4>Featured product</h4>
                    <div>
                        <label for="featured">Featured</label>
                        <input type="checkbox" value="featured" id="featuredProduct" />
                    </div>
                    <button class="btn btn-primary" type="submit" id="update">Save <i class="ri-edit-line"></i></button>
            </div>
            </form>`;
}
