/*
    - Імітуємо наповнення інтернет магазину товарами :

    Створити форму з наступними полями :
        - назва товару
        - кількість товару
        - ціна товару
        - картинка товару (посилання з інтернету)

    Зберігати товари в масив в локалсорадж. При збережені товару з форми,
    action не повинно відбуватись (preventDefault)
    створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html,
    при переході на який відобразити на сторінці всі товари.

    На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
    До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар
*/

function createProduct() {
    let productForm = document.forms.add_product_form;
    productForm.onsubmit = function (e) {
        e.preventDefault();

        let id = new Date().getTime();
        let name = this.name.value;
        let quantity = this.quantity.value;
        let price = this.price.value;
        let imageUrl = this.image_url.value;
        let product = {id, name, quantity, price, imageUrl};
        let products = JSON.parse(localStorage.getItem('products') || '[]');

        products.push(product);

        localStorage.setItem('products', JSON.stringify(products));
        location.href = 'list.html';
    }
}

function loadProducts() {
    let wrap = document.getElementsByClassName('wrap')[0];
    wrap.innerText = '';
    let products = JSON.parse(localStorage.getItem('products') || '[]');
    for (const product of products) {

        let div = document.createElement('div');
        let name = document.createElement('h2');
        let quantity = document.createElement('p');
        let price = document.createElement('p');
        let imageUrl = document.createElement('img');
        let delButton = document.createElement('button');

        div.classList.add('product');
        delButton.onclick = function () {
            removeProduct(product.id);
        }

        name.innerText = 'Name: ' + product.name;
        quantity.innerText = 'Quantity: ' + product.quantity;
        price.innerText = 'Price: ' + product.price;
        delButton.innerText = 'Remove';
        imageUrl.src = product.imageUrl || '';

        div.append(imageUrl, name, quantity, price, delButton);
        wrap.appendChild(div);
    }
}

function clearProducts() {
    localStorage.setItem('products', '[]');
    location.reload();
}

function removeProduct(id) {
    let products = JSON.parse(localStorage.getItem('products') || '[]');
    for (let i = 0; i < products.length; i++) {
        if (+products[i].id === +id) {
            products.splice(i, 1);
            break;
        }
    }
    localStorage.setItem('products', JSON.stringify(products));
    location.reload();
}