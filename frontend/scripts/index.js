async function fetchProducts() {
    /* produkte holen */
    const response = await fetch("/products");
    const products = await response.json();
    /* **************************************/
    const bodyElement = document.querySelector("body");
    for (const product of products) {
        const div = document.createElement("div");
        div.addEventListener("click", () => {
            window.location.href = "/product.html?product=" + product.id;
        });
        div.innerHTML = `
        <div class="card" style="width:315px">
            <img class="card-img-top" src="/img/${product.imageName}" alt="${product.productName}">
            <h2>${product.productName}</h2>
            <div>
                <span><del>${product.normalPrice}0 Fr.<del></span>
                <br>
                <span class="colorspecial">${product.specialOffer}</span>
                <button onclick="">Warenkorb</button>
            </div>
        </div>`;

        bodyElement.append(div);
    }
}

fetchProducts().then();

