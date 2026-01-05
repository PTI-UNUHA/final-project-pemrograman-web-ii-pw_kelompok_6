"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #e0f2fe 0%, #ffffff 50%, #dbeafe 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px"
      }}
    >
      {/* JUDUL */}
      <h1
        style={{
          fontSize: "44px",
          fontWeight: "bold",
          color: "#1e3a8a",
          marginBottom: "10px"
        }}
      >
        MUMA STORE
      </h1>

      <p
        style={{
          color: "#374151",
          marginBottom: "40px",
          textAlign: "center"
        }}
      >
        Toko Elektronik Modern & Terpercaya
      </p>

      {/* KONTEN */}
      <div
        style={{
          maxWidth: "1000px",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "50px",
          alignItems: "center"
        }}
      >
        {/* FOTO */}
        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "22px",
            boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
          }}
        >
          <img
            src="/images/muma.jpg.jpeg"
            alt="Tim MUMA STORE"
            style={{
              width: "50%",
              borderRadius: "18px",
              objectFit: "cover"
            }}
          />
        </div>

        {/* DESKRIPSI */}
        <div>
          <h2
            style={{
              fontSize: "28px",
              color: "#1e40af",
              marginBottom: "16px"
            }}
          >
            Solusi Peralatan Teknologi Anda
          </h2>

          <p
            style={{
              color: "#374151",
              lineHeight: "1.7",
              marginBottom: "30px"
            }}
          >
            MUMA STORE menyediakan berbagai produk elektronik seperti laptop,
            aksesoris komputer, dan gadget berkualitas tinggi dengan harga
            terbaik dan pelayanan terpercaya.
          </p>

          <Link href="/produk">
            <button
              style={{
                padding: "14px 36px",
                background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
                color: "#fff",
                border: "none",
                borderRadius: "14px",
                fontSize: "16px",
                cursor: "pointer",
                boxShadow: "0 10px 20px rgba(37, 99, 235, 0.35)"
              }}
            >
              Lihat Produk
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
