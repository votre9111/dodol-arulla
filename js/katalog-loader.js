import products from './product-data.js';

document.addEventListener('DOMContentLoaded', () => {
  const productGrid = document.getElementById('product-grid');

  if (productGrid) {
    products.forEach(product => {
      const card = document.createElement('product-card');

      card.setAttribute('name', product.name);
      card.setAttribute('image', product.image);
      card.setAttribute('price', product.price);
      card.setAttribute('description', product.description.substring(0, 100) + '...');
      card.setAttribute('detail-url', `product-detail.html?id=${product.id}`);

      productGrid.appendChild(card);
    });
  }
});
