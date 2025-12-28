import products from './product-data.js';

document.addEventListener('DOMContentLoaded', () => {
  const featuredProductGrid = document.getElementById('featured-product-grid');

  if (featuredProductGrid) {
    // Pilih beberapa produk untuk ditampilkan (3 produk pertama)
    const featuredProducts = products.slice(0, 3);

    featuredProducts.forEach(product => {
      // Buat elemen <product-card> baru
      const card = document.createElement('product-card');

      // Atur atribut untuk kartu berdasarkan data produk
      card.setAttribute('name', product.name);
      card.setAttribute('image', product.image);
      card.setAttribute('price', product.price);
      card.setAttribute('description', product.description.substring(0, 100) + '...'); // Ringkasan deskripsi
      card.setAttribute('detail-url', `product-detail.html?id=${product.id}`);

      // Tambahkan kartu ke dalam grid
      featuredProductGrid.appendChild(card);
    });
  }
});
