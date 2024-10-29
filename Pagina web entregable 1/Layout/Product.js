class Product {
    constructor(description,price,image,Sizes,Color,name) {
        this.description =  description
        this.price = price
        this.image = image
        this.Sizes = Sizes
        this.Color = Color
        this.name = name    
    } 
    
    htmlCard() {
        return `
            <div class="product">
                        <img src="${this.image}" alt="Calzado">
                        <h3>${this.name}</h3>
                        <p>${this.description}</p>
                        <p class="price">${this.price}</p>
                        <button>Añadir al carrito</button>
                    </div>
        
        `
    }
}