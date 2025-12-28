# Blueprint Aplikasi Web Dodol Arulla

## Ringkasan

Tujuan dari proyek ini adalah untuk membangun sebuah situs web korporat yang komprehensif untuk "Dodol Arulla," sebuah merek dodol Garut. Situs web ini berfungsi sebagai platform digital untuk menampilkan produk, berbagi cerita merek, dan memfasilitasi pertanyaan pelanggan, pendaftaran reseller, dan penjualan online.

---

## Dokumentasi Proyek

Bagian ini mendokumentasikan semua gaya, desain, dan fitur yang diterapkan dalam aplikasi dari versi awal hingga saat ini.

### 1. Branding dan Desain Visual

*   **Skema Warna:** Palet warna yang hangat dan premium dipilih untuk membangkitkan kualitas tradisional dan buatan tangan dari produk tersebut.
    *   `--primary-color: #8B4513` (SaddleBrown) - Digunakan untuk header, footer, dan judul.
    *   `--secondary-color: #F5DEB3` (Wheat) - Digunakan untuk latar belakang header halaman.
    *   `--accent-color: #FF7F50` (Coral) - Digunakan untuk tombol ajakan bertindak (CTA), tautan saat di-hover, dan sorotan.
    *   `--background-color: #FAF8F5` - Warna latar belakang utama situs.
*   **Tipografi:**
    *   `Poppins` (diimpor dari Google Fonts) - Digunakan untuk semua judul, memberikan nuansa modern dan berani.
    *   `Lato` (diimpor dari Google Fonts) - Digunakan untuk semua teks isi, memastikan keterbacaan yang sangat baik.
*   **Gaya Visual:**
    *   **Tekstur Latar Belakang:** Latar belakang utama memiliki pola SVG yang halus untuk menambahkan nuansa taktil premium.
    *   **Bayangan:** Bayangan lembut (`box-shadow`) digunakan pada header, kartu, dan formulir untuk menciptakan kedalaman dan mengangkat elemen dari latar belakang.
    *   **Radius Sudut:** Radius sudut yang konsisten (`8px`) digunakan di seluruh kartu, tombol, dan input formulir untuk tampilan yang lembut dan modern.
*   **Interaktivitas:**
    *   **Transisi Halus:** Efek transisi diterapkan pada tombol, tautan, dan kartu saat di-hover untuk memberikan umpan balik visual yang responsif.
    *   **Tombol CTA:** Tombol ajakan bertindak utama memiliki latar belakang gradien dan efek "terangkat" saat di-hover untuk menarik perhatian pengguna.

### 2. Komponen dan Fitur Inti

*   **Navigasi:**
    *   **Header Tetap:** Header tetap berada di bagian atas layar saat menggulir untuk akses mudah ke navigasi.
    *   **Navigasi Responsif:** Pada perangkat seluler (lebar kurang dari 768px), menu navigasi utama runtuh menjadi menu "hamburger" yang memicu panel geser layar penuh dari kanan.
*   **Keranjang Belanja:**
    *   Dapat diakses melalui ikon keranjang di header, yang menampilkan jumlah item saat ini.
    *   Membuka jendela modal yang menampilkan item yang ditambahkan, jumlah, dan total harga.
    *   Pengguna dapat menambah atau menghapus item dari keranjang.
    *   Tombol "Checkout" mengarahkan ke halaman `checkout.html`.
*   **Komponen Web:**
    *   **`<product-card>`:** Komponen yang dapat digunakan kembali untuk menampilkan produk. Komponen ini mengambil `image`, `name`, `description`, `price`, dan `detail-url` sebagai atribut. Komponen ini berisi tombol "Tambah ke Keranjang" khusus yang mengeluarkan event `add-to-cart`.

### 3. Struktur Halaman

Situs web ini terdiri dari beberapa halaman, masing-masing dengan tujuan tertentu:

*   **`index.html`**: Halaman utama dengan bagian hero, produk unggulan, dan artikel terbaru.
*   **`about.html`**: Halaman untuk berbagi cerita dan nilai-nilai perusahaan.
*   **`products.html`**: Galeri lengkap dari semua produk dodol yang tersedia, tertaut ke halaman detail masing-masing.
*   **`blog.html`**: Daftar postingan blog dengan kartu artikel statis.
*   **`visit.html`**: Berisi peta Google Maps yang disematkan, alamat, dan jam buka toko.
*   **`contact.html`**: Formulir kontak bagi pengguna untuk mengirimkan pertanyaan.
*   **`reseller.html`**: Informasi dan formulir pendaftaran untuk calon reseller.
*   **`checkout.html`**: Halaman untuk proses checkout, menampilkan item dari keranjang.
*   **Halaman Detail Produk**: Halaman individual untuk setiap produk:
    *   `product-original.html`
    *   `product-wijen.html`
    *   `product-duren.html`
    *   `product-kacang.html`
    *   `product-wangi.html`
    *   `product-cokelat.html`
*   **Halaman Postingan Blog**: Halaman individual untuk setiap artikel:
    *   `blog-sejarah.html`
    *   `blog-proses.html`

---

## Riwayat Pengembangan

*   **Fase 1: Pembersihan dan Penataan Ulang (Selesai)**
    *   [x] Menghapus file-file yang tidak perlu dan duplikat.
    *   [x] Mengatur ulang struktur file untuk kejelasan.
    *   [x] Membuat dan memelihara file `blueprint.md` ini.
*   **Fase 2: Perbaikan Fungsionalitas (Selesai)**
    *   [x] Memperbaiki semua tautan CSS, JS, dan navigasi di seluruh file HTML.
    *   [x] Mengimplementasikan kembali logika keranjang belanja dengan event yang digerakkan oleh komponen untuk keandalan.
    *   [x] Membuat halaman `checkout.html`.
*   **Fase 3: Peningkatan Desain dan UX (Selesai)**
    *   [x] Merombak total `css/style.css` dengan skema warna, tipografi, dan spasi modern.
    *   [x] Menerapkan desain yang sepenuhnya responsif, termasuk menu navigasi geser untuk seluler.
    *   [x] Menambahkan transisi dan efek visual untuk pengalaman pengguna yang lebih menarik.
*   **Fase 4: Pembuatan Konten dan Halaman (Selesai)**
    *   [x] Mengisi konten placeholder di halaman `about.html`, `contact.html`, dan `reseller.html`.
    *   [x] Membuat halaman detail unik untuk setiap produk.
    *   [x] Menulis konten artikel yang sebenarnya untuk postingan blog.
*   **Fase 5: Finalisasi dan Pembersihan (Selesai)**
    *   [x] Memperbarui semua tautan di seluruh situs untuk mengarah ke halaman detail produk dan blog yang baru.
    *   [x] Menghapus file dan komponen yang tidak lagi digunakan (`post.html`, `js/components/blog-post.js`, direktori `posts`).

---

## Status Proyek dan Langkah Selanjutnya

Pengembangan awal untuk situs web Dodol Arulla telah selesai. Situs ini sekarang berfungsi penuh dengan desain yang responsif, fitur keranjang belanja, dan halaman konten yang terperinci.

Langkah selanjutnya yang disarankan adalah:

1.  **Mengganti Gambar Placeholder:** Ganti semua gambar `assets/img/*.jpg` dengan foto produk dan merek asli.
2.  **Menghubungkan Marketplace:** Perbarui tautan "Beli di Marketplace" di header dan footer untuk mengarah ke toko online resmi di Tokopedia, Shopee, dll.
3.  **Deployment:** Publikasikan situs web ini ke platform hosting agar dapat diakses secara publik.