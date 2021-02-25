// КЛАСС КАТАЛОГА (КАТАЛОГ)
class Products {
    data = [];
    products = [];
    container = null;

    constructor(selector) {
        this.container = document.querySelector(selector);
    }

    fetchData() {
        this.data = [
            { title: 'Notebook', id: 1, price: 2000 },
            { title: 'Keyboard', id: 2, price: 200 },
            { title: 'Mouse', id: 3, price: 100 },
            { title: 'Gamepad', id: 4, price: 87 },
            { title: 'Monitor', id: 5, price: 800 },
            { title: 'Phone', id: 6, price: 900 },
            { title: 'Tablet', id: 7, price: 1100 },
            { title: 'Mat', id: 8, price: 50 },
            { title: 'Netbook', id: 9, price: 1300 },
            { title: 'Speakers', id: 10, price: 750 },
            { title: 'Microphone', id: 11, price: 330 },
            { title: 'Headphones', id: 12, price: 410 }
        ];
    }

    render() {
        for (let data of this.data) {
            const product = new ProductItem(data);
            this.products.push(product);
            this.container.insertAdjacentHTML('beforeend', product.render());
        }
    }

    totalPrice() {
        return this.products.reduce((accumulator, item) => accumulator = accumulator + item.price, 0)
    }

 }

// КЛАСС ОДНОГО ТОВАРА (КАТАЛОГ)
class ProductItem {
    title = '';
    price = 0;
    id = 0;
    img = '';

    constructor(product, img = 'https://placehold.it/200x150') {
        ({ title: this.title, price: this.price, id: this.id } = product);
        this.img = img;
    }

    render() {
        return `<div class="product-item">
                    <img class="imgProductItem" src="${this.img}" alt="${this.title}">
                    <div class="titleText">${this.title}</div>
                    <div class="priceText">PRICE: ${this.price}</div>
                    <button class="btn-buy">BUY</button>
                </div>`
    }
}

const render = (products) => {
    const productsList = products.map(item => renderProduct(item.title, item.id, item.price)).join('');
    document.querySelector('.products').innerHTML = productsList;
}

// ВЫПОЛНЯЕМ ИНИЦИАЛИЗАЦИЮ
let list = new Products('.products');

list.fetchData();
list.render();

console.log(list.totalPrice());

// КЛАСС КОРЗИНЫ (КОРЗИНА)
class Basket {

}

// КЛАСС ЭЛЕМЕНТА КОРЗИНЫ (КОРЗИНА)
class BasketItem {

}