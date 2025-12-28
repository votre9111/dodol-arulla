import products from './product-data.js';

document.addEventListener('DOMContentLoaded', () => {
  const productGrid = document.getElementById('product-grid');

  if (productGrid) {
    products.forEach(product => {
      // Buat elemen <product-card> baru
      const card = document.createElement('product-card');

      // Atur atribut untuk kartu berdasarkan data produk
      card.setAttribute('name', product.name);
      card.setAttribute('image', product.image);
      card.setAttribute('price', product.price);
      card.setAttribute('description', product.description.substring(0, 100) + '...'); // Ambil ringkasan deskripsi
      card.setAttribute('detail-url', `product-detail.html?id=${product.id}`);

      // Tambahkan kartu ke dalam grid
      productGrid.appendChild(card);
    });
  }
});
