async function fetchProduct(){
    const productId = getParameterByName("product");
    const response = await fetch("/products/" + productId);
    const productData = await response.json();
    const bodyElement = document.querySelector("body");
    bodyElement.innerHTML += `<h1>${productData.productName}</h1>
    <img src="/img/${productData.imageName}" alt"${productData.productName}">
    <div class="card">
    
    <div>${productData.normalPrice}</div>
    </div>`
    
}

function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[[]]/g, '\$&');
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

fetchProduct().then();
