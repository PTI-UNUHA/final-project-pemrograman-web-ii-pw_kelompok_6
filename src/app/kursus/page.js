"use client";

import { useState } from "react";
import Link from "next/link";

const courses = [
  {
    id: "1",
    title: "Service Elektronik Dasar",
    instructorName: "Budi Santoso",
    level: "Pemula",
    rating: 4.8,
    price: 500000,
    image: "/elektronik.jpg",
  },
  {
    id: "2",
    title: "Teknisi HP Android",
    instructorName: "Andi Pratama",
    level: "Menengah",
    rating: 4.7,
    price: 750000,
    image: "/teknisi hp.jpg",
  },
  {
    id: "3",
    title: "Service TV LED & LCD",
    instructorName: "Rizky Kurniawan",
    level: "Menengah",
    rating: 4.6,
    price: 700000,
    image: "/teknis tv.jpg",
  },
  {
    id: "4",
    title: "Instalasi Listrik Rumah",
    instructorName: "Ahmad Fauzi",
    level: "Pemula",
    rating: 4.9,
    price: 600000,
    image: "/teknis instalasi rumah.jpg",
  },
  {
    id: "5",
    title: "Service Kulkas & AC",
    instructorName: "Dedi Saputra",
    level: "Lanjutan",
    rating: 4.7,
    price: 800000,
    image: "/teknisi ac.jpg",
  },
  {
    id: "6",
    title: "Perakitan Komputer",
    instructorName: "Fajar Nugroho",
    level: "Pemula",
    rating: 4.5,
    price: 550000,
    image: "/teknis komputer.jpg",
  },
  {
    id: "7",
    title: "Service Laptop",
    instructorName: "Rian Hidayat",
    level: "Menengah",
    rating: 4.6,
    price: 750000,
    image: "/teknis laptop.jpg",
  },
  {
    id: "8",
    title: "Elektronika Industri Dasar",
    instructorName: "Slamet Widodo",
    level: "Lanjutan",
    rating: 4.4,
    price: 900000,
    image: "/teknis industri.jpg",
  },
  {
    id: "9",
    title: "Teknisi CCTV",
    instructorName: "Hendra Gunawan",
    level: "Menengah",
    rating: 4.8,
    price: 650000,
    image: "/teknisi cctv.jpg",
  },
];

export default function CoursesPage() {
  const [search, setSearch] = useState("");

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="navbar-title">Educourse Elektronik</h1>
        <div className="navbar-menu">
          <Link href="/">Beranda</Link>
          <Link href="/kursus">Kursus</Link>
        </div>
      </nav>

      {/* Content */}
      <section className="course-section">
        <h2 className="section-title">Semua Kursus</h2>

       <div className="search-wrapper">
        <span className="search-icon">🔍</span>
        <input
            type="text"
            placeholder="Cari kursus elektronik..."
            className="search-input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
        </div>


        <div className="course-grid">
          {filteredCourses.map((course) => (
            <div className="course-card" key={course.id}>
              <div className="course-image-wrapper">
                <img
                  src={course.image}
                  alt={course.title}
                  className="course-image"
                />
              </div>

              <div className="course-content">
                <span className="course-level">{course.level}</span>
                <h3 className="course-title">{course.title}</h3>
                <p className="course-instructor">
                  👨‍🏫 {course.instructorName}
                </p>

                <div className="course-meta">
                  <span className="course-rating">⭐ {course.rating}</span>
                  <span className="course-price">
                    Rp {course.price.toLocaleString("id-ID")}
                  </span>
                </div>

                <Link
                    href={`/detail${course.id}`}
                    className="course-button"
                    >
                    Lihat Detail
                </Link>

              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
