// Custom Element para las tarjetas de lugares
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
