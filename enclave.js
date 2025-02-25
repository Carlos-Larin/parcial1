// Custom Element para las tarjetas de producto (lugares)
class ProductCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        const nombre = this.getAttribute('name');
        const lugar = this.getAttribute('lugar');
        const image = this.getAttribute('image');
        const description = this.getAttribute('description');

        this.shadowRoot.innerHTML = `
            <style>
                .card {
                    border-radius: 5px;
                    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                    padding: 15px;
                    background-color: white;
                }
                img {
                    max-width: 100%;
                    height: auto;
                    border-radius: 5px;
                    margin-bottom: 10px;
                }
            </style>
            <div class="card">
                <h3>${nombre}</h3>
                <img src="${image}" alt="${nombre}">
                <p>${description}</p>
                <p>Lugar: ${lugar}</p>
            </div>
        `;
    }
}
customElements.define('product-card', ProductCard);

// Custom Element para las tarjetas de oferta
class OfferCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        const title = this.getAttribute('title');
        const description = this.getAttribute('description');
        const image = this.getAttribute('image');

        this.shadowRoot.innerHTML = `
            <style>
                .card {
                    border-radius: 5px;
                    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                    padding: 15px;
                    background-color: white;
                }
                img {
                    max-width: 100%;
                    height: auto;
                    border-radius: 5px;
                    margin-bottom: 10px;
                }
            </style>
            <div class="card">
                <h3>${title}</h3>
                <img src="${image}" alt="${title}">
                <p>${description}</p>
            </div>
        `;
    }
}
customElements.define('offer-card', OfferCard);

// Custom Element para las entradas de blog
class BlogPost extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        const title = this.getAttribute('title');
        const date = this.getAttribute('date');
        const image = this.getAttribute('image');
        const excerpt = this.getAttribute('excerpt');

        this.shadowRoot.innerHTML = `
            <style>
                .card {
                    border-radius: 5px;
                    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                    padding: 15px;
                    background-color: white;
                }
                img {
                    max-width: 100%;
                    height: auto;
                    border-radius: 5px;
                    margin-bottom: 10px;
                }
            </style>
            <div class="card">
                <h3>${title}</h3>
                <p>Fecha: ${date}</p>
                <img src="${image}" alt="${title}">
                <p>${excerpt}</p>
            </div>
        `;
    }
}
customElements.define('blog-post', BlogPost);


// Carrito de compras
const carritoItems = document.getElementById('carrito-items');
const carritoTotal = document.getElementById('carrito-total');
const carritoCount = document.getElementById('carrito-count');
let total = 0;
let itemCount = 0;

// Modal del carrito
const modalCarrito = document.getElementById('modal-carrito');
const verCarritoButton = document.getElementById('ver-carrito');
const closeButton = document.querySelector('.close-button');

// Función para abrir el modal
verCarritoButton.addEventListener('click', () => {
    modalCarrito.style.display = 'block';
});

// Función para cerrar el modal
closeButton.addEventListener('click', () => {
    modalCarrito.style.display = 'none';
});

// Cerrar el modal si se hace clic fuera del contenido
window.addEventListener('click', (event) => {
    if (event.target == modalCarrito) {
        modalCarrito.style.display = 'none';
    }
});

// Escuchar el evento add-to-cart
document.addEventListener('add-to-cart', (event) => {
    const product = event.detail;
    const item = document.createElement('div');
    item.innerHTML = `
        <img src="${product.image}" alt="${product.name}" style="width: 50px; margin-right: 10px;">
        <span>${product.name} - ${product.price} €</span>
    `;
    carritoItems.appendChild(item);

    total += parseFloat(product.price);
    itemCount++;

    carritoTotal.textContent = total.toFixed(2);
    carritoCount.textContent = itemCount;
});

// Manejo del formulario de contacto
const contactForm = document.getElementById('contact-form');
const formOutput = document.getElementById('form-output');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    if (name) {
        formOutput.textContent = `Gracias por tu mensaje, ${name}. Te responderemos pronto.`;
        contactForm.reset();
    } else {
        formOutput.textContent = 'Por favor, completa todos los campos.';
    }
});
