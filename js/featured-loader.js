import { products } from './data.js';

// Pastikan custom element product-card sudah terdefinisi sebelum kode ini berjalan
// dengan memuatnya di HTML utama.

document.addEventListener('DOMContentLoaded', () => {
  const featuredGrid = document.getElementById('featured-product-grid');

  const createProductCard = (product) => {
    const card = document.createElement('product-card');
    card.setAttribute('name', product.name);
    card.setAttribute('price', product.price);
    card.setAttribute('image', product.imageUrl);
    // Ambil 15 kata pertama untuk deskripsi di halaman utama
    const shortDescription = product.description.split(' ').slice(0, 15).join(' ') + '...';
    card.setAttribute('description', shortDescription);
    card.setAttribute('detail-url', `product-detail.html?id=${product.id}`); // Arahkan ke halaman detail
    return card;
  };

  if (featuredGrid) {
    // Hapus konten fallback jika ada
    featuredGrid.innerHTML = '';

    // Filter untuk produk unggulan
    const featuredProducts = products.filter(p => p.featured);
    let productsToShow = featuredProducts;

    // Jika tidak ada produk yang ditandai, tampilkan 3 produk pertama sebagai fallback
    if (featuredProducts.length === 0) {
        productsToShow = products.slice(0, 3);
    }
    
    productsToShow.forEach(product => {
      const cardElement = createProductCard(product);
      featuredGrid.appendChild(cardElement);
    });
  }
});
