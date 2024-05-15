class Product {
    constructor (productNameElement, stockElement, buyPriceElement, salePriceElement) {
        this.productNameElement = productNameElement
        this.stockElement = stockElement
        this.buyPriceElement = buyPriceElement
        this.salePriceElement = salePriceElement
        this.products = []
    }

    addProduct(){
        const productName = this.productNameElement.value;
        const stock = this.stockElement.value;
        const buyPrice = this.buyPriceElement.value;
        const salePrice = this.salePriceElement.value;
        if (!productName || !stock || !buyPrice || !salePrice) {
            window.alert("Please provide all the details for your product.");
            return;
        }
        const product = {
            productName,
            stock,
            buyPrice,
            salePrice
        };

        this.products.push(product);
        this.renderProducts()
        this.clearUI();
    }

    renderProducts(){
        document.querySelector('#product-list').innerHTML = '';
        this.products.forEach(product => {
            this.showProduct(product)
        })
    }

    showProduct(product){
        const productCard = document.createElement('div')
        productCard.classList.add('card')
        productCard.innerHTML = `
        <div class="card-body">
            <h5 class="card-title">${product.productName}</h5>
            <p class="card-text">Stock: ${product.stock}</p>
            <p class="card-text">Buy Price (suppliers): ${product.buyPrice}€</p>
            <p class="card-text">Sale Price (customers): ${product.salePrice}€</p>
        </div>`
        document.querySelector('#product-list').appendChild(productCard);
    }

    clearUI(){
        this.productNameElement.value = ""
        this.stockElement.value = ""
        this.buyPriceElement.value = ""
        this.salePriceElement.value = ""
    }

    sortProducts(){
        this.products.sort((a,b)=> a.productName.localeCompare(b.productName))
        this.renderProducts()
    }

    sortStockProducts(){
        this.products.sort((a, b) => a.stock - b.stock )
        this.renderProducts()
    }
}

const productNameElement = document.querySelector("[data-product-name]")
const stockElement = document.querySelector("[data-product-stock]")
const buyPriceElement = document.querySelector("[data-product-buy-price]")
const salePriceElement = document.querySelector("[data-product-sale-price]")
const addBtn = document.querySelector("[data-btn-add-product]")
const orderNameBtn = document.querySelector("[data-btn-order-by-name]")
const orderStockBtn = document.querySelector("[data-btn-order-by-stock]")

const product = new Product(productNameElement, stockElement, buyPriceElement, salePriceElement);

addBtn.addEventListener("click", () => {
    product.addProduct()
})

orderNameBtn.addEventListener("click", () => {
    product.sortProducts();
})

orderStockBtn.addEventListener("click", () => {
    product.sortStockProducts();
})