import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px 40px",
            background: "#fff",
            borderBottom: "1px solid #eee"
          }}
        >
          <strong>MUMA STORE</strong>

          <div style={{ display: "flex", gap: "20px" }}>
            <Link href="/">Home</Link>
            <Link href="/produk">Produk</Link>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}
