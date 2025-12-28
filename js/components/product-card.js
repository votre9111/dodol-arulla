class ProductCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const image = this.getAttribute('image');
    const name = this.getAttribute('name');
    const description = this.getAttribute('description');
    const price = this.getAttribute('price');
    const detailUrl = this.getAttribute('detail-url') || '#';

    this.shadowRoot.innerHTML = `
      <style>
        .product-card {
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 1.5rem;
          text-align: center;
          background-color: #fff;
          box-shadow: 0 4px 8px rgba(0,0,0,0.05);
          transition: transform 0.2s, box-shadow 0.2s;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
        }
        .product-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 16px rgba(0,0,0,0.1);
        }
        .product-card img {
          max-width: 100%;
          height: 180px;
          object-fit: cover;
          border-radius: 5px;
        }
        .product-card h3 {
          margin: 1rem 0 0.5rem;
          font-size: 1.25rem;
        }
        .product-card p {
          margin: 0.5rem 0;
          flex-grow: 1;
        }
        .price {
            font-size: 1.1rem;
            font-weight: bold;
            color: #c0392b;
            margin: 1rem 0;
        }
        .buttons {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            margin-top: 1rem;
        }
        .button {
          display: inline-block;
          background-color: #333;
          color: #fff;
          padding: 0.75rem 1rem;
          text-decoration: none;
          border-radius: 5px;
          cursor: pointer;
          border: none;
          font-size: 1rem;
          transition: background-color 0.2s;
        }
        .button:hover {
            background-color: #555;
        }
        .add-to-cart-btn {
            background-color: #27ae60;
        }
        .add-to-cart-btn:hover {
            background-color: #2ecc71;
        }
        .detail-button {
            background-color: transparent;
            color: #333;
            border: 1px solid #333;
        }
        .detail-button:hover {
            background-color: #333;
            color: #fff;
        }
      </style>
      <div class="product-card">
        <div>
            <img src="${image}" alt="${name}">
            <h3>${name}</h3>
            <p>${description}</p>
        </div>
        <div>
            <div class="price">Rp ${price}</div>
            <div class="buttons">
                <button class="button add-to-cart-btn">Tambah ke Keranjang</button>
                <a href="${detailUrl}" class="button detail-button">Lihat Detail</a>
            </div>
        </div>
      </div>
    `;

    this.shadowRoot.querySelector('.add-to-cart-btn').addEventListener('click', () => {
        this.dispatchEvent(new CustomEvent('add-to-cart', {
            bubbles: true,
            composed: true,
            detail: {
                name: name,
                price: parseFloat(price)
            }
        }));
    });
  }
}

customElements.define('product-card', ProductCard);
