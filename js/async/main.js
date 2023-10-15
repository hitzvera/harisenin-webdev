// secara normal eksekusi javascript secara sinkronus (dari atas kebawah)
// console.log(1)
// console.log(2)
// console.log(3)

// 1 - 3 itu akan diprint secara berurutan , namun ketika kita menggunakan async maka urutan akan berubah

// console.log(1)
// setTimeout(() => {
//     console.log(2)
// }, 500)
// console.log(3)

// lalu bagaimana cara implementasinya
// callback, promises, dan async await

function pintu(username, callback) {
    if (username) {
        setTimeout(() => {
            callback({
                token: '123abc'
            })
        }, 2000)
    }
}

function box2(kunci_1, callback) {
    setTimeout(() => {
        if (kunci_1) {
            callback({
                kunci_2: '234abc'
            })
        }
    }, 1000)
}

function box3(kunci_2, callback) {
  setTimeout(() => {
    if (kunci_2) {
      callback({
        hadiah: "dapet 1 juta",
      });
    }
  }, 1000);
}

pintu('mujahid', function (kunci_1) {
    console.log(kunci_1)
    box2(kunci_1, function (kunci_2) {
        console.log(kunci_2)
        box3(kunci_2, function (hadiah) {
            console.log(hadiah)
        })
    })
})

