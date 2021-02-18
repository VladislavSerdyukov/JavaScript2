// данные которые приходят якобы от сервера
const data = [
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
// функция, которая генерирует (рендерит) разметку одного товара
const renderProduct = (title, id, price) => {
    return `
    <div class="product-item">
        <div></div>
        <h3>${title}</h3>
        <p>PRICE: ${price}</p>
        <button class="btn-buy">BUY</button>
    </div>
    `;
};
// функция, которая получает массив товаров и рендерит его
const render = (products) => {
    const productsList = products.map(item => renderProduct(item.title, item.id, item.price)).join('');
    document.querySelector('.products').innerHTML = productsList;
}

render(data);

// Не нашел решений сокращения или оптимизации данного кода.