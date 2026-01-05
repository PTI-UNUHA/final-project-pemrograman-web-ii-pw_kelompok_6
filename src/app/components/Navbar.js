"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/?search=${search}`);
  };

  return (
    <nav style={navStyle}>
      <h2>MUMA STORE</h2>

      <form onSubmit={handleSearch} style={{ display: "flex", gap: 8 }}>
        <input
          type="text"
          placeholder="Cari produk..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={inputStyle}
        />
        <button style={buttonStyle}>Cari</button>
      </form>

      <div style={{ display: "flex", gap: 20 }}>
        <Link href="/" style={linkStyle}>Home</Link>
        <Link href="/" style={linkStyle}>Produk</Link>
      </div>
    </nav>
  );
}

/* STYLE */
const navStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "16px 40px",
  background: "#fff",
  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  position: "sticky",
  top: 0,
  zIndex: 100
};

const linkStyle = { textDecoration: "none", color: "#111", fontWeight: 500 };
const inputStyle = { padding: "6px 10px", borderRadius: 6, border: "1px solid #ccc" };
const buttonStyle = { padding: "6px 12px", border: "none", background: "#2563eb", color: "#fff", borderRadius: 6 };
