// TUGAS BUILD IN FUNCTION
// 1. Buat dan jelaskanlah 10 method bawaan JavaScript (Built-in Functions) beserta contoh
// penggunaannya(kecuali : split, reverse, join, foreach, map)

/// 1. filter
// Digunakan untuk membuat array baru dengan semua elemen yang lolos dari uji yang diberikan oleh fungsi callback.
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]
// Method filter akan memfilter array numbers dan hanya menyimpan angka yang genap.

// 2. slice
// Digunakan untuk mengembalikan bagian dari array atau string tanpa mengubah array atau string asli.
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);
console.log(citrus); // Output: ["Orange", "Lemon"]
// Method slice akan mengambil bagian dari array fruits mulai dari indeks 1 hingga indeks 3 (tidak termasuk).

// 3. reduce
// Menerapkan fungsi ke accumulator dan setiap elemen array (dari kiri ke kanan) untuk mengurangi array menjadi satu nilai.
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 10
// Method reduce akan menjumlahkan semua elemen dalam array numbers.

// 4. find
// Mengembalikan nilai elemen pertama dalam array yang memenuhi fungsi uji yang diberikan.
const found = numbers.find((num) => num > 3);
console.log(found); // Output: 4
// Method find akan menemukan elemen pertama yang lebih besar dari 3.

// 5. some
// Mengembalikan nilai true jika setidaknya satu elemen dalam array memenuhi fungsi uji yang diberikan.
const hasEven = numbers.some((num) => num % 2 === 0);
console.log(hasEven); // Output: true
// Method some akan memeriksa apakah ada elemen dalam array yang genap.

// 6. every
// Mengembalikan nilai true jika semua elemen dalam array memenuhi fungsi uji yang diberikan.
const allEven = numbers.every((num) => num % 2 === 0);
console.log(allEven); // Output: false
// Method every akan memeriksa apakah semua elemen dalam array adalah genap.

// 7. sort
// Mengurutkan elemen array di tempat dan mengembalikan array yang diurutkan.
const sortedFruits = fruits.sort();
console.log(sortedFruits); // Output: ["Apple", "Banana", "Lemon", "Mango", "Orange"]
// Method sort akan mengurutkan elemen dalam array fruits secara alfabetis.

// 8. includes
// Memeriksa apakah array atau string berisi elemen atau substring tertentu.
const hasApple = fruits.includes("Apple");
console.log(hasApple); // Output: true
// Method includes akan memeriksa apakah array fruits berisi "Apple".

// 9. push
// Menambahkan satu atau lebih elemen ke akhir array dan mengembalikan panjang baru array.
const newLength = fruits.push("Pineapple");
console.log(fruits); // Output: ["Apple", "Banana", "Lemon", "Mango", "Orange", "Pineapple"]
console.log(newLength); // Output: 6
// Method push akan menambahkan "Pineapple" ke akhir array fruits dan mengembalikan panjang baru array.

// 10. pop
// Menghapus elemen terakhir dari array dan mengembalikan elemen yang dihapus.
const lastFruit = fruits.pop();
console.log(lastFruit); // Output: "Pineapple"
console.log(fruits); // Output: ["Apple", "Banana", "Lemon", "Mango", "Orange"]
// Method pop akan menghapus elemen terakhir dari array fruits dan mengembalikan elemen tersebut.

// toLowerCase
// Mengubah string menjadi huruf kecil.
const text = "HELLO WORLD";
const lowerText = text.toLowerCase();
console.log(lowerText); // Output: "hello world"
// Method toLowerCase akan mengubah semua huruf dalam string menjadi huruf kecil.
