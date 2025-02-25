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
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 6px 12px rgba(0,0,0,0.15);
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

        this.addHoverEffect();
    }

    addHoverEffect() {
        const card = this.shadowRoot.querySelector('.card');
        card.addEventListener('mouseenter', () => {
            card.style.backgroundColor = '#f0f0f0';
        });
        card.addEventListener('mouseleave', () => {
            card.style.backgroundColor = 'white';
        });
    }
}
customElements.define('product-card', ProductCard);

// Agregar al final del archivo
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('sugerencia-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const nombreLugar = document.getElementById('nombre-lugar').value;
        const ubicacion = document.getElementById('ubicacion').value;
        const descripcion = document.getElementById('descripcion').value;
        const imagenUrl = document.getElementById('imagen-url').value;

        alert(`Gracias por tu sugerencia de ${nombreLugar} en ${ubicacion}. La revisaremos pronto!`);
        form.reset();
    });
});
