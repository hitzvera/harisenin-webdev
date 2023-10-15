const dataBuah = [
    {
        nama: "Apel",
        harga: 10000
    },
    {
        nama: "Jeruk",
        harga: 20000
    },
    {
        nama: "Mangga",
        harga: 15000
    }
]

for (let i = 0; i < dataBuah.length; i++) {
    console.log(dataBuah[i].nama);
}

const mobil = {
    merk: "Honda",
    warna: "Hitam",
    tahun: 2020,
    seri: 'Civic',
}

for (let key in mobil) {
    console.log(key, mobil[key]);
}