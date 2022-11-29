let form = document.querySelector('#form');
const title_input = document.querySelector('#title');
title_input.setAttribute('required', 'true');
const price_input = document.querySelector('#price');
price_input.setAttribute('required', 'true');
const section_products = document.querySelector('#products');
const total_price_btn = document.querySelector('#total_price');
const password_btn = document.querySelector('#password_btn');
const password_input = document.querySelector('#password_input')


let products = [];

form.onsubmit = (e) => {
    e.preventDefault();
    // console.log(title_input.value, price_input.value);
    products.push({title: title_input.value, price: price_input.value});

    // createNode(title_input.value, price_input.value);
    newProducts();

    title_input.value = '';
    price_input.value = '';

    console.log(products);
}

function createNode(title, price) {
    let div = document.createElement('div');
    div.classList.add('products')
    let title_p = document.createElement('p');
    let price_p = document.createElement('p');

    title_p.innerText = title;
    price_p.innerText = price;

    div.addEventListener('dblclick', () => alert(title));

    div.append(title_p, price_p);
    section_products.append(div);
}

let sum_price = 0;

function newProducts() {
    section_products.innerHTML = '';
    sum_price = 0;
    for(let i = 0; i < products.length; i++) {
        createNode(products[i].title, products[i].price);
        sum_price += Number.parseInt(products[i].price, 10);
    }
    return sum_price;
}

total_price_btn.addEventListener('click', () => alert(`Итоговая сумма товаров: ${sum_price}`));

password_btn.addEventListener('click', () => {
    if(password_input.getAttribute('type') === 'text') {
        password_input.setAttribute('type', 'password');
    } else {
        password_input.setAttribute('type', 'text');
    }
});

