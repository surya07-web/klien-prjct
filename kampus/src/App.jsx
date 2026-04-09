//tampilkan 3 data mahasiswa. gunakan array of object

function App() {
  const mahasiswaList = [
    { nim: "A11.2023.14901", nama: "Muuhammad Surya Ramadhan" },
    { nim: "A11.2023.14902", nama: "Siti Aisyah" },
    { nim: "A11.2023.14903", nama: "Budi Santoso" }
  ];

  return (
    <div>
      {mahasiswaList.map((mahasiswa, index) => (
        <div key={index}>
          <h3>Nama: {mahasiswa.nama}</h3>
          <h3>NIM: {mahasiswa.nim}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;