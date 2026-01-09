"use client";

import Link from "next/link";

export default function DetailInstalasiListrikPage() {
  const course = {
    title: "Instalasi Listrik Rumah",
    instructorName: "Ahmad Fauzi",
    level: "Pemula",
    rating: 4.9,
    students: 1500,
    price: 600000,
    image: "/teknis instalasi rumah.jpg",
    description:
      "Kursus Instalasi Listrik Rumah dirancang untuk pemula yang ingin memahami sistem kelistrikan rumah tangga secara aman dan sesuai standar. Peserta akan mempelajari perencanaan instalasi, pemasangan kabel, saklar, stop kontak, hingga sistem pengaman listrik.",
    materi: [
      "Dasar Kelistrikan Rumah Tangga",
      "Pengenalan Alat & Bahan Instalasi",
      "Membaca Denah Instalasi Listrik",
      "Pemasangan Saklar & Stop Kontak",
      "Instalasi MCB & Sistem Grounding",
      "Standar Keselamatan Listrik (K3)",
      "Praktik Instalasi Listrik Rumah",
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
        <Link href="/" className="back-link">
            Kembali ke Beranda
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
