"use client";

import products from "@/app/data/produk";
import Link from "next/link";

export default function DetailProduk({ params }) {
  const id = Number(params.id);
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <h2 style={{ padding: "40px" }}>Produk tidak ditemukan</h2>;
  }

  return (
    <main style={{ padding: "50px" }}>
      <Link href="/produk">← Kembali ke Produk</Link>

      <div
        style={{
          display: "flex",
          gap: "40px",
          marginTop: "30px",
          alignItems: "flex-start",
        }}
      >
        {/* GAMBAR KIRI */}
        <img
          src={product.image}
          alt={product.name}
          width={350}
          style={{ borderRadius: "12px" }}
        />

        {/* DESKRIPSI KANAN */}
        <div>
          <h1>{product.name}</h1>
          <p style={{ color: "#666" }}>{product.brand}</p>

          {/* HARGA LAMA (DISKON MERAH) */}
          {product.oldPrice && (
            <p
              style={{
                color: "red",
                textDecoration: "line-through",
                marginTop: "10px",
              }}
            >
              {product.oldPrice}
            </p>
          )}

          {/* HARGA SEKARANG */}
          <h2 style={{ color: "green" }}>{product.price}</h2>

          <p style={{ marginTop: "20px" }}>
            {product.description}
          </p>

          <button
            onClick={() => alert("✅ Top up berhasil!")}
            style={{
              marginTop: "25px",
              padding: "14px 30px",
              backgroundColor: "#2563eb",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            🛒 Beli Sekarang
          </button>
        </div>
      </div>
    </main>
  );
}
