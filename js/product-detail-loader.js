import products from './product-data.js';

document.addEventListener('DOMContentLoaded', () => {
  const productDetailContainer = document.getElementById('product-detail-container');

  // 1. Dapatkan ID produk dari URL
  const params = new URLSearchParams(window.location.search);
  const productId = params.get('id');

  // 2. Cari produk yang cocok di dalam array 'products'
  const product = products.find(p => p.id === productId);

  // 3. Tampilkan detail produk atau pesan error
  if (product) {
    // Ganti judul halaman
    document.title = `${product.name} - Dodol Arulla`;

    // Format harga ke dalam format Rupiah
    const formattedPrice = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(product.price);

    // Buat HTML untuk detail produk
    productDetailContainer.innerHTML = `
      <div class="product-image-gallery">
        <img src="${product.image}" alt="${product.name}" class="main-product-image">
      </div>
      <div class="product-info">
        <h1 class="product-title">${product.name}</h1>
        <p class="product-price">${formattedPrice}</p>
        <p class="product-description">${product.description}</p>
        <div class="product-actions">
          <a href="https-wa-me-6281234567890?text=Halo%2C%20saya%20tertarik%20untuk%20memesan%20${product.name}" class="whatsapp-button" target="_blank">
            Pesan via WhatsApp
          </a>
        </div>
      </div>
    `;
  } else {
    // Tampilkan pesan jika produk tidak ditemukan
    productDetailContainer.innerHTML = '<p class="error-message">Produk tidak ditemukan. Silakan kembali ke <a href="katalog.html">halaman katalog</a>.</p>';
  }
});