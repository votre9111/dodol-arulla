# Blueprint Aplikasi: Website Dodol Arulla

## Ringkasan Proyek

Website Dodol Arulla adalah sebuah platform digital yang berfungsi sebagai etalase produk dan identitas merek. Tujuannya adalah untuk menyajikan informasi produk secara elegan, menceritakan kisah di balik merek, dan memfasilitasi pemesanan secara langsung melalui WhatsApp. Aplikasi ini dirancang dengan pendekatan modern, minimalis, dan berfokus pada kemudahan pengguna.

---

## Desain dan Fitur Aplikasi

### 1. Struktur Halaman dan Komponen

Seluruh halaman utama (`index.html`, `about.html`, `katalog.html`, `sop.html`) menggunakan struktur HTML statis untuk bagian *header* dan *footer* guna memastikan tampilan yang konsisten di seluruh situs.

*   **Header Statis:**
    *   Berisi logo dan navigasi utama ke semua halaman.
    *   Teks navigasi telah diseragamkan ke dalam Bahasa Indonesia (contoh: "Tentang Kami").
    *   Memiliki fungsionalitas perubahan latar belakang saat digulir pada halaman utama.

*   **Footer Statis:**
    *   Terbagi menjadi tiga kolom: deskripsi singkat perusahaan, navigasi situs, dan informasi kontak.

*   **`product-card.js`:**
    *   Komponen modular berbasis JavaScript untuk menampilkan kartu produk secara dinamis di halaman katalog.

### 2. Fungsionalitas Inti

*   **Alur Pemesanan WhatsApp:** Pengguna dapat memesan langsung melalui WhatsApp dari halaman detail produk.

### 3. Desain Visual dan Struktur

*   **Estetika:** Desain bersih, modern, dan berfokus pada visual produk.
*   **Struktur File:** Aset diatur dalam folder `images/`, `css/`, dan `js/`.
*   **Responsif:** Desain diadaptasi untuk perangkat desktop dan mobile.

---

## Riwayat Perubahan (Sesi Terbaru)

Berikut adalah ringkasan perubahan yang diimplementasikan pada sesi pengembangan ini:

1.  **Perbaikan dan Standardisasi Header & Footer:**
    *   **Identifikasi Masalah:** Ditemukan bahwa upaya sebelumnya untuk menggunakan komponen web (`<site-header>` dan `<site-footer>`) gagal karena file definisi komponen belum dibuat. Hal ini menyebabkan *header* dan *footer* tidak muncul di halaman `index.html` dan `sop.html`.
    *   **Implementasi Perbaikan:**
        *   Mengganti komponen web yang rusak di `sop.html` dengan kode HTML statis untuk *header* dan *footer*.
        *   Mengembalikan *footer* statis ke `index.html`.
        *   Menyeragamkan kode *header* dan *footer* di semua halaman (`index.html`, `about.html`, `katalog.html`, `sop.html`) untuk memastikan konsistensi visual dan struktural.

2.  **Penyeragaman Teks Navigasi:**
    *   Mengubah item menu "About" menjadi "Tentang Kami" di semua *header* dan *footer* di seluruh situs agar konsisten menggunakan Bahasa Indonesia.
    *   Memastikan kelas `.active` pada menu navigasi diterapkan dengan benar di setiap halaman.

## Riwayat Perubahan Sebelumnya

*   **Penyempurnaan Halaman Utama:** Minimalisasi bagian "Kenapa Memilih Dodol Arulla?" dan penambahan bagian "Varian Paling Favorit" dengan tombol CTA.
*   **Desain Ulang Halaman Utama:** Implementasi desain baru untuk *hero section* dan *header* dinamis.
*   **Penyederhanaan Fitur:** Penghapusan fitur keranjang belanja dan pengenalan alur pemesanan via WhatsApp.