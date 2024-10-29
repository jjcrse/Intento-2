const params =new URLSearchParams (window.location-search)
const nameFromUrl =params.get("name")

function getProduct() {
    for(let i = 0; i < data.length; i++) {
        let map = data[i]
        let title = map["name"]
        if(title === nameFronUrl) {
            let product = new Product(map["description"], map["price"],map["image"] ,map["Sizes"], map["Color"], map["name"] )
            return product
        }
    }
}

function renderproduct() {
    let product = getProduct()

    let titleH1 = document.getElementById ("name")
    nameH1.innerHTML = product.name

    let descriptionP = document.getElementById ("description")
    descriptionP.innerHTML = product.description

    let priceH3 = document.getElementById("prices")
    priceH3.innerHTML = "$ " + product.price

    let mainImg = document.getElementById("maing-img")
    mainImg.src = product-image[0]
}

renderproduct()