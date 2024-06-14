// 2. Buatlah program searching nama yang dapat dibatasi jumlah outputnya yang
// menerapkan callback function dengan data sebagai berikut:

const name = ["Abigail", "Alexandra", "Alison", "Amanda", "Angela", "Bella", "Carol", "Caroline", "Carolyn", "Deirdre", "Diana", "Elizabeth", "Ella", "Faith", "Olivia", "Penelope"];

function searchName(query, limit, callback) {
  // Filter nama berdasarkan query
  const filteredNames = name.filter((name) => name.toLowerCase().includes(query.toLowerCase()));
  // Batasi jumlah output
  const limitedNames = filteredNames.slice(0, limit);
  // Panggil callback function dengan hasilnya
  callback(limitedNames);
}

// Contoh penggunaan
searchName("an", 3, function (result) {
  console.log(result); // Output: ["Alexandra", "Amanda", "Angela"]
});
