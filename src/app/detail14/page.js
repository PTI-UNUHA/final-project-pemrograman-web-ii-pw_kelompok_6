"use client";

import Link from "next/link";

export default function DetailServiceACPage() {
  const course = {
    title: "Service Kulkas & AC",
    instructorName: "Dedi Saputra",
    level: "Lanjutan",
    rating: 4.7,
    students: 730,
    price: 800000,
    image: "/teknisi ac.jpg",
    description:
      "Kursus Service Kulkas & AC ditujukan bagi peserta yang ingin menjadi teknisi profesional di bidang pendingin. Materi mencakup sistem kerja kulkas dan AC, analisis kerusakan, pengisian freon, hingga perawatan dan perbaikan unit pendingin rumah tangga dan komersial.",
    materi: [
      "Prinsip Kerja Kulkas & AC",
      "Pengenalan Komponen Pendingin",
      "Analisis Kerusakan Sistem Pendingin",
      "Teknik Pengisian & Penggantian Freon",
      "Perawatan AC Split & Kulkas",
      "Praktik Servis Kulkas & AC",
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
