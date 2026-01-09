"use client";

import Link from "next/link";

export default function DetailElektronikaIndustriPage() {
  const course = {
    title: "Elektronika Industri Dasar",
    instructorName: "Slamet Widodo",
    level: "Lanjutan",
    rating: 4.4,
    students: 620,
    price: 900000,
    image: "/teknis industri.jpg",
    description:
      "Kursus Elektronika Industri Dasar ditujukan bagi peserta yang ingin memahami sistem elektronika yang digunakan di lingkungan industri. Materi mencakup pengenalan sistem kontrol, sensor, aktuator, serta dasar otomasi dan pemeliharaan peralatan elektronik industri.",
    materi: [
      "Dasar Elektronika Industri",
      "Pengenalan Sensor & Aktuator",
      "Sistem Kontrol Industri",
      "Dasar PLC & Otomasi",
      "Perawatan Peralatan Elektronik Industri",
      "Praktik Elektronika Industri",
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
