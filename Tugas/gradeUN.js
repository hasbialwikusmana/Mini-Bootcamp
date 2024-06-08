// 1. Buat program yang menghitung rata-rata UN beserta gradenya, dengan mengisi 4
// nilai yakni Bahasa indonesia, Bahasa Inggris Matematika dan IPA, yang di dalam
// program tersebut memiliki validasi yaitu semua nilai tersebut harus diisi, dan juga
// untuk grade memiliki kondisi dengan ketentuan sebagai berikut:

const mtk = 80;
const bahasaIndonesia = 90;
const bahasaInggris = 89;
const ipa = 69;

if (
  typeof mtk !== "number" ||
  mtk <= 0 ||
  mtk >= 100 ||
  typeof bahasaIndonesia !== "number" ||
  bahasaIndonesia <= 0 ||
  bahasaIndonesia >= 100 ||
  typeof bahasaInggris !== "number" ||
  bahasaInggris <= 0 ||
  bahasaInggris >= 100 ||
  typeof ipa !== "number" ||
  ipa <= 0 ||
  ipa >= 100
) {
  console.log("Nilai yang dimasukan tidak valid");
} else {
  const rataRata = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4;

  let grade;

  if (rataRata >= 90) {
    grade = "A";
  } else if (rataRata >= 80) {
    grade = "B";
  } else if (rataRata >= 70) {
    grade = "C";
  } else if (rataRata >= 60) {
    grade = "D";
  } else {
    grade = "E";
  }
  console.log(`Rata-rata = ${rataRata}`);
  console.log(`Grade = ${grade}`);
}

// Output:
// Rata-rata = 82
// Grade = B
