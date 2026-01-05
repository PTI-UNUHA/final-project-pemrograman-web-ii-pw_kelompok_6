"use client";

import { useState } from "react";
import Link from "next/link";

export default function Page() {
  // 1️⃣ STATE SEARCH
  const [search, setSearch] = useState("");
  const [keyword, setKeyword] = useState("");

  // 2️⃣ DATA PRODUK
  const products = [
  {
    id: 1,
    name: "Laptop ASUS ROG Strix G15",
    brand: "ASUS",
    oldPrice: "Rp 22.000.000",
    price: "Rp 18.500.000",
    rating: 4.9,
    image:
      "https://www.notebookcheck.net/fileadmin/_processed_/9/9/csm_aIEtRvLk_cca3fbaac1.jpg",
    description:
      "Laptop gaming performa tinggi dengan prosesor powerful dan GPU dedicated, cocok untuk gaming berat dan desain grafis."
  },
  {
    id: 2,
    name: "MacBook Pro 14 Inch",
    brand: "Apple",
    oldPrice: "Rp 50.000.000",
    price: "Rp 25.900.000",
    rating: 4.8,
    image:
      "https://shopdunk.com/images/uploaded/MacBook/macbook-pro-14-inch-2023.jpg",
    description:
      "Laptop premium dari Apple untuk profesional, content creator, dan programmer dengan performa tinggi dan layar tajam."
  },
  {
    id: 3,
    name: "Mouse Gaming Logitech G502",
    brand: "Logitech",
    price: "Rp 1.299.000",
    rating: 4.6,
    image:
      "https://i.pcmag.com/imagery/reviews/04QSGMRR0ddVFZCJ8lEU9gq-1.fit_lim.size_1600x1200.v_1569469984.jpg",
    description:
      "Mouse gaming presisi tinggi dengan sensor HERO, nyaman digunakan untuk gaming kompetitif dan kerja harian."
  },
  {
    id: 4,
    name: "Keyboard Mechanical RGB",
    brand: "Razer",
    price: "Rp 1.750.000",
    rating: 4.7,
    image:
      "https://robots.net/wp-content/uploads/2023/09/8-amazing-rgb-mechanical-keyboard-for-2023-1693657908.jpg",
    description:
      "Keyboard mechanical dengan lampu RGB, respons cepat, dan build solid untuk gamer maupun pengetik."
  },
  {
    id: 5,
    name: "Printer Canon Inkjet",
    brand: "Canon",
    price: "Rp 1.900.000",
    rating: 4.4,
    image:
      "https://i.pcmag.com/imagery/reviews/05vwYWw9jJGgosyCXYWKCtZ-6.fit_scale.size_760x427.v1680108911.jpg",
    description:
      "Printer inkjet berkualitas tinggi untuk kebutuhan cetak dokumen dan gambar di rumah maupun kantor."
  },
  {
    id: 6,
    name: "USB Hub Type-C",
    brand: "Baseus",
    oldPrice: "Rp 500.000",
    price: "Rp 329.000",
    rating: 4.6,
    image:
      "https://m.media-amazon.com/images/I/61QbS525pgL._AC_.jpg",
    description:
      "USB Hub Type-C multifungsi untuk menambah port laptop, mendukung transfer data cepat dan koneksi stabil."
  },
  {
    id: 7,
    name: "Kamera Mirrorless Sony",
    brand: "Sony",
    price: "Rp 11.500.000",
    rating: 4.7,
    image:
      "https://www.dpreview.com/files/p/articles/7686672267/Product-Images/Sony_a6700_3qtr_right.jpeg",
    description:
      "Kamera mirrorless dengan kualitas gambar tinggi, cocok untuk fotografi dan videografi profesional."
  },
  {
    id: 8,
    name: "Flashdisk SanDisk 128GB",
    brand: "SanDisk",
    price: "Rp 249.000",
    rating: 4.5,
    image:
      "https://www.bhphotovideo.com/images/images1000x1000/sandisk_sdcz73_128g_a46_128gb_ultra_flair_usb_1203369.jpg",
    description:
      "Flashdisk berkapasitas besar dengan kecepatan tinggi untuk penyimpanan dan transfer data."
  },
  {
    id: 9,
    name: "Powerbank Anker 20000mAh",
    brand: "Anker",
    price: "Rp 799.000",
    rating: 4.7,
    image:
      "https://blog.easyacc.com/wp-content/uploads/2020/12/e774d-anker-20000-mah-power-bank.jpg",
    description:
      "Powerbank berkapasitas besar dengan pengisian cepat, cocok untuk perjalanan dan aktivitas outdoor."
  },
  {
    id: 10,
    name: "Tablet Samsung Galaxy Tab",
    brand: "Samsung",
    price: "Rp 5.200.000",
    rating: 4.6,
    image:
      "https://images.samsung.com/is/image/samsung/assets/se/tablets/galaxy-tab-s10/buy/02-image-gallery/S10_APS_KV_PC_1600x864.jpg?imbypass=true",
    description:
      "Tablet serbaguna untuk belajar, hiburan, dan pekerjaan dengan layar luas dan performa stabil."
  },
  {
    id: 11,
    name: "Apple Watch Series",
    brand: "Apple",
    price: "Rp 6.500.000",
    rating: 4.8,
    image:
      "https://assets-prd.ignimgs.com/2023/09/12/applewatch-s9-news-1694540296440.jpg",
    description:
      "Smartwatch premium dengan fitur kesehatan, fitness, dan notifikasi pintar dari Apple."
  },
  {
    id: 12,
    name: "PC Gaming RTX 3060",
    brand: "Custom Build",
    price: "Rp 18.900.000",
    rating: 4.9,
    image:
      "https://pcmarket.vn/media/product/10689_dsc02277.jpg",
    description:
      "PC gaming rakitan dengan GPU RTX 3060, mampu menjalankan game modern dan rendering berat."
  }
];


  // 3️⃣ FILTER PRODUK (INI KUNCI SEARCH)
  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <main style={{ background: "#f4f6f8", minHeight: "100vh", padding: "40px" }}>
      <h1 style={{ fontSize: "28px", marginBottom: "8px" }}>
        PRODUK ELEKTRONIK MUMA STORE
      </h1>

      <p style={{ color: "#666", marginBottom: "16px" }}>
        Peralatan Elektronik Berkualitas Tinggi Harga Ramah Dikantong
      </p>

      {/* 4️⃣ SEARCH BAR */}
      <div style={{ marginBottom: "32px" }}>
        <input
          type="text"
          placeholder="Cari produk (contoh: laptop)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "12px",
            width: "260px",
            borderRadius: "8px",
            border: "1px solid #ccc"
          }}
        />

        <button
          onClick={() => setKeyword(search)}
          style={{
            marginLeft: "8px",
            padding: "12px 20px",
            borderRadius: "8px",
            background: "#2563eb",
            color: "#fff",
            border: "none",
            cursor: "pointer"
          }}
        >
          Cari
        </button>
      </div>

      {/* 5️⃣ LIST PRODUK */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "24px"
        }}
      >
        {filteredProducts.map((item) => (
          <div
            key={item.id}
            style={{
              background: "#fff",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
            }}
          >
            <Link href={`/product/${item.id}`}>
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                  cursor: "pointer"
                }}
              />
            </Link>

            <div style={{ padding: "16px" }}>
              <small style={{ color: "#777" }}>{item.brand}</small>
              <h3 style={{ margin: "8px 0" }}>{item.name}</h3>
              ⭐ {item.rating} / 5.0
              <div style={{ marginTop: "8px", fontWeight: "bold" }}>
                {item.price}
              </div>
            </div>
          </div>
        ))}

        {/* JIKA HASIL KOSONG */}
        {filteredProducts.length === 0 && (
          <p>Produk tidak ditemukan.</p>
        )}
      </div>
    </main>
  );
}
