import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <nav style={{ padding: "15px", background: "#2563eb", color: "white" }}>
          EduCourse
        </nav>

        {children}
      </body>
    </html>
  );
}
