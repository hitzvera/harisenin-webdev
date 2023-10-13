const now = new Date()
console.log(now)

// unix timestamp
const tanggalTimestamp = new Date(1600525320000);

// string
const tanggalString = new Date('Sep 25, 2020 11:15:00');
console.log(tanggalString)

// tanggal params date
const tanggalParams = new Date(2020, 8, 25, 21, 22, 0, 0);

console.log(tanggalParams.getFullYear(), tanggalParams.getMonth(), tanggalParams.getDay())

// YYYY-MM-DD
console.log(`${tanggalParams.getFullYear()}-${(tanggalParams.getMonth() + 1).toString().padStart(2, '0')}-${tanggalParams.getDate().toString().padStart(2, '0')}`)

const dateElm = document.querySelector('#container-date')
dateElm.innerHTML = `${tanggalParams.getFullYear()}-${(tanggalParams.getMonth() + 1).toString().padStart(2, '0')}-${tanggalParams.getDate().toString().padStart(2, '0')}`