let products = []
function parseDataToProducts() {
    for(let i = 0; i < data.length; i++) {
        let map = data[i]
        let product = new Product(map["description"], map["price"],map["image"] ,map["Sizes"], map["Color"], map["name"] )
        products.push(product)
    }
}

function renderAllProducts() {
    let container = document.getElementById("products")
    for(let i = 0; i < products.length; i++) {
        let product = products [i]
        container.innerHTML += product.htmlCard()
    }
}

function productSelected (pos) {
    let productselected = Products [pos]
    window.location ="./product.hmtml" + productselected.title
}

parseDataToProducts()
renderAllProducts()