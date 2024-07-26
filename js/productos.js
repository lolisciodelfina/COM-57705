const products = [
    {id: 1, name: "Scon relleno", price: 4200},
    {id: 2, name: "Focaccia", price: 5500},
    {id: 3, name: "Tostado", price: 3800},
    {id: 4, name: "Chipa XL", price: 4500},
    {id: 5, name: "Porción de torta", price: 5300},
    {id: 6, name: "Cookie", price: 2700},
    {id: 7, name: "Alfajor", price: 3100},
    {id: 8, name: "Budín", price: 3300},
]

let cart = loadCartFromLocalStorage();
const errorCarritoDiv = document.getElementById('error_carrito');
errorCarritoDiv.style.color = 'red';
function mandarMjeDeError(productId){
    errorCarritoDiv.innerHTML = `<p>Producto con ID: ${productId} no encontrado</p>`;    
}
function addToCart(productId, quantity) {
    const product = products.find(p => p.id === productId);
    if (!product) {
        mandarMjeDeError(productId)
        return;
    }

    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
        cartItem.quantity += quantity;
        cartItem.totalPrice = cartItem.quantity * product.price;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity,
            totalPrice: quantity * product.price
        });
    }

    saveCartToLocalStorage();
    renderCart();
}

function renderProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `
            <p>${product.name} - $${product.price}</p>
            <button onclick="addToCart(${product.id}, 1)" class="button_grey">Agregar al Carrito</button>
        `;
        productList.appendChild(productDiv);
    });
}

function renderCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = '';
    cart.forEach(item => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.innerHTML = `
            <p>ID: ${item.id}, Nombre: ${item.name}, Cantidad: ${item.quantity}, Precio Total: $${item.totalPrice}</p>
        `;
        cartDiv.appendChild(cartItemDiv);
    });
}

function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCartFromLocalStorage() {
    const cartData = localStorage.getItem('cart');
    return cartData ? JSON.parse(cartData) : [];
}

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    renderCart();
});

const cardProductos = document.getElementById('cards');
const peticion = async () => {
    const respuesta = await fetch('/productos.json');
    const datos = await respuesta.json();
    const data1= await datos
    for(item of data1) {
        const card = document.createElement('div');
        card.innerHTML=`
            <div class="card" style="width:18rem; heigth: 32rem;">
                <img class="card-img-top" src=${item.imagen} alt=${item.nombre}/>
                <div class= "card-body">
                    <h5 class="card-title">${item.nombre}</h5>
                    <p class="card-text">${item.descripcion}</p>
                    <p class="card-text">Precio: ${item.precio}</p>
                    <p class="card-text">Stock: ${item.stock}</p>
                    <a href="#" class=" btn btn-succes">Agregar al carrito</a>
                </div>
            </div>
        `
        cardProductos.appendChild(card);
    }
}
peticion();