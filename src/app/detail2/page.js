"use client";

import Link from "next/link";

export default function DetailKursusHPPage() {
  const course = {
    title: "Teknisi HP Android",
    instructorName: "Andi Pratama",
    level: "Menengah",
    rating: 4.7,
    students: 980,
    price: 750000,
    image: "/teknisi hp.jpg",
    description:
      "Kursus Teknisi HP Android ditujukan bagi kamu yang ingin menguasai perbaikan smartphone Android secara profesional. Mulai dari analisis kerusakan, bongkar pasang perangkat, hingga perbaikan hardware dan software Android.",
    materi: [
      "Pengenalan Hardware HP Android",
      "Teknik Bongkar Pasang Smartphone",
      "Analisis Kerusakan HP",
      "Perbaikan Software (Flashing & Reset)",
      "Perbaikan Hardware (IC, LCD, Baterai)",
      "Studi Kasus Servis HP Android",
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
