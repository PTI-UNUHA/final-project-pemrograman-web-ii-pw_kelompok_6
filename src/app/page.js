export default function Home() {
  return (
    <main style={{ padding: "40px" }}>
      <h1>EduCourse</h1>
      <p>Platform pembelajaran online untuk mahasiswa</p>

      <section style={{ marginTop: "30px" }}>
        <h2>Kategori Kursus</h2>
        <ul>
          <li>Web Development</li>
          <li>UI / UX Design</li>
          <li>Mobile App</li>
        </ul>
      </section>

      <button style={{ marginTop: "20px" }}>
        Mulai Belajar
      </button>
    </main>
  );
}
