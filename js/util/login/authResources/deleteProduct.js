import { baseUrl } from "../../../components/api.js";
import { getToken } from "../../../components/saveTokenAndUser.js";
import { displayMessage } from "../../../common/displayMessage.js";

export async function deleteProduct(event) {
    console.log(event.target.dataset.id);
    const id = this.dataset.id;
    const doDelete = confirm("Are you sure? Do you want to delete this item?");
    if (doDelete) {
        const url = baseUrl + "/products/" + id;
        const token = getToken();
        const options = {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
            }
        };
        try {
            const response = await fetch(url, options);
            const json = await response.json();
            location.href = "/products.html";
        } catch (error) {
            console.log(error);
            displayMessage("error", "This item can't delete", ".message__place");
        }
    }

}
