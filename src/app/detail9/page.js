"use client";

import Link from "next/link";

export default function DetailTeknisiCCTVPage() {
  const course = {
    title: "Teknisi CCTV",
    instructorName: "Hendra Gunawan",
    level: "Menengah",
    rating: 4.8,
    students: 1050,
    price: 650000,
    image: "/teknisi cctv.jpg",
    description:
      "Kursus Teknisi CCTV dirancang untuk peserta yang ingin menguasai instalasi dan perawatan sistem kamera pengawas. Materi mencakup perencanaan pemasangan, instalasi kamera, konfigurasi DVR/NVR, jaringan CCTV, serta troubleshooting sistem keamanan.",
    materi: [
      "Pengenalan Sistem CCTV",
      "Jenis Kamera & Perangkat CCTV",
      "Instalasi Kamera CCTV",
      "Konfigurasi DVR & NVR",
      "Jaringan & Monitoring CCTV",
      "Troubleshooting Sistem CCTV",
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
