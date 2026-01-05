"use client";

import { useSearchParams } from "next/navigation";
import produk from "@/app/data/produk";
import DetailProduk from "@/app/produk/[id]/page";

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const produk = produk.find((p) => p.id === Number(id));

  if (!produk) {
    return <h2>Produk tidak ditemukan</h2>;
  }

  return (
    <main style={{ padding: "40px" }}>
      <h1>Checkout</h1>

      <div style={{ marginTop: "20px" }}>
        <h2>{produk.name}</h2>
        <p>Harga: <strong>{produk.price}</strong></p>

        <button
          style={{
            marginTop: "20px",
            padding: "12px 20px",
            background: "green",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}
          onClick={() => alert("Pesanan berhasil!")}
        >
          Konfirmasi Pembelian
        </button>
      </div>
    </main>
  );
}
<button
  onClick={() => alert("Produk berhasil dibeli!")}
  style={{
    marginTop: "20px",
    padding: "12px 24px",
    borderRadius: "10px",
    border: "none",
    background: "#2563eb",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer"
  }}
>
  Beli Sekarang
</button>
