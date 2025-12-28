# Blueprint Aplikasi: Website Dodol Arulla

## Ringkasan Proyek

Website Dodol Arulla adalah sebuah platform digital yang berfungsi sebagai etalase produk dan identitas merek. Tujuannya adalah untuk menyajikan informasi produk secara elegan, menceritakan kisah di balik merek, dan memfasilitasi pemesanan secara langsung melalui WhatsApp. Aplikasi ini dirancang dengan pendekatan modern, minimalis, dan berfokus pada kemudahan pengguna.

---

## Desain dan Fitur Aplikasi

### 1. Struktur Halaman

*   **`index.html` (Halaman Utama):**
    *   Menampilkan *hero section* dengan latar belakang gambar produk, slogan utama, dan deskripsi singkat. Teks diposisikan di tengah layar untuk dampak visual maksimal.
    *   Header navigasi didesain transparan di awal dan berubah menjadi solid putih saat halaman digulir ke bawah untuk menjaga keterbacaan.
    *   Menyajikan bagian "Kenapa Memilih Dodol Arulla?" untuk menyoroti tiga keunggulan utama produk.
    *   Terdapat *footer* yang konsisten dengan halaman lainnya.
    *   Ajakan bertindak (CTA) utama yang mengarahkan ke halaman katalog.

*   **`katalog.html` (Katalog Produk):**
    *   Galeri lengkap yang menampilkan semua varian rasa Dodol Arulla.
    *   Setiap produk direpresentasikan oleh `product-card` yang seragam.
    *   Mengklik sebuah produk akan mengarahkan pengguna ke halaman detail produk yang bersangkutan.

*   **`product-detail.html` (Detail Produk):**
    *   Template halaman tunggal yang menampilkan informasi rinci satu produk.
    *   Menampilkan galeri gambar produk, nama, harga, dan deskripsi mendalam.
    *   Fitur utama adalah tombol **\"Pesan via WhatsApp\"** yang mengarahkan pengguna ke aplikasi WhatsApp dengan pesan pemesanan yang sudah terisi otomatis.

*   **`about.html` (Tentang Kami):**
    *   Halaman yang berisi narasi tentang sejarah, visi, dan misi Dodol Arulla untuk membangun hubungan emosional dengan pelanggan.

*   **`sop.html` (Standard Operating Procedure):**
    *   Halaman informatif yang berisi prosedur standar operasi untuk penggunaan mesin produksi, seperti Mesin Penggiling dan Mesin Sealer.

### 2. Komponen Web yang Dapat Digunakan Kembali

Aplikasi ini dibangun secara modular menggunakan Web Components untuk konsistensi dan kemudahan pengelolaan.

*   **`<site-header>` (`js/components/header-component.js`):**
    *   Menyediakan navigasi utama yang konsisten di seluruh halaman.
    *   Tautan navigasi: Home, Katalog, Tentang Kami, SOP.

*   **`<site-footer>` (`js/components/footer-component.js`):**
    *   Menampilkan informasi kontak, tautan media sosial, dan hak cipta di bagian bawah setiap halaman.

*   **`<product-card>` (`js/components/product-card.js`):**
    *   Kartu produk modular yang menampilkan gambar, nama, deskripsi singkat, dan harga.
    *   Dirancang sebagai tautan tunggal yang mengarah ke halaman detail produk untuk menyederhanakan interaksi pengguna.

### 3. Fungsionalitas Inti

*   **Alur Pemesanan WhatsApp:** Sistem keranjang belanja internal telah digantikan sepenuhnya oleh alur pemesanan yang lebih sederhana. Tombol \"Pesan via WhatsApp\" pada halaman detail produk menjadi satu-satunya gerbang pemesanan, mengurangi friksi dan mempercepat proses.

### 4. Desain Visual dan Struktur

*   **Estetika:** Desain yang bersih, modern, dan fokus pada kualitas visual produk.
*   **Struktur File:** Aset-aset proyek diatur secara logis:
    *   `images/`: Berisi semua gambar produk, ikon, dan aset visual lainnya.
    *   `css/`: Berisi file `style.css` untuk semua aturan gaya global.
    *   `js/components/`: Berisi semua definisi Web Components.
*   **Responsif:** Tata letak dirancang agar berfungsi dengan baik di perangkat desktop maupun mobile.

---

## Riwayat Perubahan (Sesi Terbaru)

Berikut adalah ringkasan perubahan yang telah diimplementasikan dalam sesi pengembangan ini, berfokus pada perombakan halaman utama:

1.  **Desain Ulang Halaman Utama:**
    *   Mengimplementasikan desain baru untuk *hero section* dengan mengganti latar belakang menjadi gambar jajaran produk Dodol Arulla.
    *   Menyederhanakan tata letak awal untuk fokus pada pesan utama, lalu mengembalikan bagian "Kenapa Memilih Dodol Arulla?" dan *footer* untuk memastikan fungsionalitas gulir (scroll).

2.  **Perbaikan dan Penyesuaian Tampilan:**
    *   **Perbaikan Gambar Latar:** Mengatasi masalah gambar yang tidak muncul dengan memperbaiki kesalahan pengetikan pada path di CSS.
    *   **Penyesuaian Posisi Teks:** Memastikan judul dan deskripsi pada *hero section* benar-benar berada di tengah layar, sesuai dengan desain yang diinginkan.
    *   **Pembaruan Header:** Menambahkan fungsionalitas pada *header* yang berubah warna latar menjadi putih solid saat halaman digulir untuk meningkatkan visibilitas.

## Riwayat Perubahan Sebelumnya

1.  **Penyederhanaan Fitur:**
    *   **Menghapus Fungsionalitas Keranjang Belanja:** Seluruh sistem keranjang belanja, termasuk modal, tombol \"Tambah ke Keranjang\", dan logika JavaScript terkait, telah dihapus untuk menyederhanakan alur pengguna.
    *   **Menghapus Halaman Tidak Relevan:** Halaman `blog.html`, `contact.html`, `reseller.html`, `visit.html`, dan semua postingan blog individual telah dihapus dari proyek.

2.  **Pembaruan Struktur dan Navigasi:**
    *   **Navigasi Diperbarui:** Komponen Header disederhanakan dengan tautan ke halaman inti: Home, Katalog, Tentang Kami, dan SOP.
    *   **Penggantian Nama Halaman:** Halaman `products.html` diubah namanya menjadi `katalog.html` agar lebih intuitif.

3.  **Implementasi Alur Pemesanan Baru:**
    *   **Pembuatan Halaman Detail Produk:** Halaman `product-detail.html` baru dibuat sebagai template untuk menampilkan informasi produk secara rinci.
    *   **Integrasi Tombol WhatsApp:** Tombol \"Pesan via WhatsApp\" ditambahkan sebagai CTA utama pada halaman detail produk.
    *   **Pembaruan Kartu Produk:** Komponen `product-card` diubah menjadi tautan langsung ke halaman detail produk, menghilangkan tombol-tombol sekunder.

4.  **Reorganisasi Aset:**
    *   **Konsolidasi Gambar:** Semua aset gambar dari direktori `assets/` dipindahkan dan diatur ulang ke dalam direktori `images/` untuk menyederhanakan struktur proyek.