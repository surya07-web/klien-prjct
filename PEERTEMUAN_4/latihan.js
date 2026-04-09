//variable, menampung 1 data
const nim ="06543";

//variable array, menampung multiple data tapi 1 tipe data
const list_nim = [12345, 54321, 67890];

//object
const mahasiswa = {
    //key : value
    //key nya adalah nim, nama, status
    //key punya value masing masing
    nim : 123456789,
    nama: "Muuhammad Surya Ramadhan",
    umur: 20,
    satatus: true,
    matkul: [
        {
            matkulId: "MK001",
            nilai: 89
        },
        {
            matkulId: "MK032",
            nilai: 70
        }
    ]
};

console.log(mahasiswa);


//array of object
const list_mahasiswa = [
    {
        nama: "mahasiswa 1",
        nim: "A11.2020.12345",
        umut: 17
    },

    {
        nama: "mahasiswa 2",
        nim: "A11.2020.54321",
        umut: 18
    }

];    

console.log(list_mahasiswa);


// desctructuring object
    const mahasiswa2 = {
        nim : 123456789,
        nama: "Muuhammad Surya Ramadhan",
        umur: 20,
        satatus: true,  
    };

    const umur = mahasiswa2.umur;
    console.log(umur);

    if(umur > 20){
        console.log("Umur lebih dari 20");
    } else {
        console.log("Umur kurang dari atau sama dengan 20");
    }

const biodata_diri = {
    nama: "Muuhammad Surya Ramadhan",
    nim: "A11.2020.12345",
    jurusan: "Teknik Informatika",
    fakultas: "Ilmu Komputer"
};
console.log(biodata_diri);

//
console.log("Nama: "+nama+", umur: "+umur); 'Nama: Muuhammad Surya Ramadhan, umur: 20'

//literal output 
console.log(`Nama: ${nama}, umur: ${umur}`); 'Nama: Muuhammad Surya Ramadhan, umur:20'

//array of object
const listMahasiswa = [
    {nim: "123", nama: "jhon", umur: 19, "status": true},
    {nim: "456", nama: "doe", umur: 20, "status": false},
    {nim: "789", nama: "smith", umur: 21, "status": true}
];

//spread, nambah data
const new_mahasiswa = {nim: "321", nama: "jane", umur: 22, "status": false};

//spread ke array, tambah data ke array
const new_listMahasiswa = [...listMahasiswa,
    new_mahasiswa
 ];

// data before spread, data after spread
   const new_listMahasiswa = [...listMahasiswa,