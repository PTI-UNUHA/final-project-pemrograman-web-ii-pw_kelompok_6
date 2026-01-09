"use client";

import Link from "next/link";

export default function DetailKursusTVPage() {
  const course = {
    title: "Service TV LED & LCD",
    instructorName: "Rizky Kurniawan",
    level: "Menengah",
    rating: 4.6,
    students: 860,
    price: 700000,
    image: "/teknis tv.jpg",
    description:
      "Kursus Service TV LED & LCD dirancang untuk teknisi pemula hingga menengah yang ingin memahami kerusakan umum pada TV modern. Peserta akan belajar analisis kerusakan, penggantian komponen, serta teknik perbaikan TV LED dan LCD secara sistematis.",
    materi: [
      "Pengenalan TV LED & LCD",
      "Struktur Blok Rangkaian TV",
      "Analisis Kerusakan Gambar & Suara",
      "Perbaikan Power Supply TV",
      "Penggantian Panel & Backlight",
      "Praktik Servis TV LED & LCD",
    ],
  };

  return (
    <div className="page">
      {/* NAVBAR */}
      <nav className="navbar">
        <h1 className="navbar-title">Educourse Elektronik</h1>
        <div className="navbar-menu">
          <Link href="/">Beranda</Link>
          <Link href="/kursus">Kursus</Link>
        </div>
      </nav>

      {/* DETAIL */}
      <section className="detail-container">
        <Link href="/kursus" className="back-link">
            Kembali ke Kursus
          </Link>
        <div className="detail-grid">
          {/* IMAGE */}
          <div className="detail-image-wrapper">
            <img
              src={course.image}
              alt={course.title}
              className="detail-image"
            />
          </div>

          {/* CONTENT */}
          <div className="detail-content">
            <span className="course-level">{course.level}</span>
            <h2 className="detail-title">{course.title}</h2>

            <p className="detail-instructor">
              👨‍🏫 Instruktur: <strong>{course.instructorName}</strong>
            </p>

            <div className="detail-meta">
              <span>⭐ {course.rating}</span>
              <span>👥 {course.students} Peserta</span>
            </div>

            <p className="detail-description">{course.description}</p>

            <h4 className="detail-subtitle">Materi yang Dipelajari</h4>
            <ul className="detail-list">
              {course.materi.map((item, index) => (
                <li key={index}>✔️ {item}</li>
              ))}
            </ul>

            <div className="detail-footer">
              <span className="detail-price">
                Rp {course.price.toLocaleString("id-ID")}
              </span>
              <button className="detail-button">Daftar Sekarang</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
