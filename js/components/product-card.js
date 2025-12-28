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

    // Format harga ke dalam format mata uang Rupiah
    const formattedPrice = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);

    this.shadowRoot.innerHTML = `
      <style>
        .product-link {
          text-decoration: none;
          color: inherit;
          display: block;
          height: 100%;
        }
        .product-card {
          border: 1px solid #eee;
          border-radius: var(--border-radius, 8px);
          text-align: center;
          background-color: #fff;
          box-shadow: var(--shadow, 0 4px 8px rgba(0,0,0,0.05));
          transition: transform 0.3s, box-shadow 0.3s;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          overflow: hidden;
        }
        .product-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 24px rgba(0,0,0,0.1);
        }
        .card-image-container {
            width: 100%;
            padding-top: 75%; /* Aspect ratio 4:3 */
            position: relative;
            overflow: hidden;
        }
        .card-image-container img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s;
        }
        .product-card:hover img {
            transform: scale(1.05);
        }
        .card-content {
            padding: 1.5rem;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
        }
        .card-content h3 {
          margin: 0 0 0.5rem;
          font-size: 1.25rem;
          color: var(--primary-color, #333);
        }
        .card-content p {
          margin: 0.5rem 0;
          flex-grow: 1;
          font-size: 0.9rem;
          color: var(--text-color, #666);
        }
        .price {
            font-size: 1.2rem;
            font-weight: bold;
            color: var(--accent-color, #c0392b);
            margin-top: 1rem;
        }
      </style>
      <a href="${detailUrl}" class="product-link">
        <div class="product-card">
          <div class="card-image-container">
            <img src="${image}" alt="${name}">
          </div>
          <div class="card-content">
            <h3>${name}</h3>
            <p>${description}</p>
            <div class="price">${formattedPrice}</div>
          </div>
        </div>
      </a>
    `;
  }
}

// Hanya definisikan custom element jika belum ada
if (!customElements.get('product-card')) {
  customElements.define('product-card', ProductCard);
}
