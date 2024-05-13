class Product {
    constructor (productNameElement, stockElement, buyPriceElement, salePriceElement) {
        this.productNameElement = productNameElement
        this.stockElement = stockElement
        this.buyPriceElement = buyPriceElement
        this.salePriceElement = salePriceElement
    }

    addProduct(productName, stock, buyPrice, salePrice){
        if (productName && stock && buyPrice && salePrice) {
            this.productNameElement.value = productName;
            this.stockElement.value = stock;
            this.buyPriceElement.value = buyPrice;
            this.salePriceElement.value = salePrice;
            this.showProduct(productName, stock, buyPrice, salePrice);
            return 
        } else {
            window.alert("Please provide all the details for your product.")
        }
        
    }

    showProduct(productName, stock, buyPrice, salePrice){
        const productCard = document.createElement('div')
        productCard.classList.add('card')
        productCard.innerHTML = `
        <div class="card-body">
            <h5 class="card-title">${productName}</h5>
            <p class="card-text">Stock: ${stock}</p>
            <p class="card-text">Buy Price (suppliers): ${buyPrice}€</p>
            <p class="card-text">Sale Price (customers): ${salePrice}€</p>
        </div>`
        document.querySelector('#product-list').appendChild(productCard);
        this.clearUI()
    }

    clearUI(){
        this.productNameElement.value = ""
        this.stockElement.value = ""
        this.buyPriceElement.value = ""
        this.salePriceElement.value = ""
    }
}

const addBtn = document.querySelector("[data-btn-add-product]")

addBtn.addEventListener("click", () => {
    const productNameElement = document.querySelector("[data-product-name]")
    const stockElement = document.querySelector("[data-product-stock]")
    const buyPriceElement = document.querySelector("[data-product-buy-price]")
    const salePriceElement = document.querySelector("[data-product-sale-price]")

    const product = new Product(productNameElement, stockElement, buyPriceElement, salePriceElement);

    product.addProduct(productNameElement.value, stockElement.value, buyPriceElement.value, salePriceElement.value)
})